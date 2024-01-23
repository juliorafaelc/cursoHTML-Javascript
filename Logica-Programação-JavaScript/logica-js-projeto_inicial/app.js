///Jogo de numero Secreto

alert("Bem Vindo ao jogo do numero secreto")

var numeroMaximo = 10
//parseInt vai me dar um numero inteiro não necessariamente arredondado entre 0 e 9, adicionando +1 faz com que o numero sempre seja entre 1 e 10
var numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
///var numeroSecreto = Math.round(Math.random() * 10);
console.log(numeroSecreto);
var chute;
var tentativas = 0;

while(chute !== numeroSecreto){
  chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
  tentativas++

  //operador ternario para variar a palavra no plural ou singular
  palavraTentativa = tentativas > 1 ? "TENTATIVAS!" : "TENTATIVA!"

  if (chute == numeroSecreto) {
    alert(`ISSO AI! VOCE DESCOBRIU O NUMERO SECRETO '${numeroSecreto}' EM ${tentativas} ${palavraTentativa}`);
    break;
  } else {
    if (numeroSecreto < chute) {
      alert(`Errou, o numero secreto é menor que ${chute}`);
      
    } else {
      if (numeroSecreto > chute) {
        alert(`Errou, o numero secreto é maior que ${chute}`);
      } else {
        alert(`Erro, '${chute}' não é um chute valido, escreva um numero valido`);
      }
    }

  }
}