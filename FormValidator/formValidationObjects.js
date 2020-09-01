var inputType = {
    number: "number",
    text: "text",
    checkbox: "checkbox",
    radiobox: "radiobox",
    dropdown: "dropdown"
}

var charactersType = {
    alpha: "Alpha",
    numeric: "Numeric",
    alphaNumeric: "AlphaNumeric"
}

var triggerType = {
    keypress: "keypress",
    change: "change",
    click: "click"
}

var displayNone = "d-none";
var boxMainContainer = "box-main-container";
var errorInputContainer = "error-input-container";
var errorValidation = "error-validation";
var errorBorder = "error-border";
var validationMesages = {}

validationMesages.getRequiredErrorMessage = function(field) {
    if (!field) {
        field = "Field";
    }
    return `Te rugăm să completezi acest camp`;
}

validationMesages.getMinCharactersErrorMessage = function({fieldLabel},number) {
    return `${fieldLabel} trebuie sa aiba cel putin ${number} caractere`
}

validationMesages.getMaxCharactersErrorMessage = function(min, max) {
    return `Introduceti o valoare intre ${min} si ${max} caractere`;
}

validationMesages.getEmailErrorMessage = function() {
    return `Adresa de email incorecta`;
}

validationMesages.getAllowedAplhaCharactersErrorMessage = function() {
    return `Introduceti doar litere`;
}

validationMesages.getAllowedDigitsErrorMessage = function() {
    return `Introduceti doar cifre`;
}

validationMesages.getAllowedAlphaNumericErrorMessage = function() {
    return `Introduceti doar litere si cifre`;
}


validationMesages.getMaxValueErrorMessage = function(maxValue) {
    return `Valoarea maxima este ${maxValue}`;
}

validationMesages.getMinValueErrorMessage = function(minValue) {
    return `Valoarea minima este ${minValue}`;
}

validationMesages.getCharactersLengthErrorMessage = function(length) {
    return `Numarul de caractere oblicatoriu este ${length}`;
}