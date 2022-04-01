let aboutScroll = $(".head-caption h4").offset().top;
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop >= aboutScroll) {
    $("#navBar").css("background-color", "rgba(0, 0, 0, 0.8)");
    $("#iconTop").fadeIn(1000);
  } else {
    $("#navBar").css("background-color", "transparent");
    $("#iconTop").fadeOut(1000);
  }
});

$("#iconTop").click(function () {
  $("body,html").animate({ scrollTop: "0px" }, { queue: true, duration: 2000 });
});

$(".nav-link").click(function () {
  let href = $(this).attr("href");
  $(this).addClass("active");
  $(this).parent().siblings().find(".nav-link").removeClass("active");
  let aboutScroll = $(href).offset().top;
  $("body,html").animate(
    { scrollTop: aboutScroll  },
    { queue: true, duration: 2000 }
  );
});

$(document).ready(function () {
  $(".loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto");
  });
});
