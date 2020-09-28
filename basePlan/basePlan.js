$(document).ready(function () {
    var $hamburgerBtn = $('.navbar-btn-mobile');
    var $abonament = $("#abonament");
    generalMethods.setCheckbox();
    generalMethods.getNavigation();
    generalMethods.setButton();
    $abonament.on('click', () => window.location = '../planSteps/plansSteps.html');
   
    $hamburgerBtn.on('click', function(){
        $('.navbar-wrapper-mobile').toggleClass('is-visible');
        $('.wrapper').toggleClass('is-visible');
        $('body').toggleClass('overflow-hidden');
    });

    $('.wrapper').on('click', function(e){
        $('.navbar-wrapper-mobile').toggleClass('is-visible');
        $('.wrapper').toggleClass('is-visible');
        $('body').toggleClass('overflow-hidden');
        e.preventDefault();
        e.stopImmediatePropagation();
    });

    $('.navbar-account').on('click', function(){
        $('.account-slider').toggleClass('account-active')
    })
});


// aici este logica pentru navigarea mobile
const mobileNavigationItems = [
    {
        title: '#toys',
        listTarget: '#link-menu-toys',
        subList:'#link-subMenu-toys',
        subListTarget:'#link-subMenu-toys-target'
    },
    {
        title: '#megaToys',
        listTarget: '#link-menu-megaToys'
    }
];

mobileNavigationItems.forEach(element => $(element.title).on('click', function () {
    $(element.listTarget).toggleClass('active-navigationItem');
    if(!$(element.listTarget).hasClass('active-navigationItem')){
        $(element.listTarget).hide();
        $(element.listTarget).parent('li').removeClass('active-navigationItem-style');
        $(element.listTarget).siblings('i').removeClass('active-navigationItem-icon fa-angle-up active-navigationItem-color');
        $(element.listTarget).siblings('a').removeClass('active-navigationItem-color');
    } else {
        $(element.listTarget).show();
        $(element.listTarget).parent('li').addClass('active-navigationItem-style');
        $(element.listTarget).siblings('i').addClass('active-navigationItem-icon fas fa-angle-up active-navigationItem-color');
        $(element.listTarget).siblings('a').addClass('active-navigationItem-color');

    }
}));

mobileNavigationItems.forEach(element => $(element.subList).on('click', function () {
    $(element.subListTarget).toggleClass('active-navigationItem');
    if(!$(element.subListTarget).hasClass('active-navigationItem')){
        $(element.subListTarget).hide();
        $(element.subList + ' i').removeClass('fa-angle-up');
    } else {
        $(element.subListTarget).show();
        $(element.subList + ' i').addClass('fas fa-angle-up');
    }
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
