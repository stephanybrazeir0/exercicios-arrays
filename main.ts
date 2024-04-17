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
