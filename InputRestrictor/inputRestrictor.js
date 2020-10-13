var inputRestrictor = {};

(function () {
    inputRestrictor.setInputOnlyWithDigits = function (inputId) {
        $(`#${inputId}`).on('keypress input', function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });
    }
    inputRestrictor.setInputWithExactCharactersLength = function (inputId, charactersLength) {
        $(`#${inputId}`).on('keypress input', function (e) {
            var value = this.value.replace(/ /g, '').length;
            if (value === charactersLength) {
                return false;
            }
        });
    }

    inputRestrictor.putCharacterAfterNumberOfCharacters = function (inputId, character, numberOfCharacters) {
        $(`#${inputId}`).keyup(function () {
            var partOfValue = $(this).val().split(character).join("");

            if (partOfValue.length > 0 && partOfValue.length <=5) {
                partOfValue = partOfValue.match(new RegExp(`.{1,${numberOfCharacters}}`, 'g')).join(character);
            } else if (partOfValue.length > 5) {
                return partOfValue 
            }
            $(this).val(partOfValue);
        });
    }

    inputRestrictor.setDate = function (inputId) {
        $(`#${inputId}`).on('keyup', function (e) {
            if(this.value.length === 2){
                if(this.value > 31){
                    return this.value = '01';
                }
            }else if (this.value.length === 5){
               const arrayOfValues = this.value.split('/');
               let lastTwoDigits = arrayOfValues.splice(1,2);
               if(lastTwoDigits > 12){
                   this.value = `${arrayOfValues[0]}/01`
               }
            }
        });
    }

    inputRestrictor.focusNextElement = function (inputsIds) {
        inputsIds.forEach(function (id, index) {
            $(`#${id}`).on('keypress input', function (e) {
                if (e.which === 13) {
                    $(`#${inputsIds[index + 1]}`).focus();
                    var inputHeight = $(this).offset().top - 10;
                    $("html, body").animate({ scrollTop: inputHeight }, 600);
                }
            })
        });
    }

    inputRestrictor.onFocus = function (inputId) {
        $(`#${inputId}`).get(0).focus();
    }
}());