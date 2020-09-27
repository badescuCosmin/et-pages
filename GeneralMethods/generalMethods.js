var generalMethods = {};

(function () {
    var $itemRadioBoxContainer = $('.item-radio-box-container', $boxMainContainer),
        $boxMainContainer = $('.box-main-container'),
        addIcon = '<i class="fas fa-plus fa-sm icon-style checkbox-icon-add"></i>',
        checkIcon = '<i class="fas fa-check fa-sm icon-style checkbox-icon-check"></i>',
        radioIcon = '<i class="fas fa-check fa-sm icon-style radiobox-icon exist" style = "color: #FFF !important"></i>',
        checkBackground = 'item-box-check-background',
        solidBlueBorder = '2px solid #1170DA',
        transparentBorder = '2px solid transparent',
        blueColorClass = 'blue-color',
        displayNone = 'd-none',
        $radioboxWrapper = $('.radiobox-wrapper'),
        $itemBoxContainer = $('.item-box-container'),
        $radioCircle = $('.circle', $radioboxWrapper),
        $stepsContainer = $('.steps-container'),
        $stepsContent = $('.steps-content');

    generalMethods.setCheckbox = function (noBorders) {
        $itemBoxContainer.on('click', function () {
            const $checkContainer = $(this).find('.checkbox-wrapper');
            const $parentContainer = $checkContainer.parent();
            const $checkbox = $checkContainer.children().first('input');
            const icon = $checkContainer.find('i');
            if (!$checkbox.is(":checked")) {
                $checkbox.attr('checked', true);
                icon.remove();
                $checkContainer.append(checkIcon);
                $checkContainer.addClass(checkBackground);
                if (!noBorders) $parentContainer.css('border', solidBlueBorder);
                $parentContainer.find("span").addClass(blueColorClass)
            } else {
                icon.remove();
                $checkContainer.removeClass(checkBackground);
                $checkbox.attr('checked', false);
                $checkContainer.append(addIcon);
                if (!noBorders) $parentContainer.css('border', transparentBorder);
                $parentContainer.find("span").removeClass(blueColorClass)
            }
        })
    }

    generalMethods.setRadiobox = function () {
        $itemRadioBoxContainer.on('click', function (e) {
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

    generalMethods.setSteps = function () {
        var firstChild = $stepsContainer.find('.active:first');
        var existLine = firstChild.find('.line-wrapper');
        var done = firstChild.hasClass('done');
        var brother = firstChild.next();

        if (done === true) {
            return;
        }

        if (firstChild.length !== 0) {
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
            nextStep.show(50, 'linear');

        } else {
            var firstActiveStepContent = $stepsContent.find('.step-content').first();
            firstActiveStepContent.addClass('active');
            firstActiveStepContent.show(50, 'linear');
        }
    }
    generalMethods.goNextStep = function (stepToValidate) {
        stepToValidate.validateAll();
        stepToValidate.inputsDetails
        if (stepToValidate.isValid) {
            console.log("intra");
            this.setSteps();
        }
    };
    generalMethods.setButton = function () {
        var $abonament = $("#abonament");
        var price = '.price';
        var itemBoxContainer = '.item-box-container';
        var boxesIds = ["box1", "box2", "box3"];
        var boxesValue = 0;
        var buttonValue = parseFloat($abonament.find('span:first').text());

        boxesIds.forEach(function (itemId) {
            var $input = $(`#${itemId}`);
            var $parent = $input.parents(itemBoxContainer);
            $parent.on('click', function () {
                var $price = $(this).find(price);
                var str = $price.text();
                var stringPrice = str.substring(1);
                var priceValue = parseFloat(stringPrice);
                if ($input.is(':checked')) {
                    boxesValue = boxesValue + priceValue;
                } else {
                    boxesValue = boxesValue - priceValue;
                }
                $abonament.find('span:first').text(parseInt(buttonValue + boxesValue).toFixed(2));
            })
        })
    }
    generalMethods.setRadioButton = function () {
        var price = '.price';
        var itemBoxContainer = '.item-radio-box-container';
        var $parent = $('input[name=subscription]').parents(itemBoxContainer);

        var $step2Validation = $("#step2Validation");
        var buttonValue = parseFloat($step2Validation.find('span:first').text());
        $parent.on('click', function () {
            var value = 0;
            var $price = $(this).find(price);
            value = parseFloat($price.text());


            console.log(value);

            $step2Validation.find('span:first').text((buttonValue + value).toFixed(2));
        })
    };
    generalMethods.getNavigation = function () {
        var $navbarLink = $('.navbar-link');
        $navbarLink.on('click', function () {
            var listItems = $navbarLink;
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].classList.remove("active");
            }
            this.classList.add("active");
        });
    }
}());