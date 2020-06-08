$(document).ready(function () {
  // Header JS Starts

  $("#app-logo").on("click", function () {
    $(this).addClass("hide");
    $(this).siblings(".options").addClass("show");
  });

  $("header .options .profile-pic .outer-pp").on("click", function () {
    $(this).siblings(".logout-popup").fadeToggle();
    $(this).parents(".profile-pic").toggleClass("active");
  });

  $("header .options .profile-pic .logout-popup .cls-btn").on(
    "click",
    function () {
      $(this).parents(".profile-pic").removeClass("active");
      $(this).parents(".logout-popup").fadeOut();
    }
  );

  $(document).mouseup(function (e) {
    var header = $("header .options .profile-pic .logout-popup");
    if (
      !$("header .options .profile-pic img").is(e.target) &&
      !$("header .options .profile-pic").is(e.target) &&
      !header.is(e.target) &&
      header.has(e.target).length === 0
    ) {
      header.parents(".profile-pic").removeClass("active");
      header.fadeOut();
    }
  });
  $(".burger").click(function () {
    $(".burger").toggleClass("clicked");
    $("nav.cstm-nav-bar").toggleClass("show");
  });

  $(".cstm-nav-bar .multi > a").click(function () {
    $(this).parents(".multi").toggleClass("clicked");
    $(this).parents(".multi").children("ul").toggleClass("show");
  });

  // Header JS Ends

  // draft page JS starts

  $(" .banner-sec .bnr-img-sec").slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    draggable: false,
    asNavFor: ".banner-sec .bnr-cnt-sec",
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $(" .banner-sec .bnr-cnt-sec").slick({
    dots: true,
    prevArrow:
      "<div class='arrow-lft'><img class='slick-prev' src='./images/arrow-left.svg'></div>",
    nextArrow:
      "<div class='arrow-rgt'><img class='slick-next' src='./images/arrow-right.svg'></div>",
    draggable: false,
    asNavFor: ".banner-sec .bnr-img-sec",
  });

  // draft page JS ends

  //project creation page JS starts

  $(".project-creation-section").mCustomScrollbar({
    scrollButtons: { enable: true },
  });

  $(".input-type-file").on("change", function (event) {
    $(this).siblings(".label-file-name").text(event.target.files[0].name);
  });

  //project creation page JS ends
});

document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "interactive") {
    //  document.getElementById('contents').style.visibility="hidden";
  } else if (state == "complete") {
    setTimeout(function () {
      document.getElementById("preloader").style.display = "none";
    }, 1000);
  }
};
