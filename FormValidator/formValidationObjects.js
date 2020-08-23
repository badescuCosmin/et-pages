var inputType = {
    number: "number",
    text: "text",
    checkbox: "checkbox",
    radiobox: "radiobox"
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
var errorInputContainer = "error-input-container";
var errorValidation = "error-validation";
var errorBorder = "error-border";
var validationMesages = {}

validationMesages.getRequiredErrorMessage = function(field) {
    if (!field) {
        field = "Field";
    }
    return `${field} is required`;
}

validationMesages.getMinCharactersErrorMessage = function(number) {
    return `Enter at least ${number} characters`;
}

validationMesages.getMaxCharactersErrorMessage = function(min, max) {
    return `Enter a value between  ${min} and ${max} characters long`;
}

validationMesages.getEmailErrorMessage = function() {
    return `Is is not a valid e-mail address`;
}

validationMesages.getAllowedAplhaCharactersErrorMessage = function() {
    return `Enter only alphabetical letters`;
}