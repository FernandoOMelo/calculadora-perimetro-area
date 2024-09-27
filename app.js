textoInicial();

function calcularAreaPerimetro(){
    let largura = parseFloat(document.getElementById('edtLargura').value);
    let comprimento = parseFloat(document.getElementById('edtComprimento').value);
    let area = parseFloat(largura * comprimento);
    let perimetro = parseFloat(2 * (largura + comprimento));
    let texto = `A área de um retangulo com ${largura} metros de largura e ${comprimento} metros de comprimento equivalem à ${area}m², já o seu perímetro é de ${perimetro} metros.`;
    exibirTextoNaTela('p', texto);
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function limparCampos(){
    textoInicial();
    document.getElementById('edtLargura').value = '';
    document.getElementById('edtComprimento').value = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function textoInicial(){
    exibirTextoNaTela('h1', 'Calculadora de área e perimetro de um retangulo.');
    exibirTextoNaTela('p', 'Preencha os campos com os valores de altura e largura em metros para calcular.');
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


