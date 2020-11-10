const app = Vue.creatApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false
    };
  },


  methods: {
    boxSelected(box) {
      if (box === 'A') {
        this.boxASelected = true;
      } else if (box === 'B') {
        this.boxBSelected = true;
      } else if (box === 'C') {
        this.boxCSelected = true;
      }
    }

  },

  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },

  }



})



app.mount('#styling')