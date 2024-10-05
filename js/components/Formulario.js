export default {
  props: ['nome', 'quantidade'],
  data() {
    return {
      localNome: this.nome,
      localQuantidade: this.quantidade
    }
  },
  methods: {
    enviarItem() {
      this.$emit('adicionar-item', { nome: this.localNome, quantidade: this.localQuantidade })
      this.localNome = null
      this.localQuantidade = null
    }
  },
  watch: {
    localNome(val) {
      this.$emit('interpola:nome', val); 
    },
    localQuantidade(val) {
      this.$emit('interpola:quantidade', val);  
    }
  },
  template: `
    <form v-on:submit.prevent="enviarItem">
      <p>Lista de itens</p>
      <p>Nome do item: <input type="text" required v-model="localNome"></p>
      <p>Quantos: <input type="number" v-model="localQuantidade"></p>
      <button>Adicionar</button>
    </form>
  `,
}
