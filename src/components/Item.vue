<template>
    <div>
        <form v-on:submit.prevent="adicionarItem">
            <p>Lista de itens</p>
            <p>Nome do item: <input type="text" required v-model="nome"></p>
            <p>Quantos: <input type="number" v-model="quantidade"></p>
            <button >Adicionar</button>
        </form>
        <p>Carrinho</p>
        <ul>
            <li v-for="item in carrinho" :key="item.id"> {{item.produto}}, {{item.qtd}} <button @click="removerItem(item)">x</button></li>
        </ul>
    </div>
</template>

<script>
export default {
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
    };
</script>

<style>

</style>              