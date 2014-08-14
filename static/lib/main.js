'use strict';

$(window).on('action:widgets.loaded', function() {
    $('.js-coub').coub();
});


$(window).on('action:composer.posts.reply', function() {
    $('.js-coub').coub();
});
