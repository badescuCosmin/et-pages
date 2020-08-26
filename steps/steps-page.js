$(document).ready(function() {
    
    $(".navbar-link").click(function() { 
        var listItems = $(".navbar-link"); 
        for (let i = 0; i < listItems.length; i++) { 
            listItems[i].classList.remove("active"); 
        } 
        this.classList.add("active"); 
    }); 

    var $itemRadioBoxContainer = $('.item-radio-box-container', $boxMainContainer);
    var $boxMainContainer = $('.box-main-container');
    var addIcon = '<i class="fas fa-plus fa-sm icon-style checkbox-icon-add"></i>';
    var checkIcon = '<i class="fas fa-check fa-sm icon-style checkbox-icon-check"></i>';
    var radioIcon = '<i class="fas fa-check fa-sm icon-style radiobox-icon exist" style = "color: #FFF !important"></i>';
    var checkBackground = 'item-box-check-background';
    var solidBlueBorder = '2px solid #1170DA';
    var transparentBorder = '2px solid transparent';
    var blueColorClass = 'blue-color';
    var displayNone = 'd-none';
    var $radioboxWrapper = $('.radiobox-wrapper');
    var $itemBoxContainer = $('.item-box-container');
    var $radioCircle = $('.circle', $radioboxWrapper);
    //STEPS
    var $next = $('#next');
    var $stepsContainer = $('.steps-container');
    var $stepsContent = $('.steps-content');
    setcheckbox();
    setRadiobox();
    setSteps();
    $next.trigger('click');
    
    function setcheckbox() {
        $itemBoxContainer.on('click', function() {
            const $checkContainer = $(this).find('.checkbox-wrapper');
            const $parentContainer = $checkContainer.parent();
            const $checkbox = $checkContainer.children().first('input');
            const icon = $checkContainer.find('i');
            if (!$checkbox.is(":checked")) {
                $checkbox.attr('checked', true);
                icon.remove();
                $checkContainer.append(checkIcon);
                $checkContainer.addClass(checkBackground);
                $parentContainer.css('border', solidBlueBorder);
                $parentContainer.find("span").addClass(blueColorClass)
            } else {
                icon.remove();
                $checkContainer.removeClass(checkBackground);
                $checkbox.attr('checked', false);
                $checkContainer.append(addIcon);
                $parentContainer.css('border', transparentBorder);
                $parentContainer.find("span").removeClass(blueColorClass)
            }
        })
    }

    function setRadiobox() {
        $itemRadioBoxContainer.on('click', function(e) {
            const $circle = $(this).find('.circle');
            const $wrapper = $(this).find('.radiobox-wrapper');
            const $innerCircle = $circle.children().first();
            $("input", $wrapper).prop("checked", true);
            $itemRadioBoxContainer.find("span").removeClass(blueColorClass);
            $(this).find("span").addClass(blueColorClass);
            $('.radiobox-icon', $radioboxWrapper).remove();
            $radioCircle.removeClass(checkBackground);
            $('.inner-circle', $radioboxWrapper).removeClass(displayNone);
            $innerCircle.addClass(displayNone);
            $circle.addClass(checkBackground);
            $circle.append(radioIcon);
        })
    }

    function setSteps() {
            var firstChild = $stepsContainer.find('.active:first');
            var existLine = firstChild.find('.line-wrapper');
            var done = firstChild.hasClass('done');
            var brother = firstChild.next();

            if (done === true) {
                return;
            }

            if (firstChild.length !== 0) {
                //exista clasa
                if (existLine.length != 0) {
                    firstChild.removeClass('active');

                } else {
                    firstChild.addClass('done');
                }

                firstChild.find('.text').removeClass('blue-color');
                firstChild.find('.text').removeClass('bold-700');
                firstChild.find("span").removeClass('gray-color');
                firstChild.find("span").addClass('green-color');
                firstChild.removeClass('dark-violet');
                firstChild.find('.circle').addClass('no-border');
                firstChild.find('.inner-circle').addClass('green-color');
                firstChild.find('.number').addClass('d-none');
                firstChild.find('.inner-circle').append(radioIcon);
                brother.find('.no-border').removeClass('no-border');
                brother.find('.dark-violet').removeClass('dark-violet');
                brother.find('.opacity-80').removeClass('opacity-80');
                brother.find("span").removeClass('gray-color');
                brother.addClass('active');
                brother.find('.text').addClass('blue-color');
                brother.find('.text').addClass('bold-700');

            } else {
                //nu exista clasa
                var children = $stepsContainer.find('.step-wrapper').first();
                children.addClass('active');
                children.find('.text').addClass('blue-color');
                children.find('.text').addClass('bold-700');
                children.find('.no-border').removeClass('no-border');
                children.find('.dark-violet').removeClass('dark-violet');
                children.find('.opacity-80').removeClass('opacity-80');
                children.find("span").removeClass('gray-color');
            }

            var firstActiveStepContent = $stepsContent.find('.active:first');
            var nextStep = firstActiveStepContent.next();

            if (firstActiveStepContent.length !== 0) {
                firstActiveStepContent.removeClass('active');
                firstActiveStepContent.addClass('d-none-custom');
                firstActiveStepContent.removeAttr("style");
                nextStep.addClass('active');
                nextStep.show('slow');

            } else {
                var firstActiveStepContent = $stepsContent.find('.step-content').first();
                firstActiveStepContent.addClass('active');
                firstActiveStepContent.show('slow');
            }
        
    }

    // go next step
    goNextStep = (stepToValidate) => {
        stepToValidate.validateAll();
        stepToValidate.inputsDetails

        if (stepToValidate.isValid) {
            setSteps();
        }
        // // for testing 
        // setSteps();
        console.log(stepToValidate.inputsDetails)
        console.log(stepToValidate.isValid)
    }

    //VALIDATION 
    setInput();

    function setInput() {
        // step1 inputs
        var step1Inputs = [{
                id: 'lastName',
                fieldLabel: 'Last Name',
                required: true,
                type: 'text',
                maxLength: '5',
                minLength: '3',
                allowedCharacters: 'Alpha',
                triggerType: 'change'
            },
            {
                id: 'firstName',
                fieldLabel: 'First Name',
                required: true,
                type: 'text',
                maxLength: '10',
                minLength: '5',
                allowedCharacters: 'Numeric',
                triggerType: 'change'
            },
            {
                id: 'password',
                fieldLabel: 'Password',
                required: true,
                type: 'text',
                maxLength: '12',
                minLength: '7',
                allowedCharacters: 'Numeric',
                triggerType: 'change'
            },
            {
                id: 'email',
                fieldLabel: 'Email',
                required: true,
                type: 'text',
                allowedCharacters: 'AlphaNumeric',
                isEmail: true,
                triggerType: 'change'
            },
            {
                id: 'discount',
                fieldLabel: 'Discount',
                required: true,
                type: 'text',
                allowedCharacters: 'AlphaNumeric',
                triggerType: 'change'
            },
            {
                id: 'oJucarie',
                required: true,
                type: 'checkbox',
                triggerType: 'click'
            }

        ]
        // step2 inputs
        var step2Inputs = [
            {
                id: 'numeCard',
                fieldLabel: 'Nume Card',
                required: true,
                type: 'text',
                maxLength: '20',
                minLength: '5',
                allowedCharacters: 'Alpha',
                triggerType: 'change'
            },
            {
                id: 'numarCard',
                fieldLabel: 'Numar Card',
                required: true,
                type: 'text',
                maxLength: '12',
                minLength: '12',
                allowedCharacters: 'Numeric',
                triggerType: 'change'
            },
            {
                id: 'dataExpirare',
                fieldLabel: 'Data Expirare',
                required: true,
                type: 'text',
                maxLength: '8',
                minLength: '8',
                allowedCharacters: 'Numeric',
                triggerType: 'change'
            },
            {
                id: 'cvv',
                fieldLabel: 'Cvv',
                required: true,
                type: 'text',
                maxLength: '3',
                minLength: '3',
                allowedCharacters: 'Numeric',
                triggerType: 'change'
            },
        ]

        var step1Validator = new FormValidator({inputsList:step1Inputs});
        var step2Validator = new FormValidator({inputsList:step2Inputs});


        $("#step1Validation").on("click", function() {
            goNextStep(step1Validator)
        })
        $("#step2Validation").on("click", function() {
            goNextStep(step2Validator)
            
        })
    }
})