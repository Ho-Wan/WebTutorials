// smooth scroll
$("#about-btn").click(function () {
  $('html,body').animate({
      scrollTop: $("#about-me").offset().top -60
    }, 500);
    // console.log("scrolling");
});
