(function($) {
    "use strict";
    $.fn.simpleEQH = function() {
        var maxHeight = this.map(function(i, e) {
            return $(e).height();
        }).get();
        return this.height(Math.max.apply(this, maxHeight));
    };
}(jQuery));




$(window).ready(function() {

    if (window.matchMedia('(min-width: 992px)').matches) {
        $(".service-item").simpleEQH();

    };

});



$(function() {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

});