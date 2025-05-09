// document.querySelector("#btn1").addEventListener('click', Button1);

// document.querySelector("#btn2").addEventListener('click', function() {
//     alert("asdasda");
// });

const buttons = document.querySelectorAll("Button");

for (let btn of buttons) {
    btn.addEventListener('click', function() {
        document.querySelector("#titulo").innerHTML = btn.innerHTML;
    })
}


function Button1() {
    // const audio = document.querySelector("audio");
    // audio.play();

    //document.querySelector("h1").classList.add("ativo");

    const newItem = document.createElement("li");
    newItem.innerHTML = "Piedade";
    document.querySelector("ul").appendChild(newItem);
}

function Button2() {
    //const paragrafo = document.querySelector("p");
    // paragrafo.innerHTML = "Legal!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
    //paragrafo.style.fontSize = "5px";

    const img = document.querySelector("img");
    img.src = "imagens/cat.png";

    document.querySelector("h1").classList.remove("ativo");
}

function Button3() {
    const buttons = document.querySelectorAll("li");

    // for (let btn of buttons) {
    //     btn.innerHTML = "Mudou";
    // }

    // let i=1;
    // buttons.forEach(function(btn) {
    //     btn.innerHTML = i;
    //     i++;
    // });

    document.querySelector("h1").classList.add("desativado");
}