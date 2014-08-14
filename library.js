(function(module) {
	"use strict";

	var YoutubeLite = {},
		embed = '<div class="js-coub" data-coub-id="$1"></div>';


    YoutubeLite.parse = function(postContent, callback) {
        var	regularUrl = /<a href="(?:https?:\/\/)?(?:www\.)?coub\.com\/view\/(.+)">.+<\/a>/g;

        if (postContent.match(regularUrl)) {
            postContent = postContent.replace(regularUrl, embed);
        }

        callback(null, postContent);
    };

	module.exports = YoutubeLite;
}(module));
