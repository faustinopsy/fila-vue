export default {
  template: `
    <ul>
      <li v-for="item in carrinho" :key="item.id">
        {{item.id}}, {{item.produto}}, {{item.qtd}}
        <button @click="$emit('remover-item', item)">x</button>
      </li>
    </ul>
  `,
  props: ['carrinho']
}
