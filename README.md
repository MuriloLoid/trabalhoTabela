# trabalhoTabela

1.Declara uma variavel let chamada "cadastros".
2.
3.Cria uma função chamada "cadastrarUsuario(event)" que será chamada quando o formulario for enviado. Onde a o parametro "event" que representa o evento de envio do formulário. Além de abrir chaves da função
4.Previnir que a pagina recarregue caso o formulario seja enviado.
5.
6.Acessa o formulario nome e com value pega o valor inserido pelo usuario.
7.Acessa o formulario email e com value pega o valor inserido pelo usuario.
8.
9.Cria um objeto chamado "cadastro" que contém 'nome' e 'email' para facilitar a organizaçao dos dados.
10.adiciona os dados do objeto "cadastro" na lista cadastros.
11.
12.Chama a função chamada "atualizarTabela" que serve para chamar os dados cadastrados em forma de tabela.
13.limpa o formulario após o cadastro dos dados.
14.Fecha a chaves da função "cadastrarUsuario".
15.
16.Cria uma função chamada "atualizarTabela()" ue serve para mostrar os dados cadastrados em forma de tabela.Além de abrir a chaves da função.
17.Cria a variavel cadastrosTbody onde armazena os dados obtidos do elemento <tbody> da tabela. Além de os dados dos cadastros que serão exibidos.
18.Dentro do conteudo do "cadastrosTbody".limpa a tabela, removendo dados duplicados e garantindo atualização correta.
19.
20.Usa o método "forEach" para percorrer cada objeto cadastro no array "cadastros", permitindo que você execute uma função para cada item do array.
21.Cria um novo elemento de linha (<tr>) para a tabela, que será utilizado para exibir os dados do usuário.
22.Define o conteúdo HTML da linha criada, inserindo os valores de nome do objeto cadastro dentro de células de tabela (<td>).
23.Define o conteúdo HTML da linha criada, inserindo os valores de email do objeto cadastro dentro de células de tabela (<td>).
24.Adiciona a nova linha (row) ao corpo da tabela (<tbody>), permitindo que os dados sejam visualizados na interface.
25.fecha o ForEach.
26.fecha a chaves da funçao atualizarTabela()




