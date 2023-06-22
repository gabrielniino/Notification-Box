Preciso criar uma funcionalidade de notificações no meu sistema, parecido com a funcionalidade de notificações do Instagram.
Requisitos:
Desenvolver em Java Script;  Criar tudo dentro de um objeto JS para que eu possa instanciar o objeto a qualquer momento e ter todo o código da funcionalidade

Vou te passar os requisitos de uma funcionalidade e quero que voce desenvolva para mim.
Objeto noficações
Precisamos de uma opção básica de noficações no sistema, para noficar os usuários de
eventos diversos.
Ulizar mesmo conceito da calculadora com os construtores e objetos filhos da classe.
Aparência / área de apresentação:
Deve originar de um ícone noficação:
Este ícone deve ser uma div com a área maior que o ícone para facilitar o clique ou toque do
usuário onde a parte vermelha é a área do ícone e a área branca é a área total do objeto:
Comportamento:
Quando houver noficação deve apresentar o número total ao lado do ícone
Toda vez que receber noficações deve sinalizar de alguma forma podendo ser animado com
css
Evento clique:
Deve ser apresentada uma div com a lista de eventos adicionados anteriormente:
Evento adicionar noficação:
Deve ser chamado o objeto noficação:
nof.add( )
Os parâmetros devem estar dentro de um objeto passado na noficação
nof.add( { ‘id’:’1569’, ‘tulo’:’teste’,’texto’:’Lorem ipsum’,data:’2023-05-05’,’lido’:false,
click:fucon(){ /* bloco de comando/função com a ação quando clicar na noficação */ ; } });
nof.del( { ‘id’:’1569’ }); // remover apenas a id da noficação
nof.up( { ‘id’:’1569’,‘lido’:true }); // atualizar a noficação