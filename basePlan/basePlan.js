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


// aici este logica pentru navigarea mobile
const mobileNavigationItems = [
    {
        title: '#toys',
        listTarget: '.link-menu-toys'
    },
    {
        title: '#megaToys',
        listTarget: '.link-menu-megaToys'
    }
];

mobileNavigationItems.forEach(element => $(element.title).on('click', function () {
    generalMethods.toggleMobileNavigationItems($(element.listTarget));
}));

// *************


// aici este pentru hover

$(window).on("load resize", function () {
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});
