document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Cria uma nova linha na tabela
    const novaLinha = document.createElement('tr');

    // Cria as colunas para nome e telefone
    const colunaNome = document.createElement('td');
    const colunaTelefone = document.createElement('td');

    // Define os valores das colunas
    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;

    // Adiciona as colunas na nova linha
    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaTelefone);

    // Adiciona a nova linha na tabela
    document.querySelector('tbody').appendChild(novaLinha);

    // Limpa os campos do formulário
    document.getElementById('form-contato').reset();
});
