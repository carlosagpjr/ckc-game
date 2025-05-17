// Player.js
// Classe do jogador com movimentação e arma

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    this.speed = 200;
    this.weapon = null; // Arma equipada
    this.wallet = '0x000...abc'; // Placeholder de wallet

    this.stats = {
      hp: 100,
      maxHp: 100
    };
  }

  update(cursors) {
    this.setVelocity(0);
    if (cursors.left.isDown) this.setVelocityX(-this.speed);
    else if (cursors.right.isDown) this.setVelocityX(this.speed);

    if (cursors.up.isDown) this.setVelocityY(-this.speed);
    else if (cursors.down.isDown) this.setVelocityY(this.speed);

    if (this.weapon?.update) this.weapon.update();
  }

  setWeapon(weapon) {
    this.weapon = weapon;
  }

  takeDamage(amount) {
    this.stats.hp -= amount;
    if (this.stats.hp <= 0) this.stats.hp = 0;
  }
}