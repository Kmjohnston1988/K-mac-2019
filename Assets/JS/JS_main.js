$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 300) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 300) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 300) {
            $("span.menu--label").addClass("flip");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("span.menu--label").removeClass("flip");
        }
    });
});



<!-- SCRIPTS Hamburger -->

var showing = false;
function onClickHamburger() {

  if (showing) {
    document.getElementById("nav").style.visibility = 'hidden';

  } else {
    document.getElementById("nav").style.visibility = 'visible';

  }

  showing = !showing;
}


<!-- SCRIPTS Hamburger animation -->

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
hamburger.classList.toggle("is-active");
// Do something else, like open/close menu
});
