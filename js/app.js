$(document).ready(function () {

    $("body").velocity("fadeIn", 1000)

    $("a").mouseenter(function () {
        $(this)
            .velocity({
                translateY: "-5px",
            }, 400);
    });

    $("a").mouseleave(function () {
        $(this)
            .velocity({
                translateY: "0",
            }, 200);
    });

});
