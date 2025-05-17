// CommonEnemies_Mines.js
// Inimigos comuns do bioma Abandoned Mines

import Enemy from '../Enemy.js';

const minesEnemies = [
  { type: 'bouncer', hp: 18, damage: 30, speed: 110, score: 3 },
  { type: 'shoveler', hp: 22, damage: 20, speed: 75, score: 2 },
  { type: 'gravel-hound', hp: 20, damage: 25, speed: 90, score: 3 },
  { type: 'minerling', hp: 16, damage: 22, speed: 100, score: 2 },
  { type: 'blast-core', hp: 12, damage: 35, speed: 85, score: 3 },
  { type: 'pickle-jumper', hp: 14, damage: 24, speed: 105, score: 2 },
  { type: 'shard-walker', hp: 25, damage: 18, speed: 60, score: 2 }
];

export function getRandomMinesEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(minesEnemies);
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