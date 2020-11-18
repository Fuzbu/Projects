var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'Socks are stinky',
    image: './picture/vmSocks-green-onWhite.jpg',
    inventory: 0,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    cart: 0
  },


  methods: {
    addToCart: function () {
      this.cart += 1
    }

  },

})