const app = Vue.createApp({
  //Data//
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },



  //Computed calculates better//
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return ''
      }
      return this.name + ' ' + this.lastName;
    },

  },


  //  watcher used mainly for numbers//
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },




  //Methods//
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '',
        this.lastName = ''
    }
  }
});

app.mount('#events');
