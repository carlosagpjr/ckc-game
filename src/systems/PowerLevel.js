// PowerLevel.js
// Sistema de cálculo do nível de poder do jogador

export default class PowerLevel {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;
  }

  calculate() {
    const hpRatio = this.player.stats.hp / this.player.stats.maxHp;
    const hasWeapon = this.player.weapon ? 1 : 0;
    const stageFactor = this.scene.stageManager.stageIndex * 0.5;

    let power = 1 + hasWeapon + (1 - hpRatio) + stageFactor;
    return Math.max(1, Math.round(power * 10) / 10); // Arredondado para 1 casa decimal
  }
}