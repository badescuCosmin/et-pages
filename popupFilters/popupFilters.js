
$(document).ready(function () {
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
  
});
