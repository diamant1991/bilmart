//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
    var carusel = $(this).parents('.last-trends');
    right_carusel(carusel);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
    var carusel = $(this).parents('.last-trends');
    left_carusel(carusel);
    return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.model-slide').outerWidth();
   $(carusel).find(".slide-items .model-slide").eq(-1).clone().prependTo($(carusel).find(".slide-items")); 
   $(carusel).find(".slide-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".slide-items .model-slide").eq(-1).remove();    
   $(carusel).find(".slide-items").animate({left: "0px"}, 350); 
    
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.model-slide').outerWidth();
   $(carusel).find(".slide-items").animate({left: "-"+ block_width +"px"}, 350, function(){
      $(carusel).find(".slide-items .model-slide").eq(0).clone().appendTo($(carusel).find(".slide-items")); 
      $(carusel).find(".slide-items .model-slide").eq(0).remove(); 
      $(carusel).find(".slide-items").css({"left":"0px"}); 
   }); 
}


//Обработка клика на стрелку вправо
$(document).on('click', ".mini-slide-right",function(){ 
    var carusel_2 = $(this).parents('.mini-slider');
    right_carusel_2(carusel_2);
    return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".mini-slide-left",function(){ 
    var carusel_2 = $(this).parents('.mini-slider');
    left_carusel_2(carusel_2);
    return false;
});
function left_carusel_2(carusel_2){
   var block_width_2 = $(carusel_2).find('.mini-slide-block').outerWidth();
   $(carusel_2).find(".mini-slide-items .mini-slide-block").eq(-1).clone().prependTo($(carusel_2).find(".mini-slide-items")); 
   $(carusel_2).find(".mini-slide-items").css({"left":"-"+block_width_2+"px"});
   $(carusel_2).find(".mini-slide-items .mini-slide-block").eq(-1).remove();    
   $(carusel_2).find(".mini-slide-items").animate({left: "0px"}, 200); 
    
}
function right_carusel_2(carusel_2){
   var block_width_2 = $(carusel_2).find('.mini-slide-block').outerWidth();
   $(carusel_2).find(".mini-slide-items").animate({left: "-"+ block_width_2 +"px"}, 200, function(){
      $(carusel_2).find(".mini-slide-items .mini-slide-block").eq(0).clone().appendTo($(carusel_2).find(".mini-slide-items")); 
      $(carusel_2).find(".mini-slide-items .mini-slide-block").eq(0).remove(); 
      $(carusel_2).find(".mini-slide-items").css({"left":"0px"}); 
   }); 
}
