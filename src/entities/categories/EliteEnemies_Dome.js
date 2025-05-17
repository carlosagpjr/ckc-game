// EliteEnemies_Dome.js
// Inimigos elite do bioma final: Dome

import Enemy from '../Enemy.js';

const domeElites = [
  { type: 'warden-elite', hp: 90, damage: 60, speed: 100, score: 8 },
  { type: 'sybil-guard', hp: 88, damage: 58, speed: 105, score: 8 },
  { type: 'augur-clone', hp: 85, damage: 56, speed: 110, score: 8 },
  { type: 'overcharged', hp: 80, damage: 50, speed: 115, score: 7 },
  { type: 'voidspawn', hp: 78, damage: 48, speed: 120, score: 7 }
];

export function getRandomDomeEliteEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(domeElites);
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