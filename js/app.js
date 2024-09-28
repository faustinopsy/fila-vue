class Item{
    constructor(){
        this.nome = null;
        this.quantidade = null;
        this.carrinho = [];
        this.app = document.querySelector("#app")
        this.template()
        this.atualizarUI()
    }
    adicionarItem() {
        this.nome = document.querySelector("#nome").value;
        this.quantidade = document.querySelector("#quantidade").value;
        let item = {
          id: Date.now(),
          produto: this.nome,
          qtd: this.quantidade
        }
        this.carrinho.push(item)
        this.nome = null
        this.quantidade = null
      }
    removerItem(id) {
        const index = this.carrinho.findIndex(item => item.id === parseInt(id));
        console.log(index)
        if (index !== -1) {
            this.carrinho.splice(index, 1);
            this.atualizaLista()
        } else {
            console.log(`Item com id ${id} não encontrado.`);
        }
    }
    atualizarUI(){
        const form = document.querySelector("#adicionarItem")
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            this.adicionarItem();
            this.atualizaLista();
        });
    }
    atualizaLista(){
        const listaUI = document.querySelector("#lista")
            listaUI.innerHTML = ""
            this.carrinho.forEach(item => {
                const li = document.createElement("li")
                li.innerHTML = ` ${item.produto} , ${item.qtd} <button id="remove" data-id="${item.id}"> X </button>`
                listaUI.appendChild(li);
            });
            document.querySelector("#nome").value = '';
            document.querySelector("#quantidade").value = '';
            this.afterRender()
    }
    afterRender() {
        const removeButtons = document.querySelectorAll('#remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                this.removerItem(id)
            });
        });
    }
    template(){
        this.app.innerHTML = 
        `
        <div class="container">
        <form id="adicionarItem">
            <p>Lista de itens</p>
            <p>Nome do item: <input type="text" required id="nome"></p>
            <p>Quantos: <input type="number" id="quantidade"></p>
            <button >Adicionar</button>
        </form>
        <p>Carrinho</p>
            <ul id="lista">
            </ul>
        </div>
        `
    }
 }
const listas = new Item()