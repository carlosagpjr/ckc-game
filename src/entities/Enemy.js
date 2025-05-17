// Enemy.js
// Classe base genérica para inimigos

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture = 'crawler') {
    super(scene, x, y, texture);

    // Adiciona à cena e ativa física
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.scene = scene;
    this.setCollideWorldBounds(true);

    // Atributos padrão (podem ser sobrescritos pelas subclasses)
    this.enemyType = 'generic';
    this.tier = 'common'; // 'common' | 'elite' | 'boss'
    this.speed = 100;
    this.damage = 20;
    this.maxHP = 30;
    this.currentHP = 30;

    // Cores e estilos por tier
    const tierStyles = {
      common: { hpColor: 0xff0000, labelColor: '#ffffff', fontSize: '12px' },
      elite:  { hpColor: 0xff9900, labelColor: '#ffff00', fontSize: '14px' },
      boss:   { hpColor: 0x990000, labelColor: '#ff6666', fontSize: '16px' }
    };
    const style = tierStyles[this.tier] || tierStyles.common;

    // Elementos visuais (nome, barra de vida)
    this.nameLabel = scene.add.text(this.x, this.y - 35, this.enemyType.toUpperCase(), {
      fontSize: style.fontSize,
      fill: style.labelColor
    }).setOrigin(0.5);

    this.hpBarBg = scene.add.rectangle(this.x - 20, this.y - 20, 40, 5, 0x555555).setOrigin(0, 0.5);
    this.hpBar = scene.add.rectangle(this.x - 20, this.y - 20, 40, 5, style.hpColor).setOrigin(0, 0.5);
  }

  update() {
    if (this.nameLabel) this.nameLabel.setPosition(this.x, this.y - 35);
    if (this.hpBarBg) this.hpBarBg.setPosition(this.x - 20, this.y - 20);
    if (this.hpBar) this.hpBar.setPosition(this.x - 20, this.y - 20);
  }

  pursue(player) {
    this.scene.physics.moveToObject(this, player, this.speed);
  }

  takeDamage(amount) {
    this.currentHP -= amount;
    this.updateHealthBar();
    if (this.currentHP <= 0) {
      this.destroyEnemy();
    }
  }

  updateHealthBar() {
    const percent = Math.max(0, this.currentHP / this.maxHP);
    this.hpBar.width = 40 * percent;
  }

  destroyEnemy() {
    this.nameLabel?.destroy();
    this.hpBar?.destroy();
    this.hpBarBg?.destroy();
    this.destroy();
  }
}