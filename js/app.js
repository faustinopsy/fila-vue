class Item{
    constructor(){
        this.nome = null;
        this.quantidade = null;
        this.carrinho = [];
        this.app = document.querySelector("#app")
        this.template()
    }
    adicionarItem(){

    }
    removerItem(){

    }
    template(){
        this.app.innerHTML = 
        `
        teste
        `
    }
 }
const listas = new Item()