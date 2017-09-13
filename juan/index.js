$(document).ready(function() {

    var carousel = $('.carousel');
    carousel.carousel(
        { fullWidth: true }
    );

    console.log('To pronto, carousel carregou');
    setInterval( ()=>{ 
        carousel.carousel('next')
        console.log("tofuncionandoporra")
    } 
    ,3500)
});
