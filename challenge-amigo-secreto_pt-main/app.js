//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();
    
    if (amigo === '') {  
        alert("❌ Por favor, insira um nome válido.");
        return;
    }

    listaAmigos.push(amigo);
    document.getElementById('amigo').value = ''; 
    atualizarLista();
}


function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    listaAmigos.forEach(amigo => {
        let li = document.createElement('li'); 
        li.textContent = amigo; 
        lista.appendChild(li); 
    });
}


function mostrarLista() {
    alert("Lista final de amigos: " + listaAmigos.join(", "));
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um amigo.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

}
