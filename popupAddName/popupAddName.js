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
        charactersLength: 10
    }];

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

    
    let input_birthday = document.getElementById('birthday');
    let currentYear = new Date().getFullYear();

    function checkBirthdayValue(str, max) {
        if (str.charAt(0) !== '0' || str == '00') {
            let num = parseInt(str);
            if (isNaN(num) || num <= 0 || num > max) num = 1;
            if (num > parseInt(max.toString().charAt(0)) && num.toString().length == 1) {
                str = '0' + num;
            } else {
                str = num.toString()
            }
        };
        return str;
    };

    input_birthday.addEventListener('input', function (e) {
        this.type = 'text';
        let input = this.value;
        if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
        let values = input.split('/').map(function (v) {
            return v.replace(/\D/g, '')
        });
        if (values[0]) values[0] = checkBirthdayValue(values[0], 31); // day check
        if (values[1]) values[1] = checkBirthdayValue(values[1], 12); // month check
        if (values[1]) values[1] = checkBirthdayValue(values[1], currentYear); // year check
        let output = values.map(function (v, i) {
            return v.length == 2 && i < 2 ? v + ' / ' : v;
        });
        this.value = output.join('').substr(0, 14);
    });

    
});

