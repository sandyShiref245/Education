$(function() {

    "use strict";

    var wind = $(window);
    $('.carousel').carousel();

    $(".typed").typed({
        strings: ["Developers.", "Designers.", "Language.", "Music.", "Programmin.", "Elearning.",
            "More Fields"
        ],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        infinite: true,

        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });


    if ($(window).width() > 991) { // only for mobile devices
        $('#owl-offer-carousel .item').each(function(index) {
            if (index % 2 == 0) { // wrap by 2 items
                $(this).add($(this).next('.item')).wrapAll('<div class="item__col" />');
            }
        });
    }

    $('.owl-latest-carousel').owlCarousel({
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('#owl-posts, #owl-video').owlCarousel({
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                navRewind: true
            },
            600: {
                items: 1,
                navRewind: true
            },
            1000: {
                items: 1,
                navRewind: true
            }
        }
    });
    $('#owl-offer-carousel,#owl-offers').owlCarousel({
        margin: 10,
        slideBy: 2,
        rows: true,
        rowsCount: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }

        }
    });
    $('#owl-org-carousel').owlCarousel({
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }

        }
    });
    $('#owl-recommendedcourse-carousel,#owl-branch-carousel,#owl-availablecourse-carousel').owlCarousel({
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }

        }
    });

    $('#owl-blogs-carousel').owlCarousel({
        margin: 10,
        nav: true,
        //autoplay:true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }

        }
    });

    //scroll revel
    ScrollReveal().reveal('.filter-part', {
        delay: 130,
        duration: 500,
        reset: false

    });
    ScrollReveal().reveal('.latest-course', {
        delay: 260,
        duration: 500,
        reset: false
    });
    ScrollReveal().reveal('.best-offer', {
        delay: 320,
        duration: 500,
        reset: false
    });
    ScrollReveal().reveal('.organization', {
        delay: 575,
        duration: 500,
        reset: false
    });

    //drop down
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.parent-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.parent-menu').stop(true, true).delay(200).fadeOut(500);
    });


    $("#adv-btn").click(function() {
        $(".filter-nav").slideToggle(500);
    });
    //    if(!$('#searchtxt').val() == ''){
    //          $(".advn-search").show(400);
    //
    //    $(".adv-block .form-inline").removeClass("mt-5");
    //    $(".text-block").css("margin-top","0px");
    //
    //        $("#searchtxt").css("border-color","#ced4da")
    //   $("#alert-txt").hide();
    //
    //
    //   }else{
    //     $("#alert-txt").show();
    //       $("#searchtxt").css("border-color","red")
    //   }
    //
    //
    //
    //});

    /*accordine js*/
    var Accordion = function() {

        var
            toggleItems,
            items;

        var _init = function() {
            toggleItems = document.querySelectorAll('.accordion__itemTitleWrap');
            toggleItems = Array.prototype.slice.call(toggleItems);
            items = document.querySelectorAll('.accordion__item');
            items = Array.prototype.slice.call(items);

            _addEventHandlers();
            TweenLite.set(items, {
                visibility: 'visible'
            });
            TweenMax.staggerFrom(items, 0.9, {
                opacity: 0,
                x: -100,
                ease: Power2.easeOut
            }, 0.3)
        }

        var _addEventHandlers = function() {
            toggleItems.forEach(function(element, index) {
                element.addEventListener('click', _toggleItem, false);
            });
        }

        var _toggleItem = function() {
            var parent = this.parentNode;
            var content = parent.children[1];
            if (!parent.classList.contains('is-active')) {
                parent.classList.add('is-active');
                TweenLite.set(content, {
                    height: 'auto'
                })
                TweenLite.from(content, 0.6, {
                    height: 0,
                    immediateRender: false,
                    ease: Back.easeOut
                })

            } else {
                parent.classList.remove('is-active');
                TweenLite.to(content, 0.3, {
                    height: 0,
                    immediateRender: false,
                    ease: Power1.easeOut
                })
            }
        }

        return {
            init: _init
        }

    }();

    Accordion.init();

});
// filter check box
$('#customCheck3').click(function() {
    var $this = $(this);
    if ($this.is("#customCheck3")) {
        if ($("#customCheck3:checked").length > 0) {
            $(".all").prop({
                disabled: true,
                checked: false
            });
            $(".customCheck3").css("color", "#86e953");
            $(".course-option").slideUp(100);
        } else {
            $(".all").prop("disabled", false);
            $(".customCheck3").css("color", "#fff");
        }
    }
});

$('#customCheck1').click(function() {
    if ($("#customCheck1:checked").length > 0) {

        $(".course-option").slideDown(400);
    } else {
        $(".course-option").slideUp(300);
    }
});

