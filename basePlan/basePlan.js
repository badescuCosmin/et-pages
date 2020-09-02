$(document).ready(function () {
    var $hamburgerBtn = $('.navbar-btn-mobile');
    var $mobileNavbar = $(".navbar-wrapper-mobile");
    var $navbarMobile = $(".navbar-mobile");
    var $abonament = $("#abonament");
    generalMethods.setCheckbox();
    generalMethods.getNavigation();
    generalMethods.setButton();
    $abonament.on('click', () => window.location = '../planSteps/plansSteps.html');

    (navbarMobile = function () {
        var isActive = false;
        $hamburgerBtn.on('click', () => {
            isActive = !isActive;
            if (isActive) {
                $mobileNavbar.addClass("navbar-active");
                $navbarMobile.addClass("d-block")
            } else {
                $mobileNavbar.removeClass("navbar-active");
                $navbarMobile.removeClass("d-block");
            }
        });
    })()
});