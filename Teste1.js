/* Variáveis Globais */
const prompt = require('prompt-sync')();
let program;
console.log("Bem vindo, aqui estão os 16 algoritmos criados para o Teste 1 do módulo 1.")

do {
   program = parseInt(prompt("Digite entre 1 e 16 para abrir um algoritmo, ou 404 para sair: "))

   switch(program){
   
   case 1:
      console.log("Esse algoritmo lerá uma temperatura em graus Celsius e apresentará o valor correspondente em graus Fahrenheit.")
      let temperaturaC = parseFloat(prompt("Digite a temperatura em ºC: "));
      let temperaturaF = (temperaturaC*(9/5))+32;
      console.log("A temperatura em ºF é:", temperaturaF);
      break
   
   case 2:
      console.log("Esse algoritmo lerá o número de eleitores de um município, o número de votos brancos, nulos e válidos. Depois vai mostrar o percentual que cada tipo de voto representa.")
      let eleitores = parseInt(prompt("Digite o número de eleitores: "));
      let brancos = parseInt(prompt("Digite o número de votos brancos: "));
      let nulos = parseInt(prompt("Digite o número de votos nulos: "));
      let validos = parseInt(prompt("Digite o número de votos válidos: "));
      console.log("Percentual de votos brancos:", (brancos/eleitores)*100);
      console.log("Percentual de votos nulos:", (nulos/eleitores)*100);
      console.log("Percentual de votos validos:", (validos/eleitores)*100);
      break
   
   case 3: //arrumar para ler um 4 valor e deoos alterar ele
      console.log("O algoritmo vai ler quatro números inteiros e realizar algumas operações com cada número.")
      let num03_1 = parseInt(prompt("Digite o primeiro número: "));
      let num03_2 = parseInt(prompt("Digite o segundo número: "));
      let num03_3 = parseInt(prompt("Digite o terceiro número: "));
      let num03_4 = parseInt(prompt("Digite o terceiro número: "));
      num03_4 = num03_1 + num03_2 + num03_3;
      console.log("1º Numero - Resultado:", num03_1 + 25);
      console.log("2º Número - Resultado:", num03_2 * 3);
      console.log("3º Número - Resultado:", num03_3*12/100);
      console.log("4º Número - Resultado:", num03_4);
      break
   
   case 4: case 5:
      console.log("Esse algoritmo receberá duas notas de um aluno e mostrar se ele foi aprovado ou não.")
      let nota1 = parseInt(prompt("Digite a primeira nota: "));
      let nota2 = parseInt(prompt("Digite a segunta nota: "));
      let media = (nota1 + nota2) / 2;
      if (media > 5.99) {
            console.log("PARABÉNS! Você foi aprovado.");
      } else {
            console.log("Você foi REPROVADO. Estude mais.")
      }
      break
   
   case 6:
      console.log("O algoritmo vai ler três valores e dizer se forma um triângulo e qual tipo.")
      let lado1 = parseInt(prompt("Digite o valor do lado 1: "));
      let lado2 = parseInt(prompt("Digite o valor do lado 2: "));
      let lado3 = parseInt(prompt("Digite o valor do lado 3: "));
      if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
         if (lado1 === lado2 && lado3 === lado2) {
            console.log("As medidas correspondem a um triângulo equilátero.");
         } else if ( lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            console.log("As medidas correspondem a um triângulo isósceles.");
         } else {
            console.log("As medidas correspondem a um triângulo escaleno.");
         }
      } else {
         console.log("Não é possível formar um triângulo com essas medidas.");
      }
      break
   
   case 7:
      console.log("Esse algoritmo vai receber o número de maçãs compradas e apresentar o valor total da compra.")
      let preco_normal = 0.30;
      let preco_desconto = 0.25;
      let compras = parseInt(prompt("Digite a quantidade de maçãs que seja comprar: "));
      if (compras < 12) {
         console.log("Total das compras: R$", compras * preco_normal);
      } else {
         console.log("Total das compras: R$", compras * preco_desconto);
      }
      break
   
   case 8:
      console.log("O algoritmo vai ler dois valores e apresentálos em ordem crescente.")
      let valor08_1 = prompt("Digite o primeiro valor: ");
      let valor08_2 = prompt("Digite o segundo valor: ");
      if (valor08_1 != valor08_2){
         if (valor08_1 < valor08_2){
            console.log(valor08_1);
            console.log(valor08_2);
         } else {
            console.log(valor08_2);
            console.log(valor08_1); 
         }
      } else {
         console.log("Os valores não podem ser iguais!");
      }
      break
      
   case 9:
      console.log("Esse algoritmo lerá o código de origem de um produto e imprimir a região do mesmo.")
      let codigo = parseInt(prompt("Digito o código do produto: "));
         if (codigo >= 25 && codigo <= 50){
               console.log("Origem do produto: Nordeste");
         } else if (codigo >= 10 && codigo <= 20){
               console.log("Origem do produto: Centro-Oeste");
         } else if (codigo >= 1 && codigo <= 9) {          
            switch (codigo) {
               case 9: case 8: case 7:
                  console.log("Origem do produto: Sudeste");
                  break
               
               case 6: case 5:
                  console.log("Origem do produto: Nordeste");
                  break
               
               case 4:
                  console.log("Orgiem do produto: Oeste");
                  break
                  
               case 3:
                  console.log("Origem do produto: Leste");
                  break
                  
               case 2:
                  console.log("Origem do produto: Norte");
                  break
                  
               case 1:
                  console.log("Origem do produto: Sul");
                  break
            }
         } else {        
               console.log("Produto importado");
         }
      break
      
   case 10:
      console.log("O algoritmo vai ler um número e repiti-lo 10x na tela.")
      let num10_1 = parseInt(prompt("Digite um número qualquer: "));
      for (let i=0; i <= 10; i++){
         console.log(num10_1);
      }
      break
      
   case 11:
      console.log("Esse algoritmo vai receber um número e dizer se ele é par ou ímpar até que seja fornecido um valor nulo ou negativo.")
      let num11_1;
      let flag = true;
      do {
         num11_1 = parseInt(prompt("Digite um numero para descobrir se é par ou ímpar: "));
         flag = (num11_1 >= 0 && Number.isInteger(num11_1)) ? true : false
         if (flag == true) {
            if (num11_1 % 2 === 0){
               console.log("O número é par");
            } else {
               console.log("O número é ímpar");   
            }
         } else {
            console.log('Valor nulo ou negativo. O programa será encerrado.')
            break
         }
      } while (true);
      break

   case 12:
      console.log("O algoritmo vai apresentar números de 1000 a 1999 que divididos por 11 dão resto 5.")
      for (let i_12 = 1000; i_12 <= 1999; i_12++){
         if (i_12 % 11 == 5){
            console.log(i_12);
         }
      }   
      break
   
   case 13:
      console.log("Esse algoritmo vai ler cinco valores e apresentar a tabuada de 1 até o valor digitado.")
      let num13_01;
      for (let i_13 = 1; i_13 <= 5; i_13++){
         num13_01 = parseInt(prompt("Digite um número: "));
         for (let j_13=1; j_13 <= num13_01; j_13++){
            console.log(`${j_13} x ${num13_01} =`, j_13 * num13_01);
         }
      }
      break

   case 14:
      console.log("O algoritmo vai receber números decimais até que o usuário digite 0 e vai imprimir a média aritmética deles.")
      let num14_01 = 1;
      let num14_sum = 0;
      let i_14 =0;
      while (num14_01 !== 0){
         num14_01 = parseFloat(prompt("Digite um número: "));
         num14_sum += num14_01;
         i_14++;
      }
      console.log("Média aritmética:", num14_sum / (i_14-1))
      break

   case 15:
      console.log("Esse algoritmo receberá números decimais e o peso de cada número, até que seja digitado o número 0. Depois fará a méida ponderada desse.")
      let num15_peso = 0;
      let num15_sum = 0;
      let num15_02;
      let num15_01;
      do {
         num15_01 = parseFloat(prompt("Digite um número: "));
         num15_02 = parseFloat(prompt("Digite o peso: "));
         num15_sum += (num15_01 * num15_02);
         num15_peso += num15_02;
      }  while (num15_01 !== 0);
      console.log("Média ponderada:", num15_sum / num15_peso);
      break
   
   case 16:
      console.log("O algoritmo vai apresentar os 50 primeiros números primos acima de 100.")
      let num16_01 = 101;
      let i_16 = 1;
      while (i_16 <= 50){
        let j_16 = 2;
            while (j_16 <= num16_01 && !(num16_01 % j_16 == 0 && j_16 != num16_01)){
                    console.log(num16_01);
                    i_16++;
                    break 
            }
         num16_01++ ;
      }
      break

   default:
      if (program !== 404) {
      console.log("Opção inválida.");
      }
   }
 } while (program !== 404);