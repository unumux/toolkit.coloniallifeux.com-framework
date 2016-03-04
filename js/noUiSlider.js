// On document ready, initialize noUiSlider.
$(function(){

  $(".slider").noUiSlider({
    start: [75],
    range: {
      'min': 0,
      'max': 100
    }
  });

  // Tags after '-inline-' are inserted as HTML.
  // noUiSlider writes to the first element it finds.
  $(".slider").Link('lower').to('-inline-<div class="slider-tooltip"></div>', function ( value ) {

    // The tooltip HTML is 'this', so additional
    // markup can be inserted here.
    $(this).html(
      '<div class="tooltip-arrow-up"></div><span>' + Math.round(value) + '%</span>'
    );
  });

});

