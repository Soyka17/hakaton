/*jQuery(document).ready(function ($){
    var
        $window = $(window),
        $target = $(".menu"),
        $h = $target.offset().top;
    $window.on('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > $h) {
            $target.addClass("active");
        } else {
            $target.removeClass("active");
        }
    });

});*/
$(document).on('click', '.js-menu-toggler', function (e) {
    e.preventDefault();
    /*$('body').toggleClass('noscroll');*/
    $('.js-menu-toggler').toggleClass('active');
    $('.js-header').toggleClass('active');
    $('.js-header-background').toggleClass('active');
});

$(document).on('mousedown', 'body', function (e) {
    if ($(e.target).closest('.js-header').length == 0 && $(e.target).closest('.js-menu-toggler').length == 0  && $('.js-header').hasClass('active')) {
        $('body').removeClass('noscroll');
        $('.js-menu-toggler').removeClass('active');
        $('.js-header').removeClass('active');
        $('.js-header-background').removeClass('active');
    }
});

function forScroll () {
    if ($('.js-preview').length != 0) {
        var previewHeight = $('.js-preview').outerHeight();
        if ($(window).scrollTop() > previewHeight - 200) {
            $('.js-burger').addClass('scroll');
        } else {
            $('.js-burger').removeClass('scroll');
        }
    }
}
forScroll ();