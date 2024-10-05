import Formulario from './components/Formulario.js';
import Lista from './components/Lista.js';

const app = Vue.createApp({
  components: {
    Formulario,
    Lista
  },
  data() {
    return {
      nome: null,
      quantidade: null,
      carrinho: []
    }
  },
  methods: {
    adicionarItem(item) {
      let novoItem = {
        id: Date.now(),
        produto: item.nome,
        qtd: item.quantidade
      }
      this.carrinho.push(novoItem)
    },
    removerItem(item) {
      const i = this.carrinho.indexOf(item)
      if (i > -1) {
        this.carrinho.splice(i, 1)
      }
    }
  },
  template: `
    <div class="container">
      <formulario 
      :nome="nome" 
      :quantidade="quantidade" 
      @adicionar-item="adicionarItem" 
      @interpola:nome="nome = $event"
      @interpola:quantidade="quantidade = $event"
    ></formulario>
      <p>Carrinho</p>
      <lista :carrinho="carrinho" @remover-item="removerItem"></lista>
      <p> {{ nome }} - {{ quantidade }}</p>
    </div>
  `
});

app.mount('#app');
