// CommonEnemies_Swamp.js
// Inimigos comuns do bioma Covernant Swamp

import Enemy from '../Enemy.js';

const swampEnemies = [
  { type: 'leaper', hp: 15, damage: 20, speed: 100, score: 2 },
  { type: 'sporeling', hp: 14, damage: 18, speed: 95, score: 2 },
  { type: 'mireling', hp: 20, damage: 22, speed: 80, score: 2 },
  { type: 'rootcrawler', hp: 25, damage: 18, speed: 70, score: 2 },
  { type: 'toxic-fly', hp: 12, damage: 30, speed: 110, score: 3 },
  { type: 'mud-stalker', hp: 18, damage: 26, speed: 85, score: 3 },
  { type: 'vine-spiker', hp: 22, damage: 25, speed: 60, score: 3 }
];

export function getRandomSwampEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(swampEnemies);
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