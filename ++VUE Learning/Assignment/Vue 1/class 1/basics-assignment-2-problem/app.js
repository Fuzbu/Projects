const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      userInputEnter: '',
    };
  },




  methods: {
    alertMessage() {
      alert('Howdy Partner!');
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },

    enterInput(event) {
      this.userInputEnter = event.target.value;
    }
  }

})








app.mount('#assignment');