// MainScene.js
// Cena principal do jogo (estrutura base)

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    this.load.image('player', './assets/player-icon.png');
    this.load.image('blaster', './assets/blaster-icon.png');
    this.load.image('background', './assets/wasteland-background.png');
  }

  create() {
    // Adiciona fundo
    this.add.tileSprite(0, 0, 5000, 5000, 'background').setOrigin(0);

    // Adiciona jogador no centro do mapa
    this.player = this.physics.add.sprite(2500, 2500, 'player').setCollideWorldBounds(true);

    // Câmera segue o jogador
    this.cameras.main.setBounds(0, 0, 5000, 5000);
    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

    // Controles
    this.cursors = this.input.keyboard.addKeys('W,A,S,D');
  }

  update() {
    const speed = 200;
    this.player.setVelocity(0);

    if (this.cursors.W.isDown) this.player.setVelocityY(-speed);
    if (this.cursors.S.isDown) this.player.setVelocityY(speed);
    if (this.cursors.A.isDown) this.player.setVelocityX(-speed);
    if (this.cursors.D.isDown) this.player.setVelocityX(speed);
  }
}