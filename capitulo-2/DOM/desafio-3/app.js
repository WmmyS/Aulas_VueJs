new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    watch: {
        resultado(newValue, oldValue) {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
    computed: {
        resultado() {
            return (this.valor === 37)?'valor igual a 37' 
            : 'valor diferente a 37'
        }
    }

});