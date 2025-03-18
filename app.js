// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let NombreAmigo = inputAmigo.value;

    if(!NombreAmigo) {
    alert ("Favor de ingresar un nombre");
    return;
}
    amigos.push(NombreAmigo);
    //console.log(amigos);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

    function renderizarAmigos(){
        let listaAmigos = document.getElementById("listaAmigos")
        listaAmigos.innerHTML = "";
    
        for(let i = 0; i < amigos.length; i++){
            let item = document.createElement("li");
            item.textContent = amigos[i];
            listaAmigos.appendChild(item);
        }
    }
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert ("No hay amigos para sortear");
            return;
        }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;

    resultado.style.display = "block";

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    document.getElementById("amigo").value = "";
        }
    function reiniciar(){ 
    location.reload(); 
    }