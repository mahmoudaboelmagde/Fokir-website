$(document).ready(function () {
  $(".loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto");
  });
});

let aboutScroll = $(".about").offset().top;
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop > aboutScroll - 150 ) {
    $("#navBar").css("background-color", "#000000ea");
    
  } else {
    $("#navBar").css("background-color", "transparent");
    
  }
});

$(".nav-link").click(function () {
  let href = $(this).attr("href");
  $(this).addClass("active");
  $(this).parent().siblings().find(".nav-link").removeClass("active");
  let aboutScroll = $(href).offset().top;
  $("body,html").animate(
    { scrollTop: aboutScroll },
    { queue: false, duration: 3000 }
  );
});

$(".iso").click(function(){ 
  $(this).addClass("active");
  $(this).siblings().removeClass('active');
})


// init Isotope
var $grid = $('.grid').isotope({
  // options
  
  layoutMode:'fitRows'
  
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// layout Isotope after each image loads


// counteeer ************************************************************************ 

$(window).on("load resize",function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 5);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

