jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	
	

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	

	$('.search i').click(function(event) {
		//alert();
		$(this).parents().find('.search-form').toggleClass('expand');
	});
	

	 $('.navbar .submenu > a').click(function(){
            location.href = this.href;
      });

	$('.navbar li.submenu i').click(function (){
		$(this).parents().find('.dropdown-menu').slideToggle();
	});
	$("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
	
	$('.features, .service-item').each(function(){  
            
            var highestBox = 0;
            $('.feature-wrap, .services-wrap', this).each(function(){
            
                if($(this).height() > highestBox) 
                   highestBox = $(this).height(); 
            });  
            
            $('.feature-wrap, .services-wrap', this).height(highestBox);
      });
	// $('.list-group>a').on('click', function(e) {
	// 	e.preventDefault();
	// 	if ($(window).width() < 768 ) {
	// 	$('.list-group').toggle(200);
	// 	}	
	// $('.list-group>a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');

	// var $target = $(this.hash), target = this.hash;
	// var targetOffset = $target.offset().top;
	// 	 $("html, body")
	//       .animate({
	//         scrollTop: targetOffset-59
	//       }, 700);
	 
	// });
});