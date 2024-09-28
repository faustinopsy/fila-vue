const app = Vue.createApp({
    data() {
        return {
            nome: null,
            quantidade: null,
            carrinho: []
          }
        },
        methods: {
            adicionarItem() {
              let item = {
                id: Date.now(),
                produto: this.nome,
                qtd: this.quantidade
              }
              this.carrinho.push(item)
              this.nome = null
              this.quantidade = null
            },
            removerItem(item) {
              const i = this.carrinho.indexOf(item)
              if (i > -1) {
                this.carrinho.splice(i, 1)
              }
            }
          },
        template: 
        `
        <div class="container">
        <form v-on:submit.prevent="adicionarItem">
            <p>Lista de itens</p>
            <p>Nome do item: <input type="text" required v-model="nome"></p>
            <p>Quantos: <input type="number" v-model="quantidade"></p>
            <button >Adicionar</button>
        </form>
        <p>Carrinho</p>
        <ul>
            <li v-for="item in carrinho" >{{item.id}}, {{item.produto}}, {{item.qtd}} <button @click="removerItem(item)">x</button></li>
        </ul>
        </div>
        `,
        style:
        `
        .container {
        position: relative;
        padding: 0;
        }
        .item {
        width: 100%;
        height: 30px;
        background-color: #f3f3f3;
        border: 1px solid #666;
        box-sizing: border-box;
        }
        .fade-move,
        .fade-enter-active,
        .fade-leave-active {
        transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
        }
        .fade-enter-from,
        .fade-leave-to {
        opacity: 0;
        transform: scaleY(0.01) translate(30px, 0);
        }
        .fade-leave-active {
        position: abs
        `
   })
   
   app.mount('#app')
 