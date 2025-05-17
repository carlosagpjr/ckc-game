# 🚀 CyberKidz Reclaim

CyberKidz Reclaim é um jogo de sobrevivência em 2D construído com **Phaser.js**, inspirado em um universo futurista onde o último guerreiro puro precisa explorar biomas hostis para recuperar a liberdade do mundo perdido. O jogador enfrenta hordas de inimigos mutantes, sobrevive a estágios crescentes de dificuldade e coleta recursos raros para desbloquear visuais únicos.

---

## 🎮 Como Jogar

- Use **WASD** para movimentar
- Mire e atire com o mouse (ou toque na tela)
- Escolha sua **arma** no menu inicial
- Sobreviva o máximo possível
- Derrote inimigos comuns, elites e bosses
- Colete **tokens e materiais raros** conforme avança pelos biomas

---

## 🧠 Mecânicas

- **Biomas sequenciais:** 7 ambientes únicos com atributos e inimigos próprios
- **Sistema de Power Level:** spawn adaptativo de inimigos baseado em desempenho
- **Loot dinâmico:** drops comuns, upgrades, tokens e materiais raros por bioma
- **Ranking Online:** os melhores jogadores são listados em tempo real via JSON hospedado no GitHub
- **Weapon Skins (visual):** tokens poderão ser usados para desbloquear visuais futuramente

---

## 📁 Estrutura do Projeto

```
ckc-game/
├── index.html
├── main.js
├── docs/
│   └── estrutura_ckc_game.txt
├── src/
│   ├── scenes/
│   │   └── MainScene.js
│   ├── entities/
│   │   ├── Player.js
│   │   ├── Enemy.js
│   │   └── categories/ (19 arquivos)
│   ├── weapons/ (4 arquivos)
│   ├── systems/ (5 arquivos)
│   └── ui/ (2 arquivos)
├── RankingSystem.js
```

Para ver a árvore completa: [`ckc_game_tree.md`](docs/estrutura_ckc_game.txt)

---

## 🌍 Ranking Online

O ranking dos jogadores é mantido através de um arquivo JSON hospedado via GitHub Pages.  
Você pode consultar os top jogadores diretamente na interface do jogo ou acessando:

```
https://seuusuario.github.io/ckc-game/data/ranking.json
```

---

## 🛠️ Tecnologias Utilizadas

- [Phaser 3](https://phaser.io/)
- HTML5 + JS ES6 Modules
- GitHub Pages
- Estrutura modular com classes organizadas por tipo
- JSON como base de ranking

---

## 📷 Screenshots

_(adicione aqui capturas de tela do jogo em ação)_

---

## 📦 Instalação Local

1. Clone o repositório:
   ```
   git clone https://github.com/seuusuario/ckc-game.git
   ```

2. Abra `index.html` em seu navegador (servidor local opcional)

3. Pronto para jogar!

---

## 🧩 Contribuições

Pull requests são bem-vindos! Sinta-se à vontade para abrir issues, sugerir melhorias ou reportar bugs.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

## 🙌 Agradecimentos

A todos os que apoiam ideias criativas e o desenvolvimento de experiências imersivas em jogos 2D ❤️