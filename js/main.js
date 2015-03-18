$( document ).ready(function() {
	
	$('input,textarea').focus(function(){
	  $(this).data('placeholder',$(this).attr('placeholder'))
	  $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	  $(this).attr('placeholder',$(this).data('placeholder'));
});
	
$(document).mouseup(function (e) {
    var container = $(".dropdown");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});
	$('.cabinet-link').click(function(){
      
  if ($(".dropdown").css("display") == "none") {
      $(".dropdown").show();
  }
  else {
    $(".dropdown").hide();
  } 
  })
	$('.tab-link').click(function() {
    $('.tab-link').removeClass('active');
    $(this).addClass('active');
  });
$('.sale-rent a').click(function() {
    $('.sale-rent a').removeClass('active');
    $(this).addClass('active');
  });
$('.list li').click(function() {
    $('.list li').removeClass('active');
    $(this).addClass('active');
  });

	
	
 $('.geo-link').click(function(){
   		if($('.modal').attr('visible')!='true'){
	   		$('.form-mask').fadeIn(400);
	        $('.modal').fadeIn(400);
	        $('.modal').attr({'visible':'true'})
	  	}
	  	else{
   			$('.form-mask').fadeOut(400);
        	$('.modal').fadeOut(400);
	        $('.modal').attr({'visible':'false'})
	  	}
	})
 $('.closed').click(function(){
   		$('.form-mask').fadeOut(400)
        $('.modal').fadeOut(400)
        $('.modal').attr({'visible':'false'})
	})


$('.form-mask').click(function(){
   		$('.form-mask').fadeOut(400);
        $('.modal').fadeOut(400);
        $('.modal').attr({'visible':'false'})
	})

// Select
$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown();

		$(this).addClass('active');

		$('.drop').find('li').click(function(){

			var selectResult = $(this).html();

			$(this).parent().parent().find('input').val(selectResult);

			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);


			dropBlock.slideUp();
		});

	} else {
		$(this).removeClass('active');
		dropBlock.slideUp();
	}

	return false;
});


});

   var top_show = 100; 
  var delay = 1300; 
  $(document).ready(function() {
    $(window).scroll(function () { 
      if ($(this).scrollTop() > top_show) $('.btn-top').fadeIn();
      else $('.btn-top').fadeOut();
    });

    $('.btn-top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });

  });

    
  