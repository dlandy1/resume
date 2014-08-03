$(document).ready(function(){
	scrol('a');
	scrol('b');
	scrol('c');
	opener();
	apples();
});
var opener =function() {
	$('#abou').on("click", function(){
		$('html,body').animate({ scrollTop: $('#a').offset().top }, 'slow');
	$('#one-subj').fadeOut(1000);
    $( "#abou" ).animate({
    width: "98%",
    marginTop: "25px",
    marginLeft: "0px",
    padding: "0px",
    paddingTop: "10px",
  }, 1500 );
     $( "#a" ).animate({
    	paddingTop: "0px",
    },1500);
    $( "#abou p" ).animate({
    	fontSize: "20px",
    },1500);
    $( "#one" ).animate({
    padding: "5px",
    height: "680px",
     width: "100%",
  }, 1500,
  function() {
	$('.img').show(1000)
	$('.bod').show(1200);
	});
		$('#b').on("click",function(){
    $('.img').hide();
    $('.bod').hide();
     $( "#one" ).animate({
      padding: "0px",
      height: "165px",
       width: "70%",
    }, 1,
    function(){
      $( "#abou p" ).animate({
      fontSize: "12px",
  }, 800 ,function(){
    $( "#abou" ).animate({
      width: "65px",
      marginTop: "1px",
      marginLeft: "10px",
      padding: "3px",
    },1500);
    $( "#a" ).animate({
      paddingTop: "100px",
    },1500);
    $('#one-subj').fadeIn(1000);
  })
    })
  });
  })
};

var apples =function() {
	$('#port').on("click", function(){
	$('#two-subj').fadeOut(1000);
    $( "#port" ).animate({
    width: "98%",
    marginTop: "25px",
    marginLeft: "0px",
    padding: "0px",
    paddingTop: "10px",
  }, 1500 );
     $( "#b" ).animate({
    	paddingTop: "0px",
    },1500);
    $( "#port p" ).animate({
    	fontSize: "20px",
    },1500);
    $( "#two" ).animate({
    marginBottom: "150px",
    padding: "5px",
    height: "100%",
     width: "100%",
  }, 1500,
  function() {
	$('.proj').show(1000);
  $('html,body').animate({ scrollTop: $('#b').offset().top }, 'slow');
	});
		})
  $('#a').on("click",function(){
    $('.proj').hide();
     $( "#two" ).animate({
      marginBottom: "0px",
      padding: "0px",
      height: "165px",
       width: "70%",
    }, 1,
    function(){
      $( "#port p" ).animate({
      fontSize: "12px",
  }, 800 ,function(){
    $( "#port" ).animate({
      width: "65px",
      marginTop: "1px",
      marginLeft: "100px",
      padding: "3px",
    },1500);
    $( "#b" ).animate({
      paddingTop: "80px",
    },1500);
    $('#two-subj').fadeIn(1000);
  })
    });
  });
};

var scrol = function(parameter){
	$('.'+ parameter).on("click", function(){
	$('html,body').animate({ scrollTop: $('#' + parameter).offset().top }, 'slow');
	})
};