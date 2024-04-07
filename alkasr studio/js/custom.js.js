
$(document).ready(function(){
     
     function search(){

          var title=$("#search").val();

          if(title!=""){
            $("#result").html("<img alt="ajax search" src='2.jpg'/>");
             $.ajax({
                type:"post",
                url:"search.php",
                data:"title="+title,
                success:function(data){
                    $("#result").html(data);
                    $("#search").val("");
                 }
              });
          }
          

         
     }

      $("#button").click(function(){
           search();
      });

      $('#search').keyup(function(e) {
         if(e.keyCode == 13) {
            search();
          }
      });
});















		//تبع فتح الديف المطوله 
		$(document).ready(function(){
			$(".btn").click(function(){
			$(".read-more").slideToggle("slow");
			});
		});





        (function($) {
            "use strict";
            
            /* ..............................................
               Loader 
               ................................................. */
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('#preloader').delay(550).fadeOut('slow');
                $('body').delay(450).css({
                    'overflow': 'visible'
                });
            });
        
            /* ..............................................
               Fixed Menu
               ................................................. */
        
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 50) {
                    $('.main-header').addClass('fixed-menu');
                } else {
                    $('.main-header').removeClass('fixed-menu');
                }
            });
        
            /* ..............................................
               Gallery
               ................................................. */
        
            $('#slides-shop').superslides({
                inherit_width_from: '.cover-slides',
                inherit_height_from: '.cover-slides',
                play: 5000,
                animation: 'fade',
            });
        
            $(".cover-slides ul li").append("<div class='overlay-background'></div>");
        
            /* ..............................................
               Map Full
               ................................................. */
        
            $(document).ready(function() {
                $(window).on('scroll', function() {
                    if ($(this).scrollTop() > 100) {
                        $('#back-to-top').fadeIn();
                    } else {
                        $('#back-to-top').fadeOut();
                    }
                });
                $('#back-to-top').click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });
            });
        
            /* ..............................................
               Special Menu
               ................................................. */
        
            var Container = $('.container');
            Container.imagesLoaded(function() {
                var portfolio = $('.special-menu');
                portfolio.on('click', 'button', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                var $grid = $('.special-list').isotope({
                    itemSelector: '.special-grid'
                });
            });
            /* ..............................................
               Offer Box
               ................................................. */
        
            $('.offer-box').inewsticker({
                speed: 3000,
                effect: 'fade',
                dir: 'ltr',
                font_size: 13,
                color: '#ffffff',
                font_family: 'Montserrat, sans-serif',
                delay_after: 1000
            });
        
            /* ..............................................
               Tooltip
               ................................................. */
        
            $(document).ready(function() {
                $('[data-toggle="tooltip"]').tooltip();
            });
        
            /* ..............................................
               Owl Carousel Instagram Feed
               ................................................. */
        
            $('.main-instagram').owlCarousel({
                loop: true,
                margin: 0,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
                responsive: {
                    0: {
                        items: 2,
                        nav: true
                    },
                    600: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: true
                    }
                }
            });
        
            /* ..............................................
               Featured Products
               ................................................. */
        
            $('.featured-products-box').owlCarousel({
                loop: true,
                margin: 15,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: true
                    }
                }
            });
        
            /* ..............................................
               Scroll
               ................................................. */
        
            $(document).ready(function() {
                $(window).on('scroll', function() {
                    if ($(this).scrollTop() > 100) {
                        $('#back-to-top').fadeIn();
                    } else {
                        $('#back-to-top').fadeOut();
                    }
                });
                $('#back-to-top').click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });
            });
        
        
            /* ..............................................
               Slider Range
               ................................................. */
        
            $(function() {
                $("#slider-range").slider({
                    range: true,
                    min: 0,
                    max: 4000,
                    values: [1000, 3000],
                    slide: function(event, ui) {
                        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                    }
                });
                $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                    " - $" + $("#slider-range").slider("values", 1));
            });
        
            /* ..............................................
               NiceScroll
               ................................................. */
        
            $(".brand-box").niceScroll({
                cursorcolor: "#9b9b9c",
            });
            
            
        }(jQuery));




		// $(document).ready(function(){
		// 	$(".btn1").click(function(){
		// 	$(".special-list").slideToggle("slow");
		// 	});
		// }); 


		
		
		
		










           

/******************************************
    File Name: custom.js
*******************************************/

"use strict";

/**== wow animation ==**/

new WOW().init();

/**== loader js ==*/

$(window).load(function() {
    $(".bg_load").fadeOut("slow");
})

/**== Menu js ==**/

$("#navbar_menu").menumaker({
	title: "Menu",
	format: "multitoggle"
});

/** counter js **/

    $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

/** progress_bar js **/
	
	 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });
	
/** Casestudies Tab_bar js **/	
	
	$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/** google_map js **/

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(40.712775,-74.005973),
    zoom:18,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

/**===== Slider =====**/

var tpj = jQuery;
var revapi4;
tpj(document).ready(function() {
    if (tpj("#rev_slider_4_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_4_1");
    } else {
        revapi4 = tpj("#rev_slider_4_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 7000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    style: "metis",
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "80%"
            },
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [700, 700, 500, 400],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});

/**===== End slider =====**/
	
	
/** header fixed js **/

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('.header_fixed_on_scroll').addClass('fixed-header');
    }
    else {
       $('.header_fixed_on_scroll').removeClass('fixed-header');
    }
});







	
	 














 











 
 
 

 













 
 
 
 
 













