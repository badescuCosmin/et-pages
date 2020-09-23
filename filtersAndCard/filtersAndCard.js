

$(document).ready(function () {
    var $productCard = $('.product-card');
    // for testing functionality
    var $openMobilePopup = $('#openMobilePopup');
    var headerFilters = ['#item1','#item2'];
    var filtersInputsIds = ['#filter1', '#filter2', '#filter3'];

    filtersInputsIds.forEach(element => {
        $(element).on('click', function () {
            if ($(element).hasClass('active')) {
                $(element).removeClass('active');
                $(`${element} .fa-check`).addClass('d-none');
            } else {
                $(element).addClass('active');
                $(`${element} .fa-check`).removeClass('d-none');
            }
        });
    });
    headerFilters.forEach(element => {
        $(element).on('click', function () {
            if ($(element).hasClass('item-active')) {
                $(element).removeClass('item-active');
            } else {
                $(element).addClass('item-active');
            }
        });
    })
    $productCard.hover(function(){
        $(this).children('.card-product-footer').children('.btn-primary').toggleClass("d-none");
    });
});


