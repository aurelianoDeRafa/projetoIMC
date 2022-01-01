
let botao = document.querySelector('#calcular');

botao.addEventListener('click', ()=> {
let nome = document.querySelector('#nome').value;
let altura = document.querySelector('#altura').value;
let peso = document.querySelector('#peso').value;
let resultado = document.querySelector('#resultado')

if(nome !== '' && altura !== '' && peso !== '') {
let calculo = (peso / (altura * altura)).toFixed(1)

let classificacao = '';

if (calculo < 18.5){
    classificacao = 'abaixo do peso.';
}else if (calculo < 25) {
    classificacao = 'com peso ideal. Parabéns!!!';
}else if (calculo < 30){
    classificacao = 'levemente acima do peso.';
}else if (calculo < 35){
    classificacao = 'com obesidade grau I.';
}else if (calculo < 40){
    classificacao = 'com obesidade grau II';
}else {
    classificacao = 'com obesidade grau III. Cuidado!!';
}

resultado.innerHTML= `${nome} seu IMC é ${calculo} e você está ${classificacao}`

}else{
  resultado.innerHTML= 'Preence todos os campos'
}
})