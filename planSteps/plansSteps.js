$(document).ready(function() {
    generalMethods.setSteps();
    generalMethods.setRadiobox();
    generalMethods.setRadioButton();

    function setInput() {

        inputRestrictor.setInputOnlyWithDigits("cvv");
        inputRestrictor.setInputWithExactCharactersLength("cvv", 3);
        inputRestrictor.setInputOnlyWithDigits("numarCard");
        inputRestrictor.setInputWithExactCharactersLength("numarCard", 16);
        inputRestrictor.putCharacterAfterNumberOfCharacters("numarCard", " ", 4);
        inputRestrictor.setInputOnlyWithDigits("dataExpirare");
        inputRestrictor.setInputWithExactCharactersLength("dataExpirare", 5);
        inputRestrictor.putCharacterAfterNumberOfCharacters("dataExpirare", "/", 2);
        inputRestrictor.setDate("dataExpirare");

        var step1Inputs = [{
                    id: 'lastName',
                    fieldLabel: 'Name',
                    required: true,
                    type: 'text',
                    minLength: '3',
                    allowedCharacters: 'Alpha'
                },
                {
                    id: 'firstName',
                    fieldLabel: 'First Name',
                    required: true,
                    type: 'text',
                    minLength: '3',
                    allowedCharacters: 'Alpha',
                },
                {
                    id: 'password',
                    fieldLabel: 'Password',
                    required: true,
                    type: 'text',
                    minLength: '3',
                    allowedCharacters: 'AlfaNumeric',
                },
                {
                    id: 'email',
                    fieldLabel: 'Email',
                    required: true,
                    type: 'text',
                    isEmail: true,
                },
                {
                    id: 'discount',
                    fieldLabel: 'Discount',
                    type: 'text'
                },
                {
                    id: 'terms1',
                    required: true,
                    type: 'checkbox',
                    triggerType: 'click'
                },
                {
                    id: 'terms2',
                    type: 'checkbox',
                    triggerType: 'click'
                },
            ]
            // step2 inputs
        var step2Inputs = [{
                id: 'numeCard',
                fieldLabel: 'Nume Card',
                required: true,
                type: 'text',
                maxLength: '20',
                minLength: '5',
                allowedCharacters: 'Alpha',
            },
            {
                id: 'numarCard',
                fieldLabel: 'Numar Card',
                charactersLength: 16,
                required: true,
                type: 'text',
                allowedCharacters: 'Numeric'
            },
            {
                id: 'dataExpirare',
                fieldLabel: 'Data Expirare',
                required: true,
                type: 'text',
                charactersLength: 5,
                allowedCharacters: 'Numeric'
            },

            {
                id: 'cvv',
                fieldLabel: 'Cvv',
                required: true,
                type: 'text',
                charactersLength: 3,
                allowedCharacters: 'Numeric'
            },
        ]

        var step1Validator = new FormValidator({ inputsList: step1Inputs });
        var step2Validator = new FormValidator({ inputsList: step2Inputs });

        $("#step1Validation").on("click", function() {
            generalMethods.goNextStep(step1Validator);
        })
        $("#step2Validation").on("click", function() {
            generalMethods.goNextStep(step2Validator);

        })
    }
    setInput()
})