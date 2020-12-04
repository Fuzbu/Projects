const app = Vue.createApp({
  //data,functions
  data() {
    return {
      url: 'https://www.google.com/',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick', isFav: true },
        { title: 'earth worms', author: 'jimmy', isFav: true },
        { title: 'beatles', author: 'aaron', isFav: false },
      ]
    }
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e) {
      console.log(e);
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    },
  },

  // computed: {
  //   filteredBooks() {
  //     return this.books.filter((book) => book.isFav)

  //   }
  // }

})


app.mount('#app')