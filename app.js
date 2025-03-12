
let friendsList = [];

let htmlBodyInputElement = document.querySelector("input");
let htmlBodyULFriends = document.getElementById("listaAmigos");
let htmlBodyULResults = document.getElementById("resultado");

restartFriends();

function restartFriends() {
    htmlBodyULFriends.innerHTML = "";
}

function clearInput() {
    htmlBodyInputElement.value = "";
}

function adicionarAmigo() {
    
    inputText = htmlBodyInputElement.value;

    if (inputText === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (friendsList.includes(inputText)) {
        alert("Este nome já foi inserido.");
        clearInput();
        return;
    }

    friendsList.push(inputText);
    appendItemToUlElement(inputText, htmlBodyULFriends);
    clearInput();

    // console.log(`"${friendsList}"`);
    // console.log(`"${htmlBodyULFriends.innerHTML}"`);
    // console.log("\n");
}

function appendItemToUlElement(item, ulElement) {
    
    var liElement = document.createElement('li');
    liElement.innerHTML = item;
    ulElement.append(liElement);
}

function sortearAmigo() {

    if (friendsList.length === 0) return;

    index = getRandomArrayIndex();
    htmlBodyULResults.innerHTML = friendsList[index];

    // console.log(index);
    // console.log(friendsList[index]);
    // console.log("\n");
}

function getRandomArrayIndex() {
    return Math.floor(Math.random() * friendsList.length);
}