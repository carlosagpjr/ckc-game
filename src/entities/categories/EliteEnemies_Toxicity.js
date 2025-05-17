// EliteEnemies_Toxicity.js
// Inimigos elite do bioma Toxicity

import Enemy from '../Enemy.js';

const toxicityElites = [
  { type: 'radwolf', hp: 48, damage: 32, speed: 130, score: 4 },
  { type: 'slimer', hp: 70, damage: 50, speed: 90, score: 6 },
  { type: 'nukeling', hp: 65, damage: 48, speed: 100, score: 6 },
  { type: 'spewer', hp: 60, damage: 36, speed: 105, score: 5 },
  { type: 'swarmeye', hp: 58, damage: 34, speed: 110, score: 5 }
];

export function getRandomToxicityEliteEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(toxicityElites);
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