/**
* Template Name: Folio - v2.2.1
* Template URL: https://bootstrapmade.com/folio-bootstrap-portfolio-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu-PorfolioDetails, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu-PorfolioDetails ul:first li:first").addClass('active');
      }
    });
  });

  $('.responsive').on('click', function(e) {
    $('.nav-menu-PorfolioDetails').slideToggle();
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
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
    if ($(this).scrollTop() > 300) {
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
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

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

    // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });


})(jQuery);


const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

/*==================== Language ====================*/ 
const languageButton = document.getElementById('language-button')

const esLanguage = 'es'
const iconLanguage = 'spanish'

// Previously selected topic (if user selected)
const selectedLanguage = localStorage.getItem('selected-language')
const selectedIconLanguage = localStorage.getItem('selected-icon')
console.log(selectedLanguage)
console.log("El valor de  selectedIconLanguage es " + selectedIconLanguage)
console.log("El valor de iconLanguage es " + iconLanguage)

languageButton.classList.add("english");

const getCurrentLanguage = () => document.body.classList.contains(esLanguage) ? 'en' : 'es'
const getCurrentIconLanguage = () => languageButton.classList.contains(iconLanguage) ?  languageButton.src="./assets/img/es.svg" : (languageButton.src="./assets/img/gb.svg", document.body.classList.add("en"), languageButton.classList.add("english"));

// We validate if the user previously chose a topic
if (selectedLanguage) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedLanguage === 'es' ? 'add' : 'remove'](esLanguage)
}

const textToChange = document.querySelectorAll("[data-section]")
// console.log(textToChange)

const changeLanguage = async (language) => {
  const requestJson = await fetch(`https://julianflancheros.github.io/PruebaCarta/archivosAnexos/${language}.json`);
  const texts = await requestJson.json();
  // console.log(texts)
  for(const item of textToChange){
    // console.log(item)
    const section = item.dataset.section;
    // console.log("section "+ section)
    const value = item.dataset.value;
    // console.log("value "+ value)

    item.innerHTML = texts[section][value];
  }
}


// Activate / deactivate the theme manually with the button
languageButton.addEventListener('click', (e) => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(esLanguage);
    document.body.classList.remove("en");
    languageButton.classList.remove("english");
    languageButton.classList.toggle(iconLanguage)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-language', getCurrentLanguage())
    localStorage.setItem('selected-icon', getCurrentIconLanguage())
    // console.log(e.target.parentElement.dataset.language)
    changeLanguage(languageButton.classList)
})