jQuery(".tips-link").click(function(){
	jQuery('#wrap').removeClass();	
	jQuery('#wrap').addClass('tips');
});
jQuery(".items-link").click(function(){	
	jQuery('#wrap').removeClass();
	jQuery('#wrap').addClass('items');
});

jQuery('#side-nav li a').on('click', function () {
		jQuery(document).on("scroll");  
		jQuery('a').each(function () {
			 jQuery(this).removeClass('active');
		})
		jQuery(this).addClass('active');
});


jQuery(document).ready(function(){ 
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrollup').fadeIn();
		} else {
			jQuery('.scrollup').fadeOut();
		}
	});
	jQuery('.scrollup').click(function(){
		jQuery("html, body").animate({scrollTop: 0 }, 700);
		return false;
	});
});

