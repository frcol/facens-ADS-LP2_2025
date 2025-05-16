// function display(valor) {
//     document.querySelector("h1").innerHTML = valor;
// }

// function displayConsole(valor) {
//     console.warn(valor);
// }

// function soma(a, b, myFunction) {
//     let result = a + b;
//     myFunction(result);
// }

// soma(4, 2, displayConsole)

// function mostrar() {
//     document.querySelector("h1").innerHTML = "Deu certo!";
// }

// setTimeout(mostrar, 3000);
// console.log("Passou...")

// setInterval(myFunction, 1000); // callback Function
// console.log("Passou...")

// function myFunction() {
//   let d = new Date();
//   document.querySelector("h1").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }

// ==================================================
// FETCH

let file = "https://68267668397e48c913162c6d.mockapi.io/usuario";

// fetch(file)
//     .then(response => response.json())
//     .then(data => {
//         let ol = document.querySelector("ol");
//         let i = 0;
//         for (let pessoa of data) {
//             ol.innerHTML += `<li>${pessoa.nome}</li>`;
//             i++;
//         }
//     });

//     function apagar(id) {
//         console.log(id);
//     }

// ================================================================

let pessoa = {
    "nome": "Fabio Colombini",
    "idade": 52
  }

fetch(file, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(pessoa)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));