$(document).ready(function() {

    $(".button-collapse").sideNav();
    
    var slider = $('.slider').slider(
        {interval:3000,
        }
    );
    $('.parallax').parallax();  
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});
