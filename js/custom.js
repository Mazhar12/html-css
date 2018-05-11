/* global $, alert, console */

$(function () {
	'use strict';

	// adjust header height 
    
    var myheader = $('.header');
	myheader.height($(window).height());

    
    //bx slider list item
    
	$(window).resize(function () {
	    myheader.height($(window).height());
	});
    

	// links active class 
    
	$('.links li a').hover(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
	});

	//bx slider list item
	$('.bxslider').each(function () {
		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
	});

	// triggrr the bx slider

	$('.bxslider').bxSlider({
        speed: 800,
        pager: false
          
	});

	//smooth scroll to div

	$('.links li a').click(function () {
		$('html, body').animate({
            scrollTop: $('#' +  $(this).data('value')).offset().top
		}, 2000);
		
	});


	// our auto slider



(function autoSlider()
    {
        $(".slider .active").delay(4000).fadeOut(1000,function()
        {
            $(this).removeClass("active");
            var next = ($(this).index() + 1 ) % 4;
            $(".slider div").eq(next).addClass("active").fadeIn();
             autoSlider();
        });   
    })();﻿


    /*
    (function autoslider() {
        
        $('.slider .active').each(function () {
            
      
        	if (!$(this).is(':last-child')) {
                
        		$(this).delay(4000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoslider();
        		});
                
        	}
        	else {
        		$(this).delay(4000).fadeOut(1000, function () {
                     
                     $(this).removeClass('active');

                     $('.slider div').eq(0).addClass('active').fadeIn();
                     
                     autoslider();
        		});
        	}
            
        });

    }());
*/
    //trigger nice scroll

  $("body").niceScroll({
cursorcolor:"#1ABC9C",
cursorwidth:"16px"
});

});