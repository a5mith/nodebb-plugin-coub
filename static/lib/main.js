"use strict";

$(window).on('action:widgets.loaded', function() {
    $('.js-lazyCoub').lazyCoub();
});


$(window).on('action:composer.posts.reply', function() {
    $('.js-lazyCoub').lazyCoub();
});
