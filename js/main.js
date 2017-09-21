$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navbar-inverse").css("background" , "blue");
        }
  
        else{
            $(".navbar-inverse").css("background" , "#333");  	
        }
    })
  })