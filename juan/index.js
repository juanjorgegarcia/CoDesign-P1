$(document).ready(function() {

<<<<<<< HEAD
    $(".button-collapse").sideNav();
    
    var slider = $('.slider').slider(
        {interval:3000,
        }
    );
    $('.parallax').parallax();  
});
=======
    $(".button-collapse").sideNav({
        closeOnClick: true,

    });
    
    var slider = $('.slider').slider();
    slider.slider({      
        interval:3000,
    })
    
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
});


>>>>>>> 904c93c3a25904dec22827d92e19e0d8ec1e88af
