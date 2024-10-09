import Formulario from './components/Formulario.js';
import Lista from './components/Lista.js';

const app = Vue.createApp({
  components: {
    Formulario,
    Lista
  },
  data() {
    return {
      carrinho: this.obterDoLocalStorage()
    };
  },
  methods: {
    adicionarItem(novoItem) {
      this.carrinho.push(novoItem);
      this.salvarNoLocalStorage(this.carrinho);
    },
    removerItem(item) {
      const index = this.carrinho.indexOf(item);
      if (index > -1) {
        this.carrinho.splice(index, 1);
        this.salvarNoLocalStorage(this.carrinho);
      }
    },
    salvarNoLocalStorage(carrinho) {
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    },
    obterDoLocalStorage() {
      const carrinho = localStorage.getItem('carrinho');
      return carrinho ? JSON.parse(carrinho) : [];
    }
  },
  template: `
    <div class="container">
      <formulario @adicionar-item="adicionarItem"></formulario>
      <p>Carrinho</p>
      <lista :carrinholista="carrinho" @remover-item="removerItem"></lista>
    </div>
  `
});
app.mount('#app');
