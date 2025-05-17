// UpgradeSystem.js
// Sistema de upgrades com aplicação de melhorias ao jogador

export default class UpgradeSystem {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;
  }

  applyUpgrade(type) {
    switch (type) {
      case 'hp':
        this.player.stats.hp = Math.min(this.player.stats.maxHp, this.player.stats.hp + 20);
        break;
      case 'maxHp':
        this.player.stats.maxHp += 10;
        this.player.stats.hp = this.player.stats.maxHp;
        break;
      case 'speed':
        this.player.speed += 10;
        break;
      case 'weapon':
        if (this.player.weapon?.upgrade) this.player.weapon.upgrade();
        break;
      default:
        break;
    }
  }
}