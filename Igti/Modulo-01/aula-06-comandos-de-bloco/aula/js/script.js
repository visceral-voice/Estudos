console.log('Olá mundo');
var title = document.querySelector('h1');
title.textContent = 'Alterado por Sérgio Ricardo';
// Comentário de linha
/*
Comentário de bloco
*/
var a = 6;
var b = 6;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}

var dia = 5;

if (dia === 1) {
  console.log('Domingo');
} else {
  if (dia === 2) {
    console.log('Segunda');
  } else {
    if (dia === 3) {
      console.log('Terça');
    } else {
      if (dia === 4) {
        console.log('Quarta');
      } else {
        if (dia === 5) {
          console.log('Quinta');
        } else {
          if (dia === 6) {
            console.log('Sexta');
          } else {
            if (dia === 7) {
              console.log('Sábado');
            } else {
              console.log('Dia Inválido');
            }
          }
        }
      }
    }
  }
}

var r = '';
//prettier-ignore
switch (dia) {
  case 1: r = 'Domingo'; break;
  case 2: r = 'Segunda'; break;
  case 3: r = 'Terça'; break;
  case 4: r = 'Quarta'; break;
  case 5: r = 'Quinta'; break;
  case 6: r = 'Sexta'; break;
  case 7: r = 'Sábado'; break;
  default: r = 'Dia inválido'; break;
}

console.log(r);

//Operador Ternário
var resposta = a > b ? a + " é maior que " + b : a < b ? a + " é menor que " : a + " é igual a " + b;
console.log(resposta);

var numeroAtual = 1;
var somatorio = 0;
while(numeroAtual <= 10){
  //somatorio = somatorio + numeroAtual;
  //numeroAtual = numeroAtual + 1;
  somatorio += numeroAtual;
  numeroAtual ++;
}
console.log(somatorio);

numeroAtual = 1;
somatorio = 0;
do {
  //somatorio = somatorio + numeroAtual;
  //numeroAtual = numeroAtual + 1;
  somatorio += numeroAtual;
  numeroAtual ++;
} while(numeroAtual <= 10)
console.log(somatorio);

somatorio = 0;
for(numeroAtual=1;numeroAtual <= 10;numeroAtual ++){
  somatorio += numeroAtual;
}
console.log(somatorio);