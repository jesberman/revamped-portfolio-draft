var clickValue = 0;

$(".cube-section-webdev-button").click(function(){
  if (clickValue===0){
    $(".cube-section-webdev-button").addClass("cube-section-webdev-button-click");
    $(".cube-section-webdev-text-field").addClass("cube-section-webdev-text-field-click");
    $(".cube-heading").addClass("cube-heading-click");
    clickValue=1;
  }
  
  else if (clickValue===1) {
    $(".cube-section-webdev-button").removeClass("cube-section-webdev-button-click");
    $(".cube-section-webdev-text-field").removeClass("cube-section-webdev-text-field-click");
    $(".cube-heading").removeClass("cube-heading-click");
    clickValue=0;
  }
});

var clickValue2 = 0;

$(".cube-section-des-button").click(function(){
  if (clickValue2===0){
    $(".cube-section-des-button").addClass("cube-section-des-button-click");
    $(".cube-section-des-text-field").addClass("cube-section-des-text-field-click");
    $(".cube-heading").addClass("cube-heading-click");
    clickValue2=1;
  }

  else if (clickValue2===1) {
    $(".cube-section-des-button").removeClass("cube-section-des-button-click");
    $(".cube-section-des-text-field").removeClass("cube-section-des-text-field-click");
    $(".cube-heading").removeClass("cube-heading-click");
    clickValue2=0;
  }
});
