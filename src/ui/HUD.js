// HUD.js
// Interface gráfica com HP, score, tempo e estágio

export default class HUD {
  constructor(scene) {
    this.scene = scene;

    this.hpText = scene.add.text(10, 60, 'HP: 100', { fontSize: '20px', fill: '#FFFFFF' }).setScrollFactor(0);
    this.hpBarBg = scene.add.rectangle(10, 90, 200, 20, 0x555555).setOrigin(0).setScrollFactor(0);
    this.hpBar = scene.add.rectangle(10, 90, 200, 20, 0xff3333).setOrigin(0).setScrollFactor(0);

    this.scoreText = scene.add.text(10, 115, 'Score: 0', { fontSize: '20px', fill: '#FFFFFF' }).setScrollFactor(0);
    this.timeText = scene.add.text(400, 10, 'Stage 1 - Time: 60s', { fontSize: '20px', fill: '#FFFFFF' })
      .setScrollFactor(0)
      .setOrigin(0.5, 0);
  }

  updateHP(hp, maxHP) {
    this.hpText.setText('HP: ' + hp);
    this.hpBar.width = 200 * hp / maxHP;
  }

  updateScore(score) {
    this.scoreText.setText('Score: ' + score);
  }

  updateStage(stageIndex, remainingTime) {
    this.timeText.setText(`Stage ${stageIndex + 1} - Time: ${Math.ceil(remainingTime)}s`);
  }
}