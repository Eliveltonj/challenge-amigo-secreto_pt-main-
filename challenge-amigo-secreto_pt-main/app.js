//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();
    
    if (amigo) {  
        listaAmigos.push(amigo);  
        document.getElementById('amigo').value = ''; 
        
        atualizarLista(); 
    }
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
