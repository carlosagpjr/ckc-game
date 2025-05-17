// EliteEnemies_Metropolis.js
// Inimigos elite do bioma Ancient Metropolis

import Enemy from '../Enemy.js';

const metropolisElites = [
  { type: 'cyberhound', hp: 58, damage: 38, speed: 120, score: 5 },
  { type: 'nanoblade', hp: 60, damage: 45, speed: 110, score: 5 },
  { type: 'pulsebot', hp: 65, damage: 50, speed: 100, score: 6 },
  { type: 'glitcher', hp: 55, damage: 40, speed: 115, score: 5 },
  { type: 'shifter', hp: 52, damage: 35, speed: 125, score: 5 }
];

export function getRandomMetropolisEliteEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(metropolisElites);
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