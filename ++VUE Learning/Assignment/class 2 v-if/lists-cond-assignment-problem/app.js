const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      task: [],
      showTask: true
    };
  },



  computed: {
    buttonCaption() {
      return this.showTask ? 'Hide List' : 'Show List';
    }
  },


  methods: {
    addTask() {
      this.task.push(this.enteredTask);
    },
    toggleShowTask() {
      this.showTask = !this.showTask;
    }
  }


})


app.mount('#assignment')