// main.js
// Ponto de entrada do Phaser. Carrega a MainScene e inicia o jogo

import MainScene from './scenes/MainScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1e1e1e',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: [MainScene]
};

new Phaser.Game(config);