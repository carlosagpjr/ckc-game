// StageManager.js
// Gerencia a progressão de fases e biomas

export default class StageManager {
  constructor(scene) {
    this.scene = scene;
    this.stageIndex = 0;
    this.stageTimer = 0;
    this.stageDuration = 60; // em segundos
    this.bossDefeated = false;

    this.stages = [
      { id: 'wasteland', biomeName: 'Wasteland Desert', tribe: 'Nomads', boss: 'overlord', materialDrop: 'magma', mainAttribute: 'balance', duration: 60 },
      { id: 'swamp', biomeName: 'Covernant Swamp', tribe: 'Reptilians', boss: 'etali', materialDrop: 'fluid', mainAttribute: 'heal', duration: 65 },
      { id: 'toxicity', biomeName: 'Toxicity', tribe: 'Radioactives', boss: 'glowing-chimera', materialDrop: 'polymer', mainAttribute: 'speed', duration: 70 },
      { id: 'mines', biomeName: 'Abandoned Mines', tribe: 'Undergrounders', boss: 'lord-kirdogun', materialDrop: 'metal', mainAttribute: 'atk speed', duration: 75 },
      { id: 'burning', biomeName: 'Burning Ridge', tribe: 'Volcanics', boss: 'lord-alazput', materialDrop: 'magma', mainAttribute: 'damage', duration: 80 },
      { id: 'metropolis', biomeName: 'Ancient Metropolis', tribe: 'Nocturnals', boss: 'night-warden', materialDrop: 'nano', mainAttribute: 'range', duration: 85 },
      { id: 'dome', biomeName: 'Dome', tribe: 'CyberCouncil', boss: 'augur', materialDrop: 'crystal', mainAttribute: 'final', duration: 999 }
    ];

    this.currentStage = this.stages[this.stageIndex];
    this.remainingTime = this.currentStage.duration;
  }

  update(delta) {
    this.stageTimer += delta / 1000;
    this.remainingTime = Math.max(0, this.currentStage.duration - this.stageTimer);
    if (this.remainingTime === 0 && !this.bossDefeated) {
      return 'boss';
    }
    return null;
  }

  advanceStage() {
    if (this.stageIndex < this.stages.length - 1) {
      this.stageIndex++;
      this.stageTimer = 0;
      this.bossDefeated = false;
      this.currentStage = this.stages[this.stageIndex];
      this.remainingTime = this.currentStage.duration;
    }
  }

  markBossDefeated() {
    this.bossDefeated = true;
  }

  getCurrentStageData() {
    return {
      ...this.currentStage,
      timeRemaining: this.remainingTime,
      index: this.stageIndex
    };
  }
}