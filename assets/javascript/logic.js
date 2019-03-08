//***********Code used to control the fade-in effect for certain sections**************
window.onscroll = function () { test() };

function test() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    $("header").addClass("header-zoom");
    $(".nav-list").addClass("nav-list-zoom");
    $("#logo").addClass("logo-zoom");

    $("#what-we-do-top-section").fadeIn(3000);
    $("#what-we-do-table").fadeIn(3000);
    $("#scroll-up-button").fadeIn(3000);
  }
  if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
    $("#ending-div-heading").fadeIn(1000);
    $("#ending-div-subheading").fadeIn(1000);
    $(".ending-div-text").fadeIn(1000);
  }
  if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600) {
    $("#ending-div-heading-a").fadeIn(3000);
    $("#ending-div-heading-b").fadeIn(3000);

    $("#ending-div-subheading-a").fadeIn(3000);
    $(".ending-div-text-a").fadeIn(3000);
  }

  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    $("#cube-section").fadeIn(3000);

  }
  if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
    $("#cube-section2").fadeIn(3000);

  }
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    $("#ending-div-heading-c").fadeIn(4000);
    $("#ending-div-heading-c").fadeIn(5000);

    $("#ending-div-subheading-c").fadeIn(4000);
    $(".ending-div-text-c").fadeIn(4000);
  }
}
//***********************************************************************/

//***********Code used to give functionality to the "scroll-up-text" button */
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("#scroll-up-text").on('click', function (event) {
    // Prevent default anchor click behavior
    event.preventDefault();
    console.log(hash);

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Store hash
      var hash = this.hash;
      console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1700, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//*********************************************** */
// $("#cube-button").click(function(){
//   $(".cube").addClass("cube-new-class");
// });

// $("#remove-button").click(function(){
//   $(".cube").removeClass("cube-new-class");
// });


// $(".cube-section-des-button").click(function(){
//   if (clickValue===0){
//     $(".cube-button").addClass("cube-button-click");
//     $(".cube").addClass("cube-new-class");
//     $(".cube-heading").addClass("cube-heading-click");
//     $(".cube-section-web-design-heading").addClass("cube-section-web-design-heading-click");


//     clickValue=1;
//   }
//   else if (clickValue===1) {
//     $(".cube-button").removeClass("cube-button-click");
//     $(".cube").removeClass("cube-new-class");
//     $(".cube-heading").removeClass("cube-heading-click");
//     $(".cube-section-web-design-heading").removeClass("cube-section-web-design-heading-click");

//     clickValue=0;
//   }
// });


//*********************************************** */

var clickValue = 0;

$(".cube-section-webdev-button").click(function () {
  if (clickValue === 0) {
    $(".cube-section-webdev-button").addClass("cube-section-webdev-button-click");
    $(".cube-section-webdev-text-field").addClass("cube-section-webdev-text-field-click");
    $(".cube-heading").addClass("cube-heading-click");
    $(".cube-section-dev-text-field").addClass("cube-section-dev-text-field-click");


    clickValue = 1;
  }

  else if (clickValue === 1) {
    $(".cube-section-webdev-button").removeClass("cube-section-webdev-button-click");
    $(".cube-section-webdev-text-field").removeClass("cube-section-webdev-text-field-click");
    $(".cube-heading").removeClass("cube-heading-click");
    $(".cube-section-dev-text-field").removeClass("cube-section-dev-text-field-click");

    clickValue = 0;
  }
});

var clickValue2 = 0;

$(".cube-section-des-button").click(function () {
  if (clickValue2 === 0) {
    $(".cube-section-des-button").addClass("cube-section-des-button-click");
    $(".cube-section-des-text-field").addClass("cube-section-des-text-field-click");
    $(".cube-heading").addClass("cube-heading-click");
    $(".cube-section-web-design-heading").addClass("cube-section-web-design-heading-click");

    clickValue2 = 1;
  }

  else if (clickValue2 === 1) {
    $(".cube-section-des-button").removeClass("cube-section-des-button-click");
    $(".cube-section-des-text-field").removeClass("cube-section-des-text-field-click");
    $(".cube-heading").removeClass("cube-heading-click");
    $(".cube-section-web-design-heading").removeClass("cube-section-web-design-heading-click");

    clickValue2 = 0;
  }
});


var clickValue3 = 0;

$(".cube-content-button").click(function () {
  if (clickValue3 === 0) {
    $(".cube-content-button").addClass("cube-content-button-click");
    $(".cube-section-content-text-field").addClass("cube-section-content-text-field-click");
    $(".cube-content-heading").addClass("cube-content-heading-click");
    clickValue3 = 1;
  }

  else if (clickValue3 === 1) {
    $(".cube-content-button").removeClass("cube-content-button-click");
    $(".cube-section-content-text-field").removeClass("cube-section-content-text-field-click");
    $(".cube-content-heading").removeClass("cube-content-heading-click");
    clickValue3 = 0;
  }
});

// ********************************************************************************


// *******************Used to control the display of items on the Portfolio page************
$("#portfolio-select-bar-1").click(function () {
  $("#portfolio-select-bar-1").addClass("portfolio-select-bar2-item-active");
  $("#portfolio-select-bar-2").removeClass("portfolio-select-bar2-item-active");
  $("#portfolio-select-bar-3").removeClass("portfolio-select-bar2-item-active");

  $("#portfolio-item-2").removeClass("portfolio-item-inactive");
  $("#portfolio-item-3").removeClass("portfolio-item-inactive");
  $("#portfolio-item-4").removeClass("portfolio-item-inactive");
  $("#portfolio-item-5").removeClass("portfolio-item-inactive");
  $("#portfolio-item-1").removeClass("portfolio-item-inactive");
});

$("#portfolio-select-bar-2").click(function () {
  $("#portfolio-select-bar-2").addClass("portfolio-select-bar2-item-active");
  $("#portfolio-select-bar-1").removeClass("portfolio-select-bar2-item-active");
  $("#portfolio-select-bar-3").removeClass("portfolio-select-bar2-item-active");

  $("#portfolio-item-2").addClass("portfolio-item-inactive");
  $("#portfolio-item-3").addClass("portfolio-item-inactive");
  $("#portfolio-item-4").addClass("portfolio-item-inactive");
  $("#portfolio-item-5").addClass("portfolio-item-inactive");
  $("#portfolio-item-1").removeClass("portfolio-item-inactive");


});

$("#portfolio-select-bar-3").click(function () {
  $("#portfolio-select-bar-3").addClass("portfolio-select-bar2-item-active");
  $("#portfolio-select-bar-1").removeClass("portfolio-select-bar2-item-active");
  $("#portfolio-select-bar-2").removeClass("portfolio-select-bar2-item-active");

  $("#portfolio-item-2").removeClass("portfolio-item-inactive");
  $("#portfolio-item-3").removeClass("portfolio-item-inactive");
  $("#portfolio-item-4").removeClass("portfolio-item-inactive");
  $("#portfolio-item-5").removeClass("portfolio-item-inactive");
  $("#portfolio-item-1").addClass("portfolio-item-inactive");

});