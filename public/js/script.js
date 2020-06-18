$(document).ready(function() {
    // Header JS Starts

    $("#app-logo").on("click", function() {
        $(this).addClass("hide");
        $(this).siblings(".options").addClass("show");
    });

    $("header .options .profile-pic .outer-pp").on("click", function() {
        $(this).siblings(".logout-popup").fadeToggle();
        $(this).parents(".profile-pic").toggleClass("active");
    });

    $("header .options .profile-pic .logout-popup .cls-btn").on(
        "click",
        function() {
            $(this).parents(".profile-pic").removeClass("active");
            $(this).parents(".logout-popup").fadeOut();
        }
    );

    $(document).mouseup(function(e) {
        var header = $("header .options .profile-pic .logout-popup");
        var nav = $(".csr-nav  .csr-nav-menu");
        if (!$("header .options .profile-pic img").is(e.target) &&
            !$("header .options .profile-pic").is(e.target) &&
            !header.is(e.target) &&
            header.has(e.target).length === 0
        ) {
            header.parents(".profile-pic").removeClass("active");
            header.fadeOut();
        }

        if ($(".csr-nav").is(e.target) && !nav.is(e.target)) {
            $(".csr-nav , .csr-nav .csr-nav-menu").removeClass("show");
            $(".burger").removeClass("clicked");
        }
    });
    $(".burger").click(function() {
        $(".burger").toggleClass("clicked");
        $(".csr-nav , .csr-nav .csr-nav-menu").toggleClass("show");
    });

    $(".csr-nav .csr-nav-menu .multi > a").click(function() {
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
        prevArrow: "<div class='arrow-lft'><img class='slick-prev' src='./images/arrow-left.svg'></div>",
        nextArrow: "<div class='arrow-rgt'><img class='slick-next' src='./images/arrow-right.svg'></div>",
        draggable: false,
        asNavFor: ".banner-sec .bnr-img-sec",
    });

    // draft page JS ends

    //project creation page JS starts

    $(".csr-main-section").mCustomScrollbar({
        scrollButtons: { enable: true },
    });

    // $(".csr-table-container").mCustomScrollbar({
    //     axis: 'x',
    // });


    $(".csr-slider-section .slider-container").slick({
        dots: true,
        prevArrow: "<div class='arrow-lft'><img class='slick-prev' src='./images/arrow-left.svg'></div>",
        nextArrow: "<div class='arrow-rgt'><img class='slick-next' src='./images/arrow-right.svg'></div>",
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000
    });


    $(document).on("click", ".view-slider", function() {
        $(".csr-slider-section").addClass('show');
    })


    $(document).on("click", ".csr-slider-section .close-slider", function() {
        $(".csr-slider-section").removeClass('show');
    })

    $(document).on("change", ".input-type-file", function(event) {
        console.log(event.target.files[0].name);
        $(this).siblings(".label-file-name").text(event.target.files[0].name);
    });

    $("#SOW_End , #PatName").datepicker({
        container: "#mCSB_1_container",
    });

    $("#SOW_End , #PatName").on("changeDate", function(ev) {
        $(this).datepicker("hide");
    });

    $("#FinCost , #milestoneUpdateTable").bootstrapTable({
        pagination: true,
        sortable: true,
        pageSize: 10,
        pageList: [10, 25, 50, 100, 'ALL'],
        search: true
    })

    //project creation page JS ends
});

document.onreadystatechange = function() {
    var state = document.readyState;
    if (state == "interactive") {
        //  document.getElementById('contents').style.visibility="hidden";
    } else if (state == "complete") {
        setTimeout(function() {
            document.getElementById("preloader").style.display = "none";
        }, 1000);
    }
};