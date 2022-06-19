new Vue({
    el: '#desafio',
    data: {
      SEU_NOME: 'Wesley Santos',
      IDADE: 30,
      link: 'https://i.pinimg.com/550x/0f/17/37/0f1737a45d79e39920e5266da7bf210b.jpg'
    },
    methods: {
      numRandon: function() {
        return Math.random();
      }
    }
})