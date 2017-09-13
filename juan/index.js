$(document).ready(function() {

    var carousel = $('.carousel');
    carousel.carousel(
        {   
            indicators: true}
    );

    console.log('To pronto, carousel carregou');
    setInterval( ()=>{ 
        carousel.carousel('next')
        console.log("carousel working")
    } 
    ,3000)
});
