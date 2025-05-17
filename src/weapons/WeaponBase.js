// WeaponBase.js
// Classe abstrata para armas

export default class WeaponBase {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;
    this.cooldown = 500;
    this.lastFired = 0;
  }

  shoot(pointer) {
    throw new Error('Método shoot precisa ser implementado pela subclasse');
  }

  update() {
    // Pode ser sobrescrito
  }

  upgrade() {
    // Pode ser sobrescrito
  }
}