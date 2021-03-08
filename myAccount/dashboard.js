$(document).ready(function () {
    const $toggleOptions = $('.change-options');
    const $changeBtn = $('#change-btn');
    const $changeOption = $(".change-option");

    $changeBtn.on('click', () => {
        $toggleOptions.toggle();
    })


    $changeOption.on('click', ()=> {
        $toggleOptions.toggle();
    })
});
