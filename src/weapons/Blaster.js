// Blaster.js
// Arma de ataque à distância

import WeaponBase from './WeaponBase.js';

export default class Blaster extends WeaponBase {
  constructor(scene, player) {
    super(scene, player);
    this.bulletSpeed = 500;
    this.bulletLifetime = 1000;
    this.damage = 10;
    this.cooldown = 500;
  }

  shoot(pointer) {
    const now = this.scene.time.now;
    if (now - this.lastFired < this.cooldown) return;
    this.lastFired = now;

    const bullet = this.scene.physics.add.sprite(this.player.x, this.player.y, 'bullet');
    bullet.setScale(0.5);
    bullet.setCollideWorldBounds(true);
    bullet.body.onWorldBounds = true;

    const worldPointer = pointer.positionToCamera(this.scene.cameras.main);
    const dx = worldPointer.x - this.player.x;
    const dy = worldPointer.y - this.player.y;
    const angle = Math.atan2(dy, dx);

    bullet.setRotation(angle);
    this.scene.physics.velocityFromRotation(angle, this.bulletSpeed, bullet.body.velocity);

    this.scene.time.delayedCall(this.bulletLifetime, () => {
      if (bullet.active) bullet.destroy();
    });
  }

  upgrade() {
    this.damage += 2;
    this.cooldown = Math.max(100, this.cooldown - 50);
  }
}