const app = Vue.createApp({
  data() {
    return {
      name: 'Paan',
      age: 31,
      image: '1.jpg'
    };
  },

  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateNum() {
      return Math.floor(Math.random() * 2);
    }
  }
})



app.mount('#assignment');