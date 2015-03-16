jQuery("#slider").slider({
  min: 0,
  max: 2500,
  values: [0,2500],
  range: true,
  stop: function(event, ui) {
    jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
    jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});
