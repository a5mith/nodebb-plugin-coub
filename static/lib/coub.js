;(function ($) {
    'use strict';

    function setUp($el) {
        var width = $el.data('width') || '512',
            height = $el.data('height') || '384',
            id = $el.data('coub-id'),
            parameters = $el.data('parameters') || 'muted=false&autostart=false&originalSize=false&hideTopBar=false&startWithHD=false';

        $el.html('<iframe class="coub"' +
            ' width=' + width +
            ' height=' + height +
            ' allowfullscreen="true"' +
            ' frameborder="0"' +
            ' src="http://coub.com/embed/' + id + '?' + parameters + '"></iframe>');
    }

    $.fn.coub = function () {
        return this.each(function () {
            var $el = $(this).css('cursor', 'pointer');
            setUp($el);
        });
    };

}(jQuery));
