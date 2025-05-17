// EliteEnemies.js
// Roteador para spawns elite por bioma com carregamento modular

import { getRandomWastelandEliteEnemy } from './EliteEnemies_Wasteland.js';
import { getRandomSwampEliteEnemy } from './EliteEnemies_Swamp.js';
import { getRandomToxicityEliteEnemy } from './EliteEnemies_Toxicity.js';
import { getRandomMinesEliteEnemy } from './EliteEnemies_Mines.js';
import { getRandomBurningEliteEnemy } from './EliteEnemies_Burning.js';
import { getRandomMetropolisEliteEnemy } from './EliteEnemies_Metropolis.js';
import { getRandomDomeEliteEnemy } from './EliteEnemies_Dome.js';

export function getRandomEliteEnemy(scene, biome, x, y) {
  switch (biome) {
    case 'wasteland': return getRandomWastelandEliteEnemy(scene, x, y);
    case 'swamp': return getRandomSwampEliteEnemy(scene, x, y);
    case 'toxicity': return getRandomToxicityEliteEnemy(scene, x, y);
    case 'mines': return getRandomMinesEliteEnemy(scene, x, y);
    case 'burning': return getRandomBurningEliteEnemy(scene, x, y);
    case 'metropolis': return getRandomMetropolisEliteEnemy(scene, x, y);
    case 'dome': return getRandomDomeEliteEnemy(scene, x, y);
    default: return getRandomWastelandEliteEnemy(scene, x, y);
  }
}