let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome !== '') {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    resultado.appendChild(li);
}