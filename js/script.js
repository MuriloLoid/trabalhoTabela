let cadastros = [];

function cadastrarUsuario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const cadastro = { nome, email };
    cadastros.push(cadastro);

    atualizarTabela();

    document.getElementById('cadastro-form').reset();
}

function atualizarTabela() {
    const cadastrosTbody = document.getElementById('cadastros-tbody');
    cadastrosTbody.innerHTML = '';

    cadastros.forEach((cadastro) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cadastro.nome}</td>
            <td>${cadastro.email}</td>
        `;
        cadastrosTbody.appendChild(row);
    });
}