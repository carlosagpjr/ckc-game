// EliteEnemies_Swamp.js
// Inimigos elite do bioma Covernant Swamp

import Enemy from '../Enemy.js';

const swampElites = [
  { type: 'serpent', hp: 50, damage: 30, speed: 110, score: 4 },
  { type: 'toxic-boar', hp: 75, damage: 55, speed: 80, score: 6 },
  { type: 'rootling', hp: 60, damage: 40, speed: 90, score: 5 },
  { type: 'mirefiend', hp: 55, damage: 35, speed: 100, score: 5 },
  { type: 'spore', hp: 52, damage: 33, speed: 105, score: 4 }
];

export function getRandomSwampEliteEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(swampElites);
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