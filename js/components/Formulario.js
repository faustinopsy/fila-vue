export default {
  data() {
    return {
      localNome: '',
      localQuantidade: ''
    }
  },
  methods: {
    enviarItem() {
      let novoItem = {
        id: Date.now(),
        produto: this.localNome,
        qtd: this.localQuantidade
      };
      this.salvarNoLocalStorage(novoItem);  
      this.$emit('adicionar-item', novoItem);
      this.localNome = '';
      this.localQuantidade = '';
    },
    salvarNoLocalStorage(item) {
      let carrinho = this.obterDoLocalStorage();
      carrinho.push(item);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    },
    obterDoLocalStorage() {
      const carrinho = localStorage.getItem('carrinho');
      return carrinho ? JSON.parse(carrinho) : [];
    }
  },
  template: `
    <form v-on:submit.prevent="enviarItem">
      <p>Nome do item: <input type="text" v-model="localNome" required></p>
      <p>Quantidade: <input type="number" v-model="localQuantidade" required></p>
      <button type="submit">Adicionar</button>
    </form>
  `
}
