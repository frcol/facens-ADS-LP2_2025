
// function display(valor) {
//     document.querySelector("h1").innerHTML = "chamou a função";
// }

// function displayConsole(valor) {
//     console.warn(valor);
// }

// function somar(a, b, callBackFunction) {
//     let result = a + b;
//     callBackFunction(result);
// }

// // somar(3, 2, display);
// somar(10,5, displayConsole);

// setTimeout(display, 3000);
// console.warn("Passou.....");

// setInterval(myFunction, 1000); // callback Function

// function myFunction() {
//   let d = new Date();
//   document.querySelector("h1").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }

// console.warn("Passou.....");

// =========================================

let file = "https://68228280b342dce8004e75f0.mockapi.io/cliente";

fetch(file)
.then(response => response.json())
.then(data => {
    let ol = document.querySelector("ol");

    for (let pessoa of data) {
        ol.innerHTML += `<li style="color: blue;">${pessoa.name} (${pessoa.idade})</li>`;
    }
});