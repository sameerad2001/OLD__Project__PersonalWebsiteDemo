// Java Script 
$(document).ready(function() {

    $(document).mousemove(function cursor(e) {

        const pageY = e.pageY + "px";
        $(".cursor").css("top", pageY);

        const pageX = e.pageX + "px";
        $(".cursor").css("left", pageX);

    });

    let links = $("a");
    let mouseCursor = $(".cursor");

    $.each(links, function(index, link) {

        $(this).mouseover(function() {
            mouseCursor.addClass("grow");

        });

        $(this).mouseleave(function() {
            mouseCursor.removeClass("grow");
        });
    });

});

// Test