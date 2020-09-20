

$(document).ready(function () {
    var $productCard = $('.product-card');
    // for testing functionality
    var filtersInputsIds = ['#filter1', '#filter2', '#filter3'];

    filtersInputsIds.forEach(element => {
        $(element).on('click', function () {
            if ($(element).hasClass('active')) {
                $(element).removeClass('active');
                $(`${element} .action-sign-plus`).removeClass('d-none');
                $(`${element} .action-sign-minus`).addClass('d-none');
            } else {
                $(element).addClass('active');
                $(`${element} .action-sign-plus`).addClass('d-none');
                $(`${element} .action-sign-minus`).removeClass('d-none');
            }
        });
    });

    $productCard.hover(function(){
        $(this).children('.card-product-footer').children('.btn-primary').toggleClass("d-none");
    });

});


