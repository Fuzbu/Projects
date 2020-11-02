function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}





const app = Vue.createApp({



  data() {
    return {
      playerHP: 100,
      enemyHp: 100,
    };
  },



  methods: {
    attackEnemy() {
      const attackValue = getRandomValue(5, 12);
      this.enemyHp = this.enemyHp - attackValue;
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 16);
      this.playerHp = this.playerHp - attackValue;
      this.attackEnemy();
    }
  }




})

app.mount('#game')