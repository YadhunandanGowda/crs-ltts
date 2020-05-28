$(document).ready(function () {
    
    // Header JS Starts 

    $('#app-logo').on('click', function () {
        $(this).addClass('hide');
        $(this).siblings('.options').addClass('show');
    })

    $('header .options .profile-pic .outer-pp').on('click', function () {
        $(this).siblings('.logout-popup').fadeToggle();
        $(this).parents('.profile-pic').toggleClass('active');
    })

    $('header .options .profile-pic .logout-popup .cls-btn').on('click', function () {
        $(this).parents('.profile-pic').removeClass('active');
        $(this).parents('.logout-popup').fadeOut();
    })


    $(document).mouseup(function (e) {
        var container = $("header .options .profile-pic .logout-popup");
        if (!$('header .options .profile-pic img').is(e.target) && !$('header .options .profile-pic').is(e.target) && !container.is(e.target) && container.has(e.target).length === 0) {
            container.parents('.profile-pic').removeClass('active');
            container.fadeOut();
        }
    });
    $('.burger').click(function(){
        $('.burger').toggleClass('clicked');
        // $('.overlay').toggleClass('show');
        $('nav.cstm-nav-bar').toggleClass('show');
      });

      $(".cstm-nav-bar .multi > a").click(function(){
        $(this).parents('.multi').toggleClass('clicked');
        $(this).parents('.multi').children('ul').toggleClass('show');
      });

    // Header JS Ends 

})

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        //  document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('preloader').style.display = "none";
        }, 1000);
    }
}

