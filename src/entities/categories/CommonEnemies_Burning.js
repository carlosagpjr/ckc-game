// CommonEnemies_Burning.js
// Inimigos comuns do bioma Burning Ridge

import Enemy from '../Enemy.js';

const burningEnemies = [
  { type: 'ember-ling', hp: 14, damage: 22, speed: 100, score: 2 },
  { type: 'flame-crawler', hp: 16, damage: 26, speed: 90, score: 3 },
  { type: 'smoke-dasher', hp: 18, damage: 20, speed: 105, score: 2 },
  { type: 'blaze-beetle', hp: 20, damage: 30, speed: 80, score: 3 },
  { type: 'molten-slinger', hp: 22, damage: 25, speed: 70, score: 3 },
  { type: 'spark-hopper', hp: 12, damage: 35, speed: 110, score: 3 },
  { type: 'ash-walker', hp: 30, damage: 15, speed: 50, score: 2 }
];

export function getRandomBurningEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(burningEnemies);
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