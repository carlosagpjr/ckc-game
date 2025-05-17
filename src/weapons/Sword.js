// Sword.js
// Arma de ataque corpo a corpo

import WeaponBase from './WeaponBase.js';

export default class Sword extends WeaponBase {
  constructor(scene, player) {
    super(scene, player);
    this.range = 60;
    this.damage = 25;
    this.cooldown = 600;
  }

  shoot(pointer) {
    const now = this.scene.time.now;
    if (now - this.lastFired < this.cooldown) return;
    this.lastFired = now;

    const enemies = this.scene.enemies.getChildren();
    enemies.forEach(enemy => {
      const distance = Phaser.Math.Distance.Between(
        this.player.x, this.player.y,
        enemy.x, enemy.y
      );
      if (distance <= this.range) {
        enemy.takeDamage(this.damage);
      }
    });
  }

  upgrade() {
    this.damage += 5;
    this.range += 5;
    this.cooldown = Math.max(200, this.cooldown - 50);
  }
}