/* =====================================================================

 inner New   js For inner pages

 ========================================================================*/
$(function() {
    $('#close-recom').click(function() {
        $('.recommended-courses, .mess-recommend').hide();
    });


    $(".posting .postDesign .card .card-footer a.like.btn").click(function() {

        $(this).css('color', '#28a745').click(function() {
            $(this).css('color', '#999')
        });

    });
    $('a.read-more-show').click(function(e) {
        $(this).next('.read-more-content').removeClass('hide');
        $(this).addClass('hide');
        e.preventDefault();

    });
    $('a.read-more-hide').click(function(e) {

        var p = $(this).parent('.read-more-content');
        p.addClass('hide');
        p.prev('.read-more-show').removeClass('hide');
        e.preventDefault();

    });


    $('.control-post a.btn').click(function() {
        $(this).next('.control-content').slideToggle();
    });
    $('#advsearch').click(function() {
        $(this).next('.advancedform').slideToggle();
        $(this).hide();

    });

    $('a.loadcomments').click(function() {
        $(this).next('.allcomments').show();
        $(this).hide();
    });

    $('a.loadreply').click(function() {
        $(this).next('.replies').show();
        $(this).hide();
    });

    $('a.reply').click(function() {
        $(this).next('.writeReply').show();
    });

    $('li#hide-post').click(function() {
        $('#first-post').hide();
    });

    $('[data-toggle="tooltip"]').tooltip();


    $('.buttons a.btn').click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('a#follow').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text('Following');

        } else {
            $(this).text('Follow');
        }
    });

    //course contents
    $('a.request').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text('Cancel Request');

        } else {
            $(this).text('Join Request');
        }
    });
    $('.course-sessions .collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function() {
        $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
    });
    $('a.preview').click(function() {
        $('table.exam-result').slideToggle(1000);
    });

    //for resultpage

    $(".main-check").change(function() {
        $(".sub-check").prop('checked', $(this).prop("checked"));
    });

    // new for course page
    $('a.session-info').click(function() {
        $('#session-info').toggle();
    });
    $('a.add-tag').click(function() {
        $('#form-add-tag').show();
    });
    $('a.add-word').click(function() {
        $('#form-add-word').show();
    });
    $(window).bind("load", function() {
        "use strict";
        // Loading Elements
        $(".loading #loader").fadeOut(5000, function() {
            //$('.menu').slideDown(2000);
            $(this).parent().fadeOut(5000);
            $(this).remove();

        });
    });


    $('a.close').click(function(e) {
        $('#up').hide();
    });
    $('a#assignOffer').click(function(e) {
        $('.mention-offer').show();
    });


    $(".media .txtpost textarea").focus(function() {
        $(this).attr('rows', "3");
        $('.hide-tax').show();
        //return false;
    });
    var mediaElements = document.querySelectorAll('video, audio');

    for (var i = 0, total = mediaElements.length; i < total; i++) {
        new MediaElementPlayer(mediaElements[i], {
            features: ['prevtrack', 'playpause', 'nexttrack', 'current', 'progress', 'duration', 'volume', 'playlist', 'shuffle', 'loop', 'fullscreen']
        });
    }


    //roles
    $('a.org-role-item').click(function() {
        $('table#org').toggle();
    });
    $('a.course-role-item').click(function() {
        $('table#courses').toggle();
    });
    $('a.offer-role-item').click(function() {
        $('table#offer').toggle();
    });

    $('a.g-details').click(function() {
        $('.details-of-group').toggle();
    });
    $('a.admin-details').click(function() {
        $('tr.roles').toggle();
    });









    ////countdown
    //var countdown=setInterval(function(){
    //    var counter=parseInt($('span.countdown').html());
    //    if(counter!==0){
    //        $('span.countdown').html(counter - 1);
    //    }else{
    //        clearInterval(countdown);
    //        $('a.head > p').html("0");
    //    }
    //},60000); // every second  do something
    //
    //console.log(parseInt($('.countdown').html()));

});
//setting
$(document).ready(function() {

    $('a.add').click(function() {
        $('.add-submain').fadeToggle(1000);
    });
    var table = $('.all-setting .table').DataTable({
        rowReorder: true
    });

});

//


function myFunction() {
    var dots = document.getElementById("dots ");
    var moreText = document.getElementById("more ");
    var btnText = document.getElementById("myBtn ");

    if (dots.style.display === "none ") {
        dots.style.display = "inline ";
        btnText.innerHTML = "Read more ";
        moreText.style.display = "none ";
    } else {
        dots.style.display = "none ";
        btnText.innerHTML = "Read less ";
        moreText.style.display = "inline ";
    }
}