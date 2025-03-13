/* // Exercise 1: ======================================================
Escreva um programa que declare duas variáveis numéricas e realize as quatro operações matemáticas básicas (+, -, *, /). Imprima os resultados no console.
*/
// const num1 = 5;
// const num2 = 10;

// const sum = num1 + num2;
// const subtraction = num1 - num2;
// const multiplication = num1 * num2;
// const division = num1 / num2;

// console.log("Sum:", sum);
// console.log("Subtraction:", subtraction);
// console.log("Multiplication:", multiplication);
// console.log("Division:", division); 

/* // Exercise 2: ======================================================
Faça um programa que mostre os números ímpares em um intervalo de 0 a 100.
*/
// for (let i = 1; i <= 100; i+=2) {
//     console.log(i);
// }

// ou

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// } 
    
/* // Exercise 3: ======================================================
Faça um programa que mostre a quantidade de caracteres para o texto “Disciplina de Programação para web”.
*/
// const texto = "Disciplina de Programação para web";
// console.log(texto.length); 

/* // Exercise 4: ======================================================
Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br
Por exemplo:
A variável nome possui o conteúdo “Fabio Rodrigo Colombini”.
Deve mostrar fabio.colombini@facens.br
*/
const nome = "Fabio Rodrigo Colombini";
let arNome = nome.split(" ");

if (arNome.length >= 2) {
    let email = `${arNome[0].toLowerCase()}.${arNome[arNome.length-1].toLowerCase()}@facens.br`;
    console.log(email);
}
else {
    console.log("Nome incompleto");
} 

/* Exercise 5: ======================================================
Escreva um programa que imprima os números de 1 a 10 no console na mesma linha usando Estrutura de repetição. Os números devem ser separados com um traço, ex.: 1 – 2 – 3 - … – 10. 
Observação: após o número 10 não pode ter um traço.
*/
// let str = "";

// for (let i = 1; i <= 10; i++) {
//     if (i < 10)
//         str += i+"-";
//     else
//         str += i;
// } 

// console.log(str);



/* Exercise 6: ======================================================
Faça uma função que mostre o dobro do número passado. Caso o número seja menor ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que zero”.
*/
// function dobraNumeroPositivo(num) { 
//     if (num > 0) {
//         return num*2;
//     }
//     else {
//         console.log("Só é aceito números positivos maiores que zero.");
//     }
// }

// console.log(dobraNumeroPositivo(5)); 

/* Exercise 7: ======================================================
Escreva uma função que receba uma string como argumento e retorne a string invertida.
*/
// function reverseString(str) {
//    let strReverse = "";
//    for (let i = str.length-1; i >= 0; i--) {
//       strReverse += str[i];
//    }
    
//    // strReverse = str.split("").reverse().join("");

//    return strReverse;
// }

// console.log(reverseString("Fabio")); 



/* Exercise 8: ======================================================
Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).
*/
// function numDeVogais(str) {
//     let vogais = "aeiou";

//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vogais.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(numDeVogais("Fabio")); 

/* Exercise 9: ======================================================
Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'.
*/

// function checkEmail(email) {
//     let arEmail = email.split("@");

//     if (arEmail.length === 2) {
//         let arEmail2 = arEmail[1].split(".");
//         if (arEmail2.length >= 2) {
//             return true;
//         }
//     }
    
//     return false;
// }

// console.log(checkEmail("fabiorcolombinigmail.com")); 

/* Exercise 10: ======================================================
Escreva uma função que verifique se uma determinada string é um palíndromo (ou seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda).
*/

// function palindromo(str) {
//     let strReverse = "";
//     for (let i=str.length-1; i >= 0; i--) {
//         strReverse += str[i];
//     }

//     return str === strReverse;
// }

// console.log(palindromo("arara")); 

