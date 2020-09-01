$(document).ready(function() {

    (function setInput() {
        inputRestrictor.setInputOnlyWithDigits("phone");
        inputRestrictor.setInputOnlyWithDigits("zipCode");
        

        var inputs = [{
                id: 'oras',
                fieldLabel: 'Select a city',
                type: 'dropdown',
                required: true
            },
            {
                id: 'zipCode',
                fieldLabel: 'Zip Code',
                minLength:4,
                maxLength:8,
                required: true,
                type: 'text',
                allowedCharacters: 'Numeric'
            },
            {
                id: 'strada',
                fieldLabel: 'Strada',
                type: 'text',
                minLength:5,
                allowedCharacters: 'AlphaNumeric',
                required: true
            },
            {
                id: 'numar',
                fieldLabel: 'Numar',
                type: 'text',
                minLength:1,
                allowedCharacters: 'AlphaNumeric',
                required: true,
            },
            {
                id: 'fullAdress',
                fieldLabel: 'Adresa Completa',
                type: 'text'
            },
            {
                id: 'name',
                fieldLabel: 'Nume',
                required: true,
                type: 'text',
                minLength: '3',
                allowedCharacters: 'Alpha'
            },
            {
                id: 'phone',
                fieldLabel: 'Phone',
                required: true,
                type: 'text',
                minLength:10,
                maxLength:13,
                allowedCharacters: 'Numeric'
            }
        ]
        var inputsValidator = new FormValidator({ inputsList: inputs });
        $("#addressValidation").on("click", function() {
            generalMethods.goNextStep(inputsValidator)
        });
    })();
});