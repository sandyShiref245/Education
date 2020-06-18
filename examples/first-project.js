

$(document).ready(function () {
  $("body").css("paddingTop", $("nav").outerHeight())
  $("article").height($(window).height() - $("nav").outerHeight());

  $("nav .container .menu>ul>li>a").click(function (e) {
    e.preventDefault();
    console.log($("#" + $(this).data("s")).offset().top);
    $('html , body').animate({
      'scrollTop': $("#" + $(this).data("s")).offset().top - $("nav").outerHeight()

    }, 1000);
    $(this).css({
      "backgroundColor": "#29ca8e",
      "color": "#fff"
    }).parentsUntil("ul").siblings().find("a").css({
      "backgroundColor": "",
      "color": "#636363"
    })
  });

});