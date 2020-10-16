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
        id: 'birthday-day',
        fieldLabel: 'Birthday',
        required: true,
        type: 'text',
        minLength: '2',
        charactersLength: 2
    },
    {
        id: 'birthday-mounth',
        fieldLabel: 'Birthday',
        required: true,
        type: 'text',
        minLength: '2',
        charactersLength: 2
    },
    {
        id: 'birthday-year',
        fieldLabel: 'Birthday',
        required: true,
        type: 'text',
        minLength: '4',
        charactersLength: 4
    }
];
    $('#birthday-label').on('click', function(){
        document.getElementById("birthday-day").focus();  
    })
    $('#birthday-day').on('keyup', function(){
        if(this.value.length === 2){
            document.getElementById("birthday-mounth").focus();
        }
        if(this.value > 31){
            this.value = '01'
        }
    })
    $('#birthday-mounth').on('keyup', function(e){
        if(this.value.length ===  2){
            if(this.value > 12){
                this.value = '01'
            }
            document.getElementById("birthday-year").focus();
        }
        if(e.keyCode === 8){
           if(!this.value.length){
            document.getElementById("birthday-day").focus();  
           }
        }
    })
    $('#birthday-year').on('keyup', function(e){
        if(this.value.length  === 4){
            document.getElementById("btn-cta").focus();
        }
        if(e.keyCode === 8){
            if(!this.value.length){
             document.getElementById("birthday-mounth").focus();  
            }
         }
    })
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
                charactersLength: 10
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

        var inputsValidator = new FormValidator({ inputsList: inputs });

        $("#btn-cta").on("click", function () {

            generalMethods.goNextStep(inputsValidator);
        });
    };
    setInput();


    
});

