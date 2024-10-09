export default {
  props: ['carrinholista'],
  methods: {
    removerItem(item) {
      const index = this.carrinholista.indexOf(item);
      if (index > -1) {
        this.carrinholista.splice(index, 1);
        this.salvarNoLocalStorage(this.carrinholista); 
        this.$emit('remover-item', item);
      }
    },
    salvarNoLocalStorage(carrinho) {
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
  },
  template: `
    <ul>
      <li v-for="item in carrinholista" :key="item.id">
        {{ item.produto }} ,{{ item.qtd }},
        <button @click="removerItem(item)">x</button>
      </li>
    </ul>
  `
}
