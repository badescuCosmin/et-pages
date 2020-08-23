var FormValidator = (function() {

    function FormValidator(options) {
        this.options = $.extend(true, {}, FormValidator.options, options)
        this.inputsList = this.options.inputsList;
        this.inputsDetails = [];
        this.isValid = false;
        this.validateInputs();
    }

    FormValidator.prototype.validateInputs = function() {
        var self = this;
        const inputsList = [...this.inputsList];

        inputsList.forEach(function(input) {
            self.setValidateByTriggerType(input);
        })
    }

    FormValidator.prototype.validateAll = function() {
        var self = this;
        self.inputsDetails = [];
        const inputsList = [...this.inputsList];
        inputsList.forEach(function(input) {
            if (input.type) {
                switch (input.type) {
                    case inputType.text:
                        {
                            var value = $(`#${input.id}`).val();
                            var $parentContainer = $(`#${input.id}`).parent();
                            var numberOfCharacters = value.replace(/ /g, '').length;
                            _setValidationForTextInput.apply(this, [input, $parentContainer, numberOfCharacters, value]);
                            self.inputsDetails.push({
                                id: input.id,
                                value: value,
                                isValid: input.isValid
                            })
                            break;
                        }
                    case inputType.number:
                        {
                            _setValidationForNumberInput.apply(this, [input]);
                            break;
                        }
                    default:
                        console.log('no type');
                }
            }
        })

        self.isValid = _isValid.apply(self, []);
    }

    FormValidator.prototype.setValidateByTriggerType = function(input) {
        if (input) {
            if (input.triggerType) {
                switch (input.triggerType) {
                    case triggerType.keypress:
                        {
                            this.setKeypressTrigger(input);
                            break;
                        }
                    default:
                        this.setOnChangeTrigger(input);
                }
            }

            if (input.type === inputType.checkbox) {
                _setOnClickTrigger.apply(this, [input])
            }
        }
    }

    FormValidator.prototype.setKeypressTrigger = function(input) {
        $(`#${input.id}`).on('keypress', function() {
            {
                // console.log('On keypress');
                // var self = $(this);
                // var value = this.value;
                // _setRequiredValidation(self, value, input);
            }
        })
    }

    function _setOnClickTrigger(input) {
        $(`#${input.id}`).on('click', function() {
            var value = this.value;
            _setValidationForCheckboxInput.apply(this, [input, value]);
        })
    }

    FormValidator.prototype.setOnChangeTrigger = function(input) {
        var self = this;
        $(`#${input.id}`).on('change', function() {
            {
                if (input.type) {
                    switch (input.type) {
                        case inputType.text:
                            {
                                var value = this.value;
                                var $parentContainer = $(this).parent();
                                var numberOfCharacters = value.replace(/ /g, '').length;

                                _setValidationForTextInput.apply(this, [input, $parentContainer, numberOfCharacters, value]);
                                break;
                            }
                        case inputType.number:
                            {
                                _setValidationForNumberInput.apply(this, [input]);
                                break;
                            }
                        default:
                            console.log('no type');
                    }
                }
                console.log("The input is", input);
            }
        })
    }

    function _setValidationForTextInput(input, $parentContainer, numberOfCharacters, value) {
        input.ErrorMessages = [];
        _getRequiredValidation(value, input);
        _getEmailValidation(input, value);
        _getAllowedCharactersValidation(input, value);
        _getMinCharactersValidation(input, numberOfCharacters);
        //ADD THE ERROR MESSAGE ON UI
        _setInputValidation.apply(this, [input, $parentContainer])
    }

    function _setValidationForNumberInput(input) {

    }

    function _setValidationForCheckboxInput(input, value) {
        input.ErrorMessages = [];
        console.log("_setValidationForCheckboxInput");
        if (input.required) {
            if (!$(`#${input.id}`).is(':checked')) {
                console.log('E NEAPARATA NEVOIE DE EEAAA');
            } else {
                console.log('E APASATA');
            }
        }
    }

    function _setValidationForRadioBoxInput(input) {

    }

    function _setInputValidation(input, $parentContainer) {
        var errorMessage = "";
        if (input.ErrorMessages.length > 0) {
            errorMessage = input.ErrorMessages[0];
            $(`.${errorValidation}`, $parentContainer).text(errorMessage);
            $(`#${input.id}`).addClass(errorBorder);
            input.isValid = false;
        } else {
            $(`.${errorValidation}`, $parentContainer).text(errorMessage);
            $(`#${input.id}`).removeClass(errorBorder);
            input.isValid = true;
        }
    }

    function _getAllowedCharactersValidation(input, value) {
        var errorMessage = "";
        if (input.allowedCharacters) {
            if (input.allowedCharacters === charactersType.alpha) {
                if (value) {
                    var pattern = /^[a-zA-Z]*$/i;
                    var isvalid = _isValueValid(value, pattern);
                    if (!isvalid) {
                        errorMessage = validationMesages.getAllowedAplhaCharactersErrorMessage();
                    }
                }
                if (errorMessage) {
                    input.ErrorMessages.push(errorMessage);
                }
            }
        }
    }

    function _getRequiredValidation(value, input) {
        var errorMessage = "";
        if (input.required) {
            if (!value) {
                errorMessage = validationMesages.getRequiredErrorMessage(input.fieldLabel);
            }
            if (errorMessage) {
                input.ErrorMessages.push(errorMessage);
            }
        }
    }

    function _getMinCharactersValidation(input, numberOfCharacters) {
        var errorMessage = "";
        if (input.minLength || input.minLength && input.maxLength) {
            if (input.minLength > numberOfCharacters && numberOfCharacters !== 0) {
                errorMessage = validationMesages.getMinCharactersErrorMessage(input.minLength);
            }
            if (input.maxLength < numberOfCharacters) {
                errorMessage = validationMesages.getMaxCharactersErrorMessage(input.minLength, input.maxLength);
            }
            if (errorMessage) {
                input.ErrorMessages.push(errorMessage);
            }
        }
    }

    function _getEmailValidation(input, value) {
        var errorMessage = "";
        if (input.isEmail) {
            if (value) {
                var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
                var isvalid = _isValueValid(value, pattern);
                if (!isvalid) {
                    errorMessage = validationMesages.getEmailErrorMessage();
                }
            }
            if (errorMessage) {
                input.ErrorMessages.push(errorMessage);
            }
        }
    }

    function _isValid() {
        var isValid = true;
        this.inputsDetails.forEach(function(element) {
            if (element.isValid === false) {
                isValid = false;
            }
        })

        return isValid;
    }

    function _isValueValid(emailAddress, pattern) {
        return pattern.test(emailAddress);
    }


    FormValidator.options = {
        inputsList: []
    }


    return FormValidator;
}());