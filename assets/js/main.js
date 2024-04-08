/**
* Template Name: Personal - v2.3.0 with modificactions 
* Template available in: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com 
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Add style a Nav Menu start page 
  $(document).ready(function() {
    $(".start").closest('li').addClass('active');
    console.log( "ready!" );
  });

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }
        /*$('body').removeClass('back-to-top');
        console.log("se removio la clase back to top");*/
        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        $('html, body').animate({
          scrollTop: 0
        }, 500);

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 700);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.back-to-top').hide(); 
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
    $('.back-to-top').show();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  // $('.skills-content').waypoint(function() {
  //   $('.progress .progress-bar').each(function() {
  //     $(this).css("width", $(this).attr("aria-valuenow") + '%');
  //   });
  // }, {
  //   offset: '80%'
  // });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Init Owl Carousel
  $('.owl-carousel').owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {

      320: {
        items: 1
      },
      480: {
        items: 2
      },
      600: {
        items: 2
      },
      767: {
        items: 3
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox({
      'share': false
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(80).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

    // Hero typed
    if ($('.typed').length) {
      var typed_strings = $(".typed").data('typed-items');
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

    // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

//Appear the bottom light theme
  /*$(window).scroll(function() {*/
  $(window).ready(function(){
    $('.change-theme').fadeIn('slow');
    $('.change-theme').click(function(){
      var s = $(window).scrollTop();
      $(window).scrollTop(s);
    });
  });

  /*$(document).ready(function(){
    $(".change-theme").click(function(){
      var s = $(window).scrollTop();
      $(window).scrollTop(s);
      console.log(s + " px");
    });
  });*/
  
})(jQuery);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 150) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== ACCORDION SKILLS ====================*/
/*const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})*/

  // Portfolio carousel 
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#splide', {
  type: 'loop',
  focus: 'center',
  autoplay: true,
  updateOnMove: true,
  arrows: false,
  pagination: false,
  padding: '5%',
  breakpoints: {
    1980: {
      perPage: 2,
    },
    768: {
      perPage: 1,
      
    },
  }
}).mount();
});

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'icofont-moon'
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ?  'icofont-moon' : 'icofont-sun-alt'

console.log(selectedTheme)
// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'icofont-sun-alt' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

var skillCont = document.getElementById("listSkills-container");

    var skills = [{
      "icon": "html",
      "name": "HTML5"
    }, {
      "icon": "css",
      "name": "CSS3"
    }, {
      "icon": "js",
      "name": "JavaScript"
    }, {
      "icon": "bootstrap",
      "name": "Bootstrap"
    }, {
      "icon": "jquery",
      "name": "JQuery"
    }, {
      "icon": "angular",
      "name": "Angular  "
    }, {
      "icon": "react",
      "name": "React"
    }, {
      "icon": "git",
      "name": "Git & GitHub "
    }, {
      "icon": "node",
      "name": "Node.js & Express"
    }, {
      "icon": "mongo",
      "name": "MongoDB & Mongoose"
    }, {
      "icon": "npm",
      "name": "npm & yarn"
    }, {
      "icon": "firebase",
      "name": "Firebase"
    }, {
      "icon": "bash",
      "name": "Bash"
    }, {
      "icon": "latex",
      "name": "Latex"
    }]

    
    function callSkills() {
      let delayNum = 300;
      let i = 0;
      for (skill of skills) {
        var item = document.createElement('div');
        item.setAttribute('class', 'col-lg-2 col-md-3 col-4');
        item.innerHTML =
          `
                <div class="" data-aos="fade-up" data-aos-delay=${delayNum+i}>    
                  <img class="svg-skill" src="./assets/img/skills/${skill.icon}.svg" title="${skill.name}" alt="${skill.name}">
                  <p class="skill">${skill.name}</p>
                </div>
                `
        skillCont.appendChild(item.cloneNode(true))
        i= i + 50;
      }
    }

    callSkills();