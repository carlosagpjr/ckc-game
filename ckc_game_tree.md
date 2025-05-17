# 🌳 Estrutura de Pastas - CyberKidz Reclaim

```
ckc-game/
├── index.html                      # Tela inicial com ranking e arma
├── main.js                         # Inicializador do Phaser

├── docs/
│   └── estrutura_ckc_game.txt      # Arquivo explicativo da arquitetura

├── src/
│
├── ── scenes/
│   └── MainScene.js                # Lógica central do jogo
│
├── ── entities/
│   ├── Player.js                   # Jogador
│   ├── Enemy.js                    # Classe base dos inimigos
│   └── categories/
│       ├── CommonEnemies.js        # Roteador comum
│       ├── EliteEnemies.js         # Roteador elite
│       ├── BossEnemies.js          # Funções de bosses
│       ├── CommonEnemies_Wasteland.js
│       ├── CommonEnemies_Swamp.js
│       ├── CommonEnemies_Toxicity.js
│       ├── CommonEnemies_Mines.js
│       ├── CommonEnemies_Burning.js
│       ├── CommonEnemies_Metropolis.js
│       ├── CommonEnemies_Dome.js
│       ├── EliteEnemies_Wasteland.js
│       ├── EliteEnemies_Swamp.js
│       ├── EliteEnemies_Toxicity.js
│       ├── EliteEnemies_Mines.js
│       ├── EliteEnemies_Burning.js
│       ├── EliteEnemies_Metropolis.js
│       ├── EliteEnemies_Dome.js
│
├── ── systems/
│   ├── StageManager.js             # Controle dos biomas/fases
│   ├── PowerLevel.js               # Nível do jogador
│   ├── SpawnManager.js             # Spawn dinâmico de inimigos
│   ├── LootSystem.js               # Sistema de drops
│   └── UpgradeSystem.js            # Sistema de evolução
│
├── ── weapons/
│   ├── WeaponBase.js
│   ├── Blaster.js
│   ├── Sword.js
│   └── Lash.js
│
├── ── ui/
│   ├── HUD.js                      # Interface do jogo
│   └── Joystick.js                 # Joystick para mobile

├── RankingSystem.js               # Ranking online (JSON público)
```