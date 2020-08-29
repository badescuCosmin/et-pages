$(document).ready(function() {

    (function setInput() {
        inputRestrictor.setInputOnlyWithDigits("phone");
        inputRestrictor.setInputOnlyWithDigits("zipCode");
        inputRestrictor.setInputWithExactCharactersLength("zipCode", 6);
        inputRestrictor.setInputWithExactCharactersLength("phone", 10);

        var inputs = [

            {
                id: 'cvv',
                fieldLabel: 'Cvv',
                required: true,
                type: 'text',
                charactersLength: 3,
                allowedCharacters: 'Numeric'
            },
            {
                id: 'oras',
                fieldLabel: 'Select a city',
                type: 'dropdown',
                required: true
            },
            {
                id: 'zipCode',
                fieldLabel: 'Zip Code',
                charactersLength: 6,
                required: true,
                type: 'text',
                allowedCharacters: 'Numeric'
            },
            {
                id: 'strada',
                fieldLabel: 'Strada',
                type: 'text',
                allowedCharacters: 'AlphaNumeric',
                required: true
            },
            {
                id: 'numar',
                fieldLabel: 'Numar',
                type: 'text',
                allowedCharacters: 'AlphaNumeric',
                required: true,
            },
            {
                id: 'fullAdress',
                fieldLabel: 'Adresa Completa',
                required: true,
                type: 'text',
                allowedCharacters: 'AlphaNumeric',
            },
            {
                id: 'name',
                fieldLabel: 'Name',
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
                charactersLength: 10,
                allowedCharacters: 'Numeric'
            }
        ]
        var inputsValidator = new FormValidator({ inputsList: inputs });
        $("#addressValidation").on("click", function() {
            generalMethods.goNextStep(inputsValidator)
        });
    })();
});