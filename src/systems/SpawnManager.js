// SpawnManager.js
// Controla o spawn de inimigos com base em tempo, bioma e power level

import { getRandomCommonEnemy } from '../entities/categories/CommonEnemies.js';
import { getRandomEliteEnemy } from '../entities/categories/EliteEnemies.js';
import { getBossForBiome } from '../entities/categories/BossEnemies.js';

export default class SpawnManager {
  constructor(scene, player, enemiesGroup, stageManager, powerLevel) {
    this.scene = scene;
    this.player = player;
    this.enemies = enemiesGroup;
    this.stageManager = stageManager;
    this.powerLevel = powerLevel;

    this.spawnInterval = 2000;
    this.spawnTimer = this.scene.time.addEvent({
      delay: this.spawnInterval,
      callback: this.spawnEnemy,
      callbackScope: this,
      loop: true
    });

    this.bossSpawned = false;
  }

  spawnEnemy() {
    const stageData = this.stageManager.getCurrentStageData();
    const biome = stageData?.id || 'wasteland';

    if (!this.bossSpawned && stageData?.timeRemaining === 0) {
      const { x: camX, y: camY, width, height } = this.scene.cameras.main;
      const buffer = 20;
      const spawnX = Phaser.Math.Between(camX - buffer, camX + width + buffer);
      const spawnY = Phaser.Math.Between(camY - buffer, camY + height + buffer);

      const boss = getBossForBiome(this.scene, biome, spawnX, spawnY);
      this.enemies.add(boss);
      this.bossSpawned = true;
      this.spawnTimer.paused = true;
      return;
    }

    const power = this.powerLevel.calculate();
    const dynamicDelay = Math.max(600, 2000 - power * 100);
    this.spawnTimer.delay = dynamicDelay;

    const { x: camX, y: camY, width, height } = this.scene.cameras.main;
    const buffer = 20;
    const spawnX = Phaser.Math.Between(camX - buffer, camX + width + buffer);
    const spawnY = Phaser.Math.Between(camY - buffer, camY + height + buffer);

    const isElite = Math.random() < Math.min(0.1 + power * 0.01, 0.4);
    const enemy = isElite
      ? getRandomEliteEnemy(this.scene, biome, spawnX, spawnY)
      : getRandomCommonEnemy(this.scene, biome, spawnX, spawnY);

    this.enemies.add(enemy);
  }

  reset() {
    this.bossSpawned = false;
    this.spawnTimer.reset({
      delay: this.spawnInterval,
      callback: this.spawnEnemy,
      callbackScope: this,
      loop: true
    });
  }
}