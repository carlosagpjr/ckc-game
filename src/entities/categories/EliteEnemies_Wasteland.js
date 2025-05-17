// EliteEnemies_Wasteland.js
// Inimigos elite do bioma Wasteland Desert

import Enemy from '../Enemy.js';

const wastelandElites = [
  { type: 'crusher', hp: 80, damage: 50, speed: 80, score: 6 },
  { type: 'vulture', hp: 60, damage: 40, speed: 100, score: 5 },
  { type: 'raider', hp: 65, damage: 45, speed: 90, score: 6 },
  { type: 'spiker', hp: 55, damage: 35, speed: 110, score: 5 },
  { type: 'howler', hp: 50, damage: 30, speed: 120, score: 4 }
];

export function getRandomWastelandEliteEnemy(scene, x, y) {
  const def = Phaser.Utils.Array.GetRandom(wastelandElites);
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