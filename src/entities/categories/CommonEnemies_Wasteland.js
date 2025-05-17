// CommonEnemies_Wasteland.js
// Inimigos comuns do bioma Wasteland Desert

import Enemy from '../Enemy.js';

const wastelandEnemies = [
  { type: 'crawler', hp: 20, damage: 15, speed: 60, score: 1 },
  { type: 'sand-biter', hp: 18, damage: 20, speed: 80, score: 2 },
  { type: 'spike-rat', hp: 16, damage: 25, speed: 90, score: 2 },
  { type: 'dust-stalker', hp: 22, damage: 18, speed: 70, score: 2 },
  { type: 'bone-runner', hp: 14, damage: 22, speed: 100, score: 2 },
  { type: 'scorcher', hp: 15, damage: 30, speed: 85, score: 3 },
  { type: 'shellback', hp: 30, damage: 12, speed: 50, score: 2 }
];

export function getRandomWastelandEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(wastelandEnemies);
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