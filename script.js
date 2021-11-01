const pratoOpcoes = document.querySelector(".pratos");
const bebidaOpcoes = document.querySelector('.bebidas');
const sobremesaOpcoes = document.querySelector('.sobremesas');
let isPratoSelecionado = false;
let isBebidaSelecionada = false;
let isSobremesaSelecionada = false;
let caixaDeRevisao = document.querySelector(".confirmar-pedido-inativo");
let botaoDeRevisarPedido = document.querySelector(".revisar");
botaoDeRevisarPedido.disabled = true;
let pratoNome;
let pratoPreco;
let bebidaNome;
let bebidaPreco;
let sobremesaNome;
let sobremesaPreco;

function selecionarComida(prato){
    if(prato.classList.contains('opcao-selecionada')){
        prato.classList.remove('opcao-selecionada');
        isPratoSelecionado = false;
    }
    else{
        const opcaoSelecionada = pratoOpcoes.querySelector(".opcao-selecionada");
        if (opcaoSelecionada !== null) {
            opcaoSelecionada.classList.remove('opcao-selecionada');
        }
        prato.classList.add('opcao-selecionada');
        pratoNome = prato.querySelector('.nome').innerHTML;
        pratoPreco = prato.querySelector('.preco').innerHTML;
        isPratoSelecionado = true;
    }
    verificarSelecao();
}
function selecionarBebida(bebida){
    if(bebida.classList.contains('opcao-selecionada')){
        bebida.classList.remove('opcao-selecionada');
        isBebidaSelecionada = false;
    }
    else{
        const opcaoSelecionada = bebidaOpcoes.querySelector(".opcao-selecionada");
        if (opcaoSelecionada !== null) {
            opcaoSelecionada.classList.remove('opcao-selecionada');
        }
        bebida.classList.add('opcao-selecionada');
        bebidaNome = bebida.querySelector('.nome').innerHTML;
        bebidaPreco = bebida.querySelector('.preco').innerHTML;
        isBebidaSelecionada = true;
    }
    verificarSelecao();
}
function selecionarSobremesa(sobremesa){
    if(sobremesa.classList.contains('opcao-selecionada')){
        sobremesa.classList.remove('opcao-selecionada');
        isSobremesaSelecionada = false;
    }
    else{
        const opcaoSelecionada = sobremesaOpcoes.querySelector(".opcao-selecionada");
        if (opcaoSelecionada !== null) {
            opcaoSelecionada.classList.remove('opcao-selecionada');
        }
        sobremesa.classList.add('opcao-selecionada');
        sobremesaNome = sobremesa.querySelector('.nome').innerHTML;
        sobremesaPreco = sobremesa.querySelector('.preco').innerHTML;
        isSobremesaSelecionada = true;
    }
    verificarSelecao();
}
function verificarSelecao(){
    if(isPratoSelecionado === true && isBebidaSelecionada === true && isSobremesaSelecionada === true){
        botaoDeRevisarPedido.disabled = false;
    }
    else{
        botaoDeRevisarPedido.disabled = true;
    }
    if(botaoDeRevisarPedido.disabled === false){
        botaoDeRevisarPedido.innerHTML = 'Fechar pedido';
    }
    else{
        botaoDeRevisarPedido.innerHTML = 'Selecione os 3 itens para fechar o pedido';
    }
}
function revisarPedido(){
    caixaDeRevisao.classList.replace('confirmar-pedido-inativo', 'confirmar-pedido-ativo');
}
function fecharRevisao(){
    caixaDeRevisao.classList.replace('confirmar-pedido-ativo', 'confirmar-pedido-inativo');
}