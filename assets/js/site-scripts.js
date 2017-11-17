(function($){

	$( document ).ready( function() {
		new WOW().init();


		$("#lightgalery").lightGallery({});

		//////////////MEGAMENU
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
		///////////////

		
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



		/////////галерея мини 
		$('#thumbs img').click(function(){
		    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
		    $('#description').html($(this).attr('alt'));
		});
		////////////


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

			/////////////360view
		 $('.spritespin').spritespin({
          // generate an array of image urls.
          // this is a helper function that takes a {frame} placeholder
          source: SpriteSpin.sourceArray('./assets/images/360view/item_{frame}.png', {
            // this ramge of numbers is interpolated into the {frame} placeholder
            frame: [1,35],
            // the frame placeholder will be padded with leading '0' up to the number of 'digits'
            digits: 2
          }),
          // Specify the display width and height of the frame.
          // Optionally the size of the container can be defined with CSS.
          width: 400,
          height: 400,
          // Sense controls the direction and speed of the animation for mouse/touch interactions.
          // Here a negative value is chosen to invert the rotation, so the animation 'follows' the drag direction.
          // Values towards 0 will slow the animation down.
          sense: -1
        });

		
		////////////togle menu
		var o = $('.toggle');
			$(document).ready(function () {
				$('.toggle').click(function (e) {
					e.preventDefault();
					var tmp = $(this);
					o.each(function () {
						if ($(this).hasClass('active') && !$(this).is(tmp)) {
							$(this).parent().find('.toggle_cont').slideToggle();
							$(this).removeClass('active');
						}
					});
					$(this).toggleClass('active');
					$(this).parent().find('.toggle_cont').slideToggle();
		});
		$(document).on('click touchstart', function (e) {
			var container = $(".toggle-wrap");
			var removeBtnWrap = $('#cart .btn-remove-wrap');
			if (!container.is(e.target) && container.has(e.target).length === 0 && container.find('.toggle').hasClass('active')) { 
				container.find('.active').toggleClass('active').parent().find('.toggle_cont').slideToggle();
				if (removeBtnWrap.length > 0 ) {
					removeBtnWrap.fadeOut();
					}
				}
			});
		});
		///////////////////////

		
		
	});// end ready

})( jQuery );
