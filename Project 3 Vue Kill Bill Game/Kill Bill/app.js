function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



const app = Vue.createApp({
  data() {
    return {
      playerHp: 100,
      enemyHp: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    };
  },


  computed: {
    enemyBarStyles() {
      if (this.enemyHp < 0) {
        return { width: '0%' };
      }
      return { width: this.enemyHp + '%' }
    },

    playerBarStyles() {
      if (this.playerHp < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHp + '%' }
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 == 0;
    },



  },
  watch: {
    playerHp(value) {
      if (value <= 0 && this.enemyHp <= 0) {
        // a draw
        this.winner = 'draw';
      } else if (value <= 0) {
        //player Lost
        this.winner = 'enemy';
      }

    },
    enemyHp(value) {
      if (value <= 0 && this.playerHp <= 0) {
        //a draw
        this.winner = 'draw';
      } else if (value <= 0) {
        //Monster Lost
        this.winner = 'player';
      }
    }
  },


  methods: {
    startGame() {
      this.playerHp = 100;
      this.enemyHp = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];

    },
    attackEnemy() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.enemyHp = this.enemyHp - attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHp = this.playerHp - attackValue;
      this.addLogMessage('enemy', 'attack', attackValue);
    },
    specialAttackEnemy() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.enemyHp = this.enemyHp - attackValue;
      this.addLogMessage('player', 'special-attack', attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHp + healValue > 100) {
        this.playerHp = 100;
      } else {
        this.playerHp = this.playerHp + healValue;
      }
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'enemy';
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    },

  }




});

app.mount('#game')