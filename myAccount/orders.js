var $menu = $('.order-list .playlist-item .child-list');
var $btn = $('.order-list .playlist-item .btn-primary');


$btn.click(function () {
    $(this).parents().eq(3).children().eq(1).toggle();
});