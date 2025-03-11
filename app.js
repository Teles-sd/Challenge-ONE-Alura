
let names = [];

let htmlBodyInputElement = document.querySelector("input");
let htmlBodyULFriends = document.getElementById("listaAmigos");
let htmlBodyULResults = document.getElementById("resultado");



function adicionarAmigo() {
    
    inputText = htmlBodyInputElement.value;
    names.push(inputText);
    
    appendItemToUlElement(inputText, htmlBodyULFriends);

    console.log(`"${names}"`);
    console.log(`"${htmlBodyULFriends.innerHTML}"`);
    console.log("\n");
}

function appendItemToUlElement(item, ulElement) {
    
    var liElement = document.createElement('li');
    liElement.innerHTML = item;
    ulElement.append(liElement);
}

function sortearAmigo() {

}