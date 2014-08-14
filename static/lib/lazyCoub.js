// <iframe src="http://coub.com/embed/2w4wi?"
//
//
// width="512"
// height="384"></iframe>

;(function ($) {
    'use strict';

    function setUp($el) {
        var width = $el.data('width') || '512',
            height = $el.data('height') || '384',
            id = $el.data('coub-id'),
            paddingTop = 0,
            youtubeParameters = $el.data('parameters') || 'muted=false&autostart=false&originalSize=false&hideTopBar=false&startWithHD=false';

        if (typeof width === 'undefined' || typeof height === 'undefined') {
          height = 0;
          width = '100%';
          aspectRatio = (ratio.split(":")[1] / ratio.split(":")[0]) * 100;
          paddingTop = aspectRatio + '%';
        }

        $el.css({
            'position': 'relative',
            'height': height,
            'width': width,
            'padding-top': paddingTop,
            'cursor': 'pointer',
        })
            .html('<p id="lazyCoub-title-' + id + '" class="lazyCoub-title"></p><div class="lazyCoub-button"></div>')
            .addClass('lazyCoub-image-loaded');

        // $.getJSON('https://gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json', function (data) {
        //     $('#lazyCoub-title-' + id).text(data.entry.title.$t);
        // });

        $el.on('click', function (e) {
            e.preventDefault();
            if (!$el.hasClass('lazyCoub-video-loaded') && $el.hasClass('lazyCoub-image-loaded')) {
                $el.html('<iframe class="lazycoub" src="http://coub.com/embed/' + id + ' allowfullscreen="true" frameborder="0"></iframe>')
                    .removeClass('lazyCoub-image-loaded')
                    .removeClass('js-lazyCoub')
                    .addClass('lazyCoub-video-loaded');
            }
        });

    }

    $.fn.lazyCoub = function () {
        return this.each(function () {
            var $el = $(this).css('cursor', 'pointer');
            setUp($el);
        });
    };

}(jQuery));
