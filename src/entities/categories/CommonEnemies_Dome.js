// CommonEnemies_Dome.js
// Inimigos comuns do bioma final: Dome

import Enemy from '../Enemy.js';

const domeEnemies = [
  { type: 'dome-hunter', hp: 20, damage: 30, speed: 100, score: 4 },
  { type: 'shard-wolf', hp: 18, damage: 26, speed: 110, score: 3 },
  { type: 'voidling', hp: 14, damage: 28, speed: 120, score: 3 },
  { type: 'overseer-frag', hp: 25, damage: 22, speed: 80, score: 3 },
  { type: 'echo-spiker', hp: 22, damage: 24, speed: 90, score: 3 },
  { type: 'sync-claw', hp: 16, damage: 32, speed: 100, score: 4 },
  { type: 'exile-core', hp: 30, damage: 35, speed: 70, score: 5 }
];

export function getRandomDomeEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(domeEnemies);
  const enemy = new Enemy(scene, x, y, def.type);

  enemy.enemyType = def.type;
  enemy.speed = def.speed;
  enemy.damage = def.damage;
  enemy.maxHP = def.hp;
  enemy.currentHP = def.hp;
  enemy.scoreValue = def.score;
  enemy.tier = 'common';

  return enemy;
}