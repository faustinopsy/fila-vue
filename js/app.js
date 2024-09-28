const app = Vue.createApp({
    data() {
        return {
            nome: null,
            quantidade: null,
            carrinho: [
              { id: 1, produto: 'café', qtd: 5 }
            ]
          }
        },
        methods: {
            adicionarItem() {
              let item = {
                produto: this.nome,
                qtd: this.quantidade
              }
              this.carrinho.push(item)
              this.nome = null
              this.quantidade = null
            }
          },
        template: 
        `
        <form v-on:submit.prevent="adicionarItem">
            <p>Lista de itens</p>
            <p>Nome do item: <input type="text" required v-model="nome"></p>
            <p>Quantos: <input type="number" v-model="quantidade"></p>
            <button >Adicionar</button>
        </form>
        <p>Carrinho</p>
        <ul>
            <li v-for="item in carrinho">{{item.produto}}, {{item.qtd}}</li>
        </ul>
        `
   })
   
   app.mount('#app')
 