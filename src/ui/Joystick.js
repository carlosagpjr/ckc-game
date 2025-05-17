// Joystick.js
// Controle virtual para dispositivos mobile

export default class Joystick {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;

    this.base = scene.add.circle(100, 500, 40, 0x222222).setScrollFactor(0).setDepth(1000);
    this.thumb = scene.add.circle(100, 500, 20, 0x888888).setScrollFactor(0).setDepth(1001);

    this.pointer = null;
    this.active = false;
    this.distance = 0;
    this.angle = 0;

    this.base.setInteractive();
    this.thumb.setInteractive();

    this.scene.input.on('pointerdown', this.onDown, this);
    this.scene.input.on('pointerup', this.onUp, this);
    this.scene.input.on('pointermove', this.onMove, this);
  }

  onDown(pointer) {
    if (pointer.x < 200) {
      this.pointer = pointer;
      this.active = true;
      this.base.setPosition(pointer.x, pointer.y);
      this.thumb.setPosition(pointer.x, pointer.y);
    }
  }

  onUp(pointer) {
    if (this.pointer && pointer.id === this.pointer.id) {
      this.active = false;
      this.pointer = null;
      this.base.setPosition(100, 500);
      this.thumb.setPosition(100, 500);
    }
  }

  onMove(pointer) {
    if (!this.active || pointer.id !== this.pointer?.id) return;

    const dx = pointer.x - this.base.x;
    const dy = pointer.y - this.base.y;
    this.distance = Math.min(40, Math.sqrt(dx * dx + dy * dy));
    this.angle = Math.atan2(dy, dx);
    const x = this.base.x + Math.cos(this.angle) * this.distance;
    const y = this.base.y + Math.sin(this.angle) * this.distance;
    this.thumb.setPosition(x, y);
  }

  update() {
    if (!this.active) return;

    const velocityX = Math.cos(this.angle) * this.player.speed;
    const velocityY = Math.sin(this.angle) * this.player.speed;
    this.player.setVelocity(velocityX, velocityY);
  }
}