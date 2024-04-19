//1
// function conta10(array: number[]) {
//   let desconta10 = [];
//   let j: number = 0;

//   if (array.length === 10) {
//     for (let i = array.length; i > 0; i--) {
//       desconta10[j] = array[i-1];
//       j++;
//     }
//   } else {
//     return `Array Invalido!`;
//   }
//   return desconta10;
// }
// console.log(conta10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//2
// function algoritmo(array: number[]){
//   let NovoArray = [];
//   for( let i = 0; i < array.length; i++){
//     if (i % 2 === 0){
//       NovoArray[i] = array[i]*2;
//     }
//     else {
//       NovoArray[i] = array[i]*3;
//     }
//   }
//   return NovoArray;
// }

// console.log(algoritmo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]));

//3
// function superOito (array: number[]){
//   let positivos= [];
//   let negativos = [];
//   let j: number = 0;
//   let k: number = 0;
//   if (array.length === 8){
//     for( let i = 0; i < array.length; i++){
//        if (array[i] > 0) {
//           positivos[j] = array[i];
//          j++;
//         }
//        else {
//          negativos[k] = array[i];
//          k++;
//        }
//      }
//     return "Positivos: " + positivos + " Negativos: " + negativos;
//   }
//   else {
//     return "Inválido: Insira um Array de até 8 elementos";
//   } 
// }
// console.log(superOito([1,-2,3,-4,5,-6,7,-8, 9, 10, 11]));                  

//4
// function conta30(array: number[]) {
//   let desconta30 = [];
//   let j: number = 0;

//   if (array.length === 30) {
//     for (let i = array.length; i > 0; i--) {
//       desconta30[j] = array[i-1];
//       j++;
//     }
//   } else {
//     return `Array Invalido!`;
//   }
//   return desconta30;
// }
// console.log(conta30([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]));

//5
// function intercala (array1: number[], array2: number[]){
//   let j: number = 0;
//   let k: number = 1;
//   let arrayR = [];
//   let tamanho = array1.length + array2.length;
//   for (let i = 0; i < tamanho; i+=2){
//     arrayR[i] = array1[j];
//     arrayR[k] = array2[j];
//     j++;
//     k += 2;
//   }
//   return arrayR;
// }

// console.log(intercala([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,20]));

//6
// function contanota (notas: number[], media: number){
//   let novoArray: number[] = []
//   let j: number = 0;
//   let PerCent = (media*0.1);
  
//   for (let i = 0; i < notas.length; i++){
//     if (notas[i] > (media-PerCent) && notas[i] < (media+PerCent)){
//       novoArray[j] = notas[i];
//       j++
//     }
//   }
//   return novoArray;
// }

// console.log(contanota([1,7.1,3,4,5,6,7,8,9,10, 6.9,2,3,4,5,6,7,8,9,6.7,1,2,3,4,5,6,6.4,8,9,10, 1,2,3,4,5,6,7,8,9,10, 1,2,3,4,5,6,7.2,8,9,10], 7))

//7
// function LojinhaChimas (valor: number[], vendas: number[], codigo: string[]){
//   let valorGeral: number = 0;
//   let salario: number = 400;
//   let comissao: number = 0;
//   let maisVendido: number = 0;
//   let codigoMV: string = '';
//   let valorMV: number = 0;
//   let objteste: {
//     codigo: string;
//     vendas: number;
//     valor: number;
//   }[] = []; 
  
//   for (let i = 0; i < codigo.length; i++){
//     objteste.push({
//       codigo: codigo[i],
//       vendas: vendas[i],
//       valor: valor[i]
//     });
    
//     valorGeral += vendas[i]*valor[i];
//     comissao = valorGeral * 0.05;
    
//     if (vendas[i] > maisVendido){
//       maisVendido = vendas[i];
//       valorMV = valor[i];
//       codigoMV = codigo[i];
//     }
//   }

//   return [objteste, 'Valor geral da vendas: ' + valorGeral, 'Comissão: ' + comissao,'Código do mais vendido: ' + codigoMV, "Valor: " + valorMV];
  
// }

// console.log(LojinhaChimas([200, 80, 20, 40, 10, 9, 35, 76, 90, 45],[1, 5, 19, 5, 6, 9, 12, 6, 1, 2],['Combo Chima', 'Cuia', 'Enfeite', 'Bomba', 'Cuia colorida', 'Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5']));


//8
//nome do produto
//custo do produto
//preco de venda do produto
//de 50 produtos

// function produtos(nome: string[], custo: number[], preco: number[]):any{ 
//   let lucro: number[] = [];
//   let lucroTotal: number = 0;
//   let quantMenor10: number = 0;
//   let quantEntre10e30: number = 0;
//   let quantMaior30: number = 0;
  
//   for (let i = 0; i < preco.length; i++){
//     lucro[i] = preco[i] - custo[i];
//     lucroTotal += lucro[i];
//   }
//   for (let j = 0; j < lucro.length; j++){ 
//     if (lucro[j] < (lucroTotal*0.1)){
//       quantMenor10++;
//     } else if(lucro[j] >= (lucroTotal*0.1) && lucro[j] < (lucroTotal*0.3)) {
//       quantEntre10e30++;
//     } else{
//       quantMaior30++;
//     }
//   }
    
