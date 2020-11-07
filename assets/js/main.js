/*==================================================
** Pagetop Button
==================================================*/
jQuery(function ($) {
  $(document).ready(function () {
    let pageTop = $('#pagetop-btn');
    pageTop.hide();
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 1) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
  });
});

/*==================================================
** SP Menu
==================================================*/
jQuery(function ($) {
  var gnav = $('#sp-gnav'),
    menuBtn = $('#menu-btn'),
    closeBtn = $('#close-btn'),
    body = $(document.body),
    classToAssign = 'is-open-gnav';

  function openGnav() {
    gnav.fadeIn();
    body.addClass(classToAssign);
  }

  function closeGnav() {
    gnav.fadeOut(200);
    body.removeClass(classToAssign);
  }

  function checkWindowWidth() {
    if (window.innerWidth > 1024) {
      closeGnav();
    }
  }

  menuBtn.on('click', openGnav);
  closeBtn.on('click', closeGnav);
  $(window).on('resize', checkWindowWidth);
});

/*==================================================
** Accordion
==================================================*/
jQuery(function ($) {
  $('.js-accordion-trigger').on('click', function () {
    $(this).children('.js-accordion-title').toggleClass('is-open-accordion');
    $(this).children('.js-accordion-content').slideToggle();
  });
});

/*==================================================
** Header Change
==================================================*/
(function () {
  const targetPages = ['top']; //対象のbodyのid名をかく
  const body = document.querySelector('body');
  const classToAssign = 'is-transparent';

  //全ページではなく、一部ページのみに実行したい場合の条件文
  if (targetPages.includes(body.id)) {
    const header = document.querySelector('.header');

    function headerChange() {
      if (window.pageYOffset > 100) { //ページ上部からのスクロール量（px）の数値をかく
        header.classList.remove(classToAssign);
      } else {
        header.classList.add(classToAssign);
      }
    }

    window.addEventListener('load', headerChange);
    window.addEventListener('scroll', headerChange);
  }
})();

/*==================================================
** Exchange images
==================================================*/
// (function () {
//   const mainvsl = document.querySelector('.mainvsl');
//   const mainvslPc = 'mainvsl--pc';
//   const mainvslSp = 'mainvsl--sp';
//   const contact = document.querySelector('.contact');
//   const contactPc = 'contact--pc';
//   const contactSp = 'contact--sp';

//   function changeImage() {
//     if(window.innerWidth > 767) {
//       mainvsl.classList.add(mainvslPc);
//       mainvsl.classList.remove(mainvslSp);
//       contact.classList.add(contactPc);
//       contact.classList.remove(contactSp);
//     } else {
//       mainvsl.classList.add(mainvslSp);
//       mainvsl.classList.remove(mainvslPc);
//       contact.classList.add(contactSp);
//       contact.classList.remove(contactPc);
//     }
//   }

//   window.addEventListener('load', changeImage);
//   window.addEventListener('resize', changeImage);
// })();
