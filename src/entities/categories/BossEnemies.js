// BossEnemies.js
// Funções de criação dos bosses por bioma

import Enemy from '../Enemy.js';

function createBoss(scene, x, y, texture, name) {
  const boss = new Enemy(scene, x, y, texture);
  boss.enemyType = name;
  boss.tier = 'boss';
  boss.speed = 90;
  boss.damage = 80;
  boss.maxHP = 200;
  boss.currentHP = 200;
  return boss;
}

export function getBossForBiome(scene, biome, x, y) {
  switch (biome) {
    case 'wasteland': return createBoss(scene, x, y, 'overlord', 'Overlord');
    case 'swamp': return createBoss(scene, x, y, 'etali', 'Etali');
    case 'toxicity': return createBoss(scene, x, y, 'glowing-chimera', 'Glowing Chimera');
    case 'mines': return createBoss(scene, x, y, 'lord-kirdogun', 'Lord Kirdogun');
    case 'burning': return createBoss(scene, x, y, 'lord-alazput', 'Lord Alazput');
    case 'metropolis': return createBoss(scene, x, y, 'night-warden', 'Night Warden');
    case 'dome': return createBoss(scene, x, y, 'augur', 'Augur');
    default: return createBoss(scene, x, y, 'overlord', 'Overlord');
  }
}