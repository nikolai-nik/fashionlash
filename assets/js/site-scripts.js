(function($){

	$( document ).ready( function() {
		new WOW().init();


		$("#lightgalery").lightGallery({
		});

		$('#left__lanuage__menu-link').click(function(){
			if($('#left__lanuage__menu-look').css("display")=="flex"){
				$('#left__lanuage__menu-look').css("display", "none");
			}
			else{
				$('#left__lanuage__menu-look').css("display", "flex");
			}
		});


		$('#left__usd__menu-link').click(function(){
			if($('#left__usd__menu-look').css("display")=="flex"){
				$('#left__usd__menu-look').css("display", "none");
			}
			else{
				$('#left__usd__menu-look').css("display", "flex");
			}
		});

		
		$('#main-menu__link').click(function(){
			if($('#main-menu__look').css("display")=="flex"){
				$('#main-menu__look').css("display", "none");
			}
			else{
				$('#main-menu__look').css("display", "flex");
			}
		});


		$( '.main-menu__icon' ).on( 'click', function() {
			var $this = $( this ),
				$parent = $this.parent( '.main-menu' );

			$parent.toggleClass( 'menu_state_open' );
		});

		
		$('#menu-color-link').click(function(){
			if($('#menu-color-look').css("display")=="flex"){
				$('#menu-color-look').css("display", "none");
			}
			else{
				$('#menu-color-look').css("display", "flex");
			}
		});

		
		
		///////// knopka button -top
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.ui-to-top').fadeIn();
			} 
			else {
				$('.ui-to-top').fadeOut();
			}
		});
			 
		$('.ui-to-top').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		////////////


			


	

			//////////код выравнивания блоков
		$('www').each(function(){
        var highestBox = 0;
        $('.www ', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
       	$('.lwww ',this).height(highestBox);
   		});
			//////////////////////slider
		var slideNow = 1;
		var slideCount = $('#slidewrapper').children().length;
		var slideInterval = 6000;
		var navBtnId = 0;
		var translateWidth = 0;

		$(document).ready(function() {
		    var switchInterval = setInterval(nextSlide, slideInterval);

		    $('#viewport').hover(function() {
		        clearInterval(switchInterval);
		    }, function() {
		        switchInterval = setInterval(nextSlide, slideInterval);
		    });

		    $('#next-btn').click(function() {
		        nextSlide();
		    });

		    $('#prev-btn').click(function() {
		        prevSlide();
		    });

		    $('.slide-nav-btn').click(function() {
		        navBtnId = $(this).index();

		        if (navBtnId + 1 != slideNow) {
		            translateWidth = -$('#viewport').width() * (navBtnId);
		            $('#slidewrapper').css({
		                'transform': 'translate(' + translateWidth + 'px, 0)',
		                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
		                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		            });
		            slideNow = navBtnId + 1;
		        }
		    });
		});


		function nextSlide() {
		    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
		        $('#slidewrapper').css('transform', 'translate(0, 0)');
		        slideNow = 1;
		    } else {
		        translateWidth = -$('#viewport').width() * (slideNow);
		        $('#slidewrapper').css({
		            'transform': 'translate(' + translateWidth + 'px, 0)',
		            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
		            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		        });
		        slideNow++;
		    }
		}

		function prevSlide() {
		    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
		        translateWidth = -$('#viewport').width() * (slideCount - 1);
		        $('#slidewrapper').css({
		            'transform': 'translate(' + translateWidth + 'px, 0)',
		            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
		            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		        });
		        slideNow = slideCount;
		    } else {
		        translateWidth = -$('#viewport').width() * (slideNow - 2);
		        $('#slidewrapper').css({
		            'transform': 'translate(' + translateWidth + 'px, 0)',
		            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
		            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		        });
		        slideNow--;
		    }
		}
		////////////////slider
		



		$('#thumbs img').click(function(){
		    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
		    $('#description').html($(this).attr('alt'));
		});
		
		 //$('.spritespin').spritespin({
		     
		     // source: SpriteSpin.sourceArray('/assets/images/item_{frame}.png', {
		       // frame: [1,34],
		       // digits: 3
		     // }),
		     // width: 480,
		     // height: 327,
		     // sense: -1
		   //});




		  	////////////// //scripr exchange img
		   $('.js-hover').hover(function() {
			var _this = this,
				images = _this.getAttribute('data').split(','),
				counter = 0;
 
			this.setAttribute('data-src', this.src);
			_this.timer = setInterval(function(){
				if(counter > images.length) {
					counter = 0;
				}
				if (images[counter] != undefined) {
					_this.src = images[counter];
				} 
	 
				counter++;
			}, 100);
 
			}, function() {
				this.src = this.getAttribute('data-src');
				clearInterval(this.timer);
			});
			/////////////////////////////////



 			//////////////counter like
			$('.activities .likes').on( 'click', function(){

			var $this = $( this ),
				$val  = $( '.value', $this ),
				initVal = +$this.data('init');

				$val.html(initVal++);

				$this.data('init', initVal);

			return false;

			} )
			///////////////////

			///////////counter plus/minus
			$(document).ready(function() {
	            $('.minus').click(function () {
	                var $input = $(this).parent().find('input');
	                var count = parseInt($input.val()) - 1;
	                count = count < 1 ? 1 : count;
	                $input.val(count);
	                $input.change();
	                return false;
	            });
	            $('.plus').click(function () {
	                var $input = $(this).parent().find('input');
	                $input.val(parseInt($input.val()) + 1);
	                $input.change();
	                return false;
	            });
        	});
			////////////////////////////


	});// end ready

})( jQuery );
