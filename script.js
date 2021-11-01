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
let nome;
let endereco;

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
        botaoDeRevisarPedido.classList.add('revisar-ativo');
    }
    else{
        botaoDeRevisarPedido.disabled = true;
        botaoDeRevisarPedido.classList.remove('revisar-ativo');
    }
    if(botaoDeRevisarPedido.disabled === false){
        botaoDeRevisarPedido.innerHTML = 'Fechar pedido';
    }
    else{
        botaoDeRevisarPedido.innerHTML = 'Selecione os 3 itens para fechar o pedido';
    }
}
function revisarPedido(){
    nome = prompt('Como podemos te chamar?');
    endereco = prompt('onde iremos entregar?');
    caixaDeRevisao.classList.replace('confirmar-pedido-inativo', 'confirmar-pedido-ativo');
    calcularTotal();
    preencherRevisao();
    const mensagem = mensagemZap();
    caixaDeRevisao.querySelector('.link-zap').href = 'https://wa.me/5599981583140?text='+encodeURIComponent(mensagem);
    
}
function fecharRevisao(){
    caixaDeRevisao.classList.replace('confirmar-pedido-ativo', 'confirmar-pedido-inativo');
}
function preencherRevisao(){
    caixaDeRevisao.querySelector('.prato-nome').innerHTML = pratoNome;
    caixaDeRevisao.querySelector('.prato-preco').innerHTML = pratoPreco;
    caixaDeRevisao.querySelector('.bebida-nome').innerHTML = bebidaNome;
    caixaDeRevisao.querySelector('.bebida-preco').innerHTML = bebidaPreco;
    caixaDeRevisao.querySelector('.sobremesa-nome').innerHTML = sobremesaNome;
    caixaDeRevisao.querySelector('.sobremesa-preco').innerHTML = sobremesaPreco;
    caixaDeRevisao.querySelector('.total-preco').innerHTML = 'R$ '+valorTotal;
}
function calcularTotal(){
    let a = parseFloat(pratoPreco.replace(',','.'));
    let b = parseFloat(bebidaPreco.replace(',', '.'));
    let c = parseFloat(sobremesaPreco.replace(',','.'));
    valorTotal = String(((a+b+c).toFixed(2)).replace('.', ','));
}
function mensagemZap(){
    mensagem = 'Olá, gostaria de fazer o pedido:\n- Prato: '+ pratoNome +'\n- Bebida: '+bebidaNome+'\n- Sobremesa: '+sobremesaNome+'\nTotal: R$ '+valorTotal+'\n\nNome: '+ nome +'\nEndereço: '+ endereco;
    return mensagem
}