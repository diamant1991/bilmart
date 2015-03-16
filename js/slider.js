var slideWidth=620;
var sliderTimer;
$(function(){
        
$('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
    
    $('.carousel-wrapper').hover(function(){
        clearInterval(sliderTimer);
    });
    $('#next_slide').click(function(){
        clearInterval(sliderTimer);
        nextSlide();
    });
    $('#prev_slide').click(function(){
        clearInterval(sliderTimer);
        prevSlide();
        
    });
});

function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slidewrapper').children().size())
    {
        currentSlide=0;   
    }
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},400).data('current',currentSlide);
}

function prevSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if(currentSlide<0)
    {
        currentSlide=$('.slidewrapper').children().size()-1;   
    }
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},400).data('current',currentSlide);
}