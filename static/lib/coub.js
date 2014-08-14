;(function ($) {
    'use strict';

    function setUp($el) {
        var width = $el.data('width') || '512',
            height = $el.data('height') || '384',
            id = $el.data('coub-id'),
            parameters = $el.data('parameters') || 'muted=false&autostart=false&originalSize=false&hideTopBar=false&startWithHD=false';

        $el.html('<iframe class="coub" src="http://coub.com/embed/' + id + '?' + parameters + '></iframe>');
        $el.prop('width', width);
        $el.prop('height', height);
        $el.prop('allowfullscreen', 'true');
        $el.prop('frameborder', '0');
    }

    $.fn.coub = function () {
        return this.each(function () {
            var $el = $(this).css('cursor', 'pointer');
            setUp($el);
        });
    };

}(jQuery));
