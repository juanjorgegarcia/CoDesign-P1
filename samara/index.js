$(document).ready(function() {

    $(".button-collapse").sideNav({
        closeOnClick: true,
    });
    
    var slider = $('.slider').slider(
        {interval:3000,
        }
    );
    $('.parallax').parallax();  
});

