$(document).ready(function () {
    var max_fields = 10;
    var wrapper = $(".inner-wrapper");
    var add_button = $(".add");
    var x = 1;
    var inputs = [{
        id: 'name',
        fieldLabel: 'Prenume',
        required: true,
        type: 'text',
        minLength: '3',
        allowedCharacters: 'Alpha'
    },
    {
        id: 'birthday',
        fieldLabel: 'Birthday',
        required: true,
        type: 'text',
        minLength: '3',
        charactersLength: 8
    }];
    $(add_button).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append(`
            <div class="inner-wrapper">
                <div class="input-container">
                    <input type="text" class="input-style" placeholder="Nume" id="name${x}" />
                    <div class="error-input-container">
                        <span class="error-validation"></span>
                    </div>
                </div>
                <div class="input-container">
                    <input type="tel" class="input-style" placeholder="Birthday (dd/mm/yy) " id="birthday${x}" />
                    <div class="error-input-container">
                        <span class="error-validation"></span>
                    </div>
                </div>
                <span class="remove_field text-right">Remove</span>
            </div>
            `);
            inputs.push({
                id:`name${x}`,
                fieldLabel: 'Prenume',
                required: true,
                type: 'text',
                minLength: '3',
                allowedCharacters: 'Alpha'
            },
            {
                id:`birthday${x}`,
                fieldLabel: 'Birthday',
                required: true,
                type: 'text',
                minLength: '3',
                charactersLength: 8
            });
           
        };
        setInput();
    });
    $(wrapper).on("click", ".remove_field", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
        const newInputs = inputs.slice(-1,1);
        inputs = [...newInputs];
    });

    function setInput() {
        if(inputs.length > 2){
            for(i=0; i< inputs.length/2 -1 ; i++) {
                inputRestrictor.setInputOnlyWithDigits(`birthday${x}`);
                inputRestrictor.setInputWithExactCharactersLength(`birthday${x}`, 8);
                inputRestrictor.putCharacterAfterNumberOfCharacters(`birthday${x}`, "/", 2);
                inputRestrictor.setDate(`birthday${x}`); 
            }
        }
        inputRestrictor.setInputOnlyWithDigits("birthday");
        inputRestrictor.setInputWithExactCharactersLength("birthday", 8);
        inputRestrictor.putCharacterAfterNumberOfCharacters("birthday", "/", 2);
        inputRestrictor.setDate("birthday");
        // step1 inputs
        var inputsValidator = new FormValidator({ inputsList: inputs });

        $("#btn-cta").on("click", function () {
            generalMethods.goNextStep(inputsValidator);
        });
    };
    setInput();
});