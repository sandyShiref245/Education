$(document).ready(function () {
    $("aside").on("click", "span", function () {
        var x = $("aside").css("right");
        if (x == '0px') {
            $("aside").animate({
                right: '-250px',
            }, 400)
        } else {
            $("aside").animate({
                right: '0',
            }, 400)
        }
    })
});