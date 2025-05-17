// CommonEnemies_Toxicity.js
// Inimigos comuns do bioma Toxicity

import Enemy from '../Enemy.js';

const toxicityEnemies = [
  { type: 'exploder', hp: 10, damage: 40, speed: 90, score: 3 },
  { type: 'slimelet', hp: 12, damage: 22, speed: 100, score: 2 },
  { type: 'glowmite', hp: 14, damage: 18, speed: 110, score: 2 },
  { type: 'gas-lurker', hp: 20, damage: 20, speed: 80, score: 2 },
  { type: 'ooze-dasher', hp: 16, damage: 24, speed: 105, score: 2 },
  { type: 'acid-hopper', hp: 18, damage: 26, speed: 95, score: 3 },
  { type: 'burstpod', hp: 22, damage: 35, speed: 70, score: 3 }
];

export function getRandomToxicityEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(toxicityEnemies);
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