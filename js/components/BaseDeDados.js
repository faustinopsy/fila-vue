export default {
    methods: {
      salvarNoLocalStorage(carrinho) {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
      },
      obterDoLocalStorage() {
        const carrinho = localStorage.getItem('carrinho');
        return carrinho ? JSON.parse(carrinho) : [];
      }
    }
  }
  