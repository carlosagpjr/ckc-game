// CommonEnemies.js
// Roteador de inimigos comuns por bioma para carregamento modular

import { getRandomWastelandEnemy } from './CommonEnemies_Wasteland.js';
import { getRandomSwampEnemy } from './CommonEnemies_Swamp.js';
import { getRandomToxicityEnemy } from './CommonEnemies_Toxicity.js';
import { getRandomMinesEnemy } from './CommonEnemies_Mines.js';
import { getRandomBurningEnemy } from './CommonEnemies_Burning.js';
import { getRandomMetropolisEnemy } from './CommonEnemies_Metropolis.js';
import { getRandomDomeEnemy } from './CommonEnemies_Dome.js';

export function getRandomCommonEnemy(scene, biome, x, y) {
  switch (biome) {
    case 'wasteland': return getRandomWastelandEnemy(scene, x, y);
    case 'swamp': return getRandomSwampEnemy(scene, x, y);
    case 'toxicity': return getRandomToxicityEnemy(scene, x, y);
    case 'mines': return getRandomMinesEnemy(scene, x, y);
    case 'burning': return getRandomBurningEnemy(scene, x, y);
    case 'metropolis': return getRandomMetropolisEnemy(scene, x, y);
    case 'dome': return getRandomDomeEnemy(scene, x, y);
    default: return getRandomWastelandEnemy(scene, x, y);
  }
}