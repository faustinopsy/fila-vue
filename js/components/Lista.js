export default {
  template: `
    <ul v-for="item in carrinho" :key="item.id">
      <li v-if="item.qtd > 10">
        {{item.id}}, {{item.produto}}, {{item.qtd}} 
        <button @click="$emit('remover-item', item)">x</button>
      </li>
    </ul>
  `,
  props: ['carrinho']
}
