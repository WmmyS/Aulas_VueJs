new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
          alert('Exibir Alerta')
        
        },
        armazenar(event) {
            this.valor = event.target.value
        }
    
    
    }
})