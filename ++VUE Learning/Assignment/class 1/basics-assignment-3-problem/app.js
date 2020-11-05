const app = Vue.createApp({
  data() {
    return {
      result: 0
    }
  },


  watch: {
    resultText() {
      const that = this;
      setTimeout(function () {
        that.result = 0;
      }, 5000);
    }
  },

  computed: {
    resultText() {
      if (this.result === 37) {
        return this.result;
      } else if (this.result > 37) {
        return 'Too much!!';
      } else {
        return 'Not there yet';
      }
    }
  },

  methods: {
    add(num) {
      this.result = this.result + num;
    }

  }

})



app.mount('#assignment')