//     return "Lucro menor que 10%: " + quantMenor10 + " Lucro entre 10% e 30%: " + quantEntre10e30 + " Lucro maior que 30%: " + quantMaior30;
//   }


// console.log(produtos(['Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5', 'Cuia 6', 'Cuia 7', 'Cuia 8', 'Cuia 9', 'Cuia 10', 'Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5', 'Cuia 6', 'Cuia 7', 'Cuia 8', 'Cuia 9', 'Cuia 10','Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5', 'Cuia 6', 'Cuia 7', 'Cuia 8', 'Cuia 9', 'Cuia 10','Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5', 'Cuia 6', 'Cuia 7', 'Cuia 8', 'Cuia 9', 'Cuia 10','Cuia 1', 'Cuia 2', 'Cuia 3', 'Cuia 4', 'Cuia 5', 'Cuia 6', 'Cuia 7', 'Cuia 8', 'Cuia 9', 'Cuia 10'],[1, 5, 19, 5, 6, 9, 12, 6, 1, 2, 1, 5, 19, 5, 6, 9, 12, 6, 1, 2, 1, 5, 19, 5, 6, 9, 12, 6, 1, 2, 1, 5, 19, 5, 6, 9, 12, 6, 1, 2, 1, 5, 19, 5, 6, 9, 12, 6, 1, 2],[808, 80, 20, 40, 10, 9, 35, 76, 90, 45, 200, 80, 800, 40, 10, 9, 35, 76, 90, 45, 200, 570, 20, 40, 10, 2323, 125, 76, 90, 45, 900, 80, 20, 40, 800, 2000, 35, 1506, 90, 35, 2200, 80, 20, 40, 10, 9, 35, 236, 6000, 0]));

//9
// function concurso (nota: number[], nome: string[]){
// let Resultado: {
//       nome: string;
//       nota: number;
// } [] = []; 
  
//   for (let i = 0; i < nota.length; i++){
//     if (nota[i] >= 70){
//       Resultado.push({
//         nome: nome[i],
//         nota: nota[i]
//       });
//     }
//   }
//    return {Aprovados: Resultado};
// }

// console.log(concurso([10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75, 10, 30, 50, 80, 0, 70, 25, 40, 90, 75],['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6', 'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10']));

//10
// function supCinquenta (numeros: number[]){
//   let cont50: number = 0;
//   let objeto:{
//     arrayguardar: number;
//     posicoes: number;
//   } [] = []
  
//   for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] > 50){
//       objeto.push({
//         arrayguardar: numeros[i],
//         posicoes: i,
//       });
//       cont50++;
//     }
//   }
//   if (cont50 === 0){
//     return "NÃO EXISTE"
//   } else{
//     return objeto;
//   }
 
// }
// console.log(supCinquenta([10, 20, 30, 40, 50, 190, 80, 30, 40, 70]));

//11 
// corrigir provas de múltipla escolha
// cada prova tem 8 questões
// cada questão vale 1 ponto
// 1º coisa a ser lida é o gabarito
//mostrar o numero e a nota de cada aluno
// function prova (gabarito: string[], matricula: number[], respostas: string[]) {
//   let pontuacao: number = 0;
//   let k: number = 0;
//   let aprovados: number = 0;
//   let percentual: number = 0;
//   let notas: number[] = [];
//   let objeto: {
//     matricula: number;
//     nota: number;
//   }[] = [];
  
//   for(let i = 0; i < matricula.length; i++){
    
//     for(let j = 0; j < gabarito.length; j++){
//         if (respostas[k] === gabarito[j]){
//         pontuacao++;
//       }
//       k++;
//     }    
//     notas[i] = pontuacao;
//     objeto.push ({
//       matricula: matricula[i],
//       nota: notas[i],
//     });
//     if (pontuacao >= 6){
//       aprovados++;
//     }
//     pontuacao = 0;
//   }
//   percentual = (aprovados/matricula.length)*100;
//   return {Resultado: objeto, Aprovados: percentual.toFixed(2) + "%"};
// }


// console.log(prova(['a', 'd', 'c', 'a', 'b', 'b', 'a', 'c'], [111, 222, 333, 444, 555, 666, 777, 888, 999, 100],['a', 'd', 'c', 'a', 'b', 'b', 'b', 'c', 'd', 'd', 'a', 'a', 'c', 'b', 'b', 'c', 'c', 'd', 'c', 'a', 'a', 'b', 'a', 'c', 'a', 'd', 'c', 'a', 'b', 'c', 'a', 'c', 'a', 'd', 'c', 'c', 'b', 'b', 'a', 'c', 'a', 'a', 'c', 'a', 'd', 'b', 'b', 'c', 'a', 'c', 'c', 'a', 'b', 'b', 'a', 'c', 'a', 'd', 'c', 'a', 'b', 'b', 'b', 'c', 'a', 'd', 'c', 'a', 'b', 'b', 'a', 'c', 'a', 'd', 'c', 'a', 'b', 'a', 'a', 'c'] ));
