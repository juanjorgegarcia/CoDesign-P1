$(document).ready(function() {

    $(".button-collapse").sideNav();
    
    var slider = $('.slider').slider();
    slider.slider(
        {
            height:500,
            interval:3000,
        }
    )
      
});
