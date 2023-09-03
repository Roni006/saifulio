$(function(){


// Mobile-menu-togggle
$(".mobile-menu-toggle").click(function(){
  $(".mobile-menu").slideToggle();
});


$(".mobile-menu ul li.has-submenu").click(function(){
  $(this).children().slideToggle();
});




new WOW().init();



// video-popup/magnificPopup();
$('.video-btn a').magnificPopup({
        type: 'iframe',
        
        iframe: {
            patterns: {
              youtube: {
                index: 'youtube.com/', 
        
          
                src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
              },
              
          
            },
          
          }
     
    });



    $('.counter').counterUp({
      delay: 10,
      time: 1500
  });


  // Feedback-slider
  // $(document).ready(function(){
    $('.fd-slider').slick({
      slidesToShow: 3,
      arrows: false,
      centerMode: true,
      responsive:[
        {
          breakpoint: 1580,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          }
        },
       {
        breakpoint: 1180,
        settings: {
          slidesToShow: 1,
        }
       }
      ]
    
  });

  // });





});




