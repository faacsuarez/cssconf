$(document).ready(inicio)

function inicio ()
{ 
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('nav').addClass('creo')
        }
        else {
            $('nav').removeClass('creo')
        }
    })
    $(".nav-toggle").click(function(){
        $("#menu").slideToggle();
        $(this).toggleClass("cruz");
    })

}