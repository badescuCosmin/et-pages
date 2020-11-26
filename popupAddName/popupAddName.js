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
        id: 'date',
        fieldLabel: 'Birthday',
        required: true,
        type: 'text',
        minLength: '10',
        charactersLength: 10
    },
    
];

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
    var date = document.getElementById('date');

    function checkValue(str, max) {
      if (str.charAt(0) !== '0' || str == '00') {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
      };
      return str;
    };
    
    date.addEventListener('input', function(e) {
      this.type = 'text';
      var input = this.value;
      if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
      var values = input.split('/').map(function(v) {
        return v.replace(/\D/g, '')
      });
      if (values[0]) values[0] = checkValue(values[0], 12);
      if (values[1]) values[1] = checkValue(values[1], 31);
      var output = values.map(function(v, i) {
        return v.length == 2 && i < 2 ? v + ' / ' : v;
      });
      this.value = output.join('').substr(0, 14);
    });
    
    date.addEventListener('blur', function(e) {
      this.type = 'text';
      var input = this.value;
      var values = input.split('/').map(function(v, i) {
        return v.replace(/\D/g, '')
      });
      var output = '';
      
      if (values.length == 3) {
        var year = values[2].length !== 4 ? parseInt(values[2]) + 2000 : parseInt(values[2]);
        var month = parseInt(values[0]) - 1;
        var day = parseInt(values[1]);
        var d = new Date(year, month, day);
        if (!isNaN(d)) {
          document.getElementById('result').innerText = d.toString();
          var dates = [d.getMonth() + 1, d.getDate(), d.getFullYear()];
          output = dates.map(function(v) {
            v = v.toString();
            return v.length == 1 ? '0' + v : v;
          }).join(' / ');
        };
      };
      this.value = output;
    });

    
});

