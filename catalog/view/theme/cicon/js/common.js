$(document).ready(function(){
    $('.product-layout .product-thumb .caption').equalHeights();

    $("#button__size, #size__popup-close").on('click',function(){
        $('.size__popup').toggleClass('active');
    });


     $(".mobile__menu img").on('click',function(){   
        $('.header__nav').toggleClass("active");
    });

     $(".header__nav .nav__items .nav__item-dropdown i.i-open").on('click',function(){   
        $('#menu').toggleClass("active");
    });

    // (КОНЕЦ) Кнопка наверх .........................................

  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('#toTop').fadeIn();
      } else {
     $('#toTop').fadeOut();
    }
    });
    $('#toTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
 

// Кнопка наверх .........................................

})

$(document).ready(function() {


   function accordionInit (idAccordion){
        const accordion = document.querySelector(idAccordion);
        if(accordion != null) {
           accordion.addEventListener('click', function(e) {
            const items = document.querySelectorAll(`${idAccordion} .panel`);
            const target = e.target;
            Array.from(items).forEach(item => {
                item.classList.remove('panel-open');
            });
            if(target.classList.contains("collapsed")){
                target.parentNode.classList.add("panel-open");
            }      
        }); 

        }
        
    }

    accordionInit("#accordion1");
    accordionInit("#accordion2"); 

   

});






$(document).ready(function() {
    if($(".simple-content")){
        $("h1").addClass("simple_h1");
    }
});