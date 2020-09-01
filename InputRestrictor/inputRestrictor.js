var inputRestrictor = {};

(function() {
    inputRestrictor.setInputOnlyWithDigits = function(inputId) {
        $(`#${inputId}`).on('keypress input', function(e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });
    }
    inputRestrictor.setInputWithExactCharactersLength = function(inputId, charactersLength) {
        $(`#${inputId}`).on('keypress input', function(e) {
            var value = this.value.replace(/ /g, '').length;
            if (value === charactersLength) {
                return false;
            }
        });
    }

    inputRestrictor.putCharacterAfterNumberOfCharacters = function(inputId, character, numberOfCharacters) {
        $(`#${inputId}`).keyup(function() {
            var partOfValue = $(this).val().split(character).join("");
            if (partOfValue.length > 0) {
                partOfValue = partOfValue.match(new RegExp(`.{1,${numberOfCharacters}}`, 'g')).join(character);
            }
            $(this).val(partOfValue);
        });
    }

    inputRestrictor.setDate = function(inputId) {
        $(`#${inputId}`).on('keyup', function(e) {
            var numberOfCharacters = this.value.replace(/ /g, '').length;
            var intValue = parseInt(this.value);
            if (numberOfCharacters === 2) {
                if (intValue > 12) {
                    this.value = "01";
                }
            }
        });
    }

    inputRestrictor.focusNextElement = function(inputsIds) {
        inputsIds.forEach(function(id, index) {
            $(`#${id}`).on('keypress input', function(e) {
                if (e.which === 13) {
                    $(`#${inputsIds[index+1]}`).focus();
                }
            })
        });
    }

    inputRestrictor.onFocus = function(inputName) {
        $(`input[name=${inputName}]`).focus();
    }
}());