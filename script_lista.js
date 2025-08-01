const lista = new LinkedList();

function adicionarItem(nome, preco) {
  lista.append({ nome, preco });
  renderLista();
}

function removerItem(index) {
  lista.removeAt(index);
  renderLista();
}

function renderLista() {
  const ul = document.getElementById("listaCompras");
  const totalDiv = document.getElementById("valorTotal");
  ul.innerHTML = "";
  let total = 0;

  lista.toArray().forEach((item, index) => {
    const li = document.createElement("li");
    
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

    const btn = document.createElement("button");
    btn.textContent = "Remover";
    btn.onclick = () => removerItem(index);

    li.appendChild(btn);

    ul.appendChild(li);
    total += item.preco;
  });

  totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function limparLista() {
  lista.clear();
  renderLista();
}

function toggleCarrinho() {
  const carrinho = document.getElementById("carrinho");
  carrinho.classList.toggle("aberto");
}
