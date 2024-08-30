//exercicio 1
const inputFibonaci = document.querySelector('.input-fibonaci');

function isFibonacci(num) {
    if (num < 0) return false; 
  
    let a = 0, b = 1; 
  
    while (a <= num) {
      if (a === num) {
        return true; 
      }
      [a, b] = [b, a + b]; 
    }
    return false; 
  }

  inputFibonaci.addEventListener('change', () => {
    const numero  = parseInt(inputFibonaci.value.trim());
    
    if (isFibonacci(numero)) {
      alert(`${numero} pertence à sequência de Fibonacci.`);
   } else {
      alert(`${numero} não pertence à sequência de Fibonacci.`);
   }

})

//exercicio 2
const inputLetra = document.querySelector('.input-letra')

inputLetra.addEventListener('change', () => {
    const inputValor = inputLetra.value.trim();

    const qtLetrasMaiusculas = inputValor.split('a').length - 1;
    const qtLetrasMinusculas = inputValor.split('A').length - 1;

    if(qtLetrasMaiusculas > 0 || qtLetrasMaiusculas > 0){
        alert(`a letra 'a' aparece ${qtLetrasMinusculas} vezes em minúscula e ${qtLetrasMaiusculas} vezes em maiúscula na palavra "${inputValor}".`)
    } else{
        alert("não tem a letra a")
    }
    
})

//exercicio 3
indice = 12;
soma = 0;
k = 1;

function imprimir(){ 
    while (k < indice) { 
      k = k + 1;
      soma = soma + k;
    }
    return soma;
    
}

console.log("o valor da soma é: ", imprimir())


/*
exercicio 4

a = 9
b = 128
c = 49
d = 100
e = 13
f = 20
*/

/*
exercicio 5

No caso, eu ligaria o primeiro interruptor, deixaria ligado por alguns minutos até esquentar. 
Logo depois, desligaria o primeiro, ligaria o segundo interruptor deixando-o ligado, 
enquanto me locomovia para primeira lâmpada na sala das lâmpadas. Na sala das lâmpadas, verificaria qual lâmpada
estava mais quente, descobrindo assim qual era a da primeira lâmpada. A lâmpada mais fria 
provavelmente é a que estária desligada.
*/



