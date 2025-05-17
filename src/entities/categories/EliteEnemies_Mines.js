// EliteEnemies_Mines.js
// Inimigos elite do bioma Abandoned Mines

import Enemy from '../Enemy.js';

const minesElites = [
  { type: 'driller', hp: 72, damage: 50, speed: 100, score: 6 },
  { type: 'grubber', hp: 74, damage: 55, speed: 85, score: 6 },
  { type: 'blastling', hp: 68, damage: 52, speed: 95, score: 6 },
  { type: 'pickaxe', hp: 80, damage: 60, speed: 80, score: 7 },
  { type: 'miner', hp: 66, damage: 47, speed: 90, score: 5 }
];

export function getRandomMinesEliteEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(minesElites);
  const enemy = new Enemy(scene, x, y, def.type);

  enemy.enemyType = def.type;
  enemy.speed = def.speed;
  enemy.damage = def.damage;
  enemy.maxHP = def.hp;
  enemy.currentHP = def.hp;
  enemy.scoreValue = def.score;
  enemy.tier = 'elite';

  return enemy;
}