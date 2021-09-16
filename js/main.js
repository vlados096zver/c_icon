
$(document).ready(function(){

	$('.button-wishlist').on('click', function(){
		$('.wishlist__link').addClass('wishlist__link--active');
	})
	
	setTimeout(function() { $('.newsletter-popup').addClass('active'); }, 3000);

	$('.newsletter-popup__close').on('click', function(){
		$('.newsletter-popup').removeClass('active');
	})

	   new Swiper('.swiper-gallery', {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        swipe: true
   
    });

	new Swiper('.thumbnail__slider', {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        swipe: true
   
    });


})