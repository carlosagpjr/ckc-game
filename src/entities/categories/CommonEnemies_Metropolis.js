// CommonEnemies_Metropolis.js
// Inimigos comuns do bioma Ancient Metropolis

import Enemy from '../Enemy.js';

const metropolisEnemies = [
  { type: 'cyberbug', hp: 15, damage: 20, speed: 100, score: 2 },
  { type: 'null-rat', hp: 14, damage: 24, speed: 95, score: 2 },
  { type: 'byte-hacker', hp: 18, damage: 26, speed: 85, score: 3 },
  { type: 'glitch-ling', hp: 20, damage: 20, speed: 90, score: 2 },
  { type: 'pulse-tick', hp: 22, damage: 18, speed: 70, score: 2 },
  { type: 'system-spike', hp: 12, damage: 40, speed: 105, score: 3 },
  { type: 'sentinel-frag', hp: 25, damage: 30, speed: 60, score: 4 }
];

export function getRandomMetropolisEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(metropolisEnemies);
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