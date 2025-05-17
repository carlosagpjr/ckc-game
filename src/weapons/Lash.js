// Lash.js
// Arma híbrida com ataque em área

import WeaponBase from './WeaponBase.js';

export default class Lash extends WeaponBase {
  constructor(scene, player) {
    super(scene, player);
    this.radius = 100;
    this.damage = 15;
    this.cooldown = 800;
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
      if (distance <= this.radius) {
        enemy.takeDamage(this.damage);
      }
    });
  }

  upgrade() {
    this.damage += 3;
    this.radius += 10;
    this.cooldown = Math.max(300, this.cooldown - 50);
  }
}