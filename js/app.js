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
        template: 
        `
        <form>
            <p>Lista de itens</p>
            <p>Nome do item: <input type="text" required v-model="nome"></p>
            <p>Quantos: <input type="number" v-model="quantidade"></p>
            <button type="submit">Adicionar</button>
        </form>
        <p>Carrinho</p>
        <ul>
            <li v-for="item in carrinho">{{item.produto}}, {{item.qtd}}</li>
        </ul>
        `
   })
   
   app.mount('#app')
 