var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var divOutput = document.querySelector("#div-output");

var serverUrl = "https://api.funtranslations.com/translate/morse.json";

function constructUrl(text) {
    return serverUrl + "?text=" + text;
}
function errorHandler(error) {
    alert("Error occured! Try after some time.");
}
function inputClickHandler() {
    var inputText = textInput.value;
    fetch(constructUrl(inputText))
    .then(response => response.json())
    .then(json => divOutput.innerHTML = json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",inputClickHandler)