
/////////////scroll/////////////
$(document).ready(function(){


  function checkWidth() {
    if ($(window).width() < 980) {
      $('#fullpage').attr('id','not_fullpage');
      $(".content").css({'height':'100%','max-height':'100%', 'overflow-y': 'hidden'});
      $(".right_about").css({'height':'100%','max-height':'100%'});
      $(".right_skills").css({'height':'100%','max-height':'100%'});
    };


  }

  checkWidth();


  $('#fullpage').fullpage({
    //Navigation
    //menu: '#myMenu',
    //lockAnchors: false,
    //anchors:['about', 'skills', 'work','contact'],
    //navigation: true,
    //  navigationPosition: 'right',
    //navigationTooltips: ['Home','About me', 'My skills', 'My work','Contact me','Footer'],
    //showActiveTooltip: false,
    //slidesNavigation: true,
    //  slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,

  });

});
$(document).on('click', '#contactMe', function(){
  $.fn.fullpage.moveTo(5, 0);
});
$(document).on('click', '#contact', function(){
  $.fn.fullpage.moveTo(5, 0);
});
$(document).on('click', '#skills', function(){
  $.fn.fullpage.moveTo(3, 0);
});
$(document).on('click', '#about', function(){
  $.fn.fullpage.moveTo(2, 0);
});
$(document).on('click', '#work', function(){
  $.fn.fullpage.moveTo(4, 0);
});
$(document).on('click', '#contact1', function(){
  $.fn.fullpage.moveTo(5, 0);
});
$(document).on('click', '#skills1', function(){
  $.fn.fullpage.moveTo(3, 0);
});
$(document).on('click', '#work1', function(){
  $.fn.fullpage.moveTo(4, 0);
});
$(document).on('click', '#contact2', function(){
  $.fn.fullpage.moveTo(5, 0);
});
$(document).on('click', '#about2', function(){
  $.fn.fullpage.moveTo(2, 0);
});
$(document).on('click', '#work2', function(){
  $.fn.fullpage.moveTo(4, 0);
});
$(document).on('click', '#contact3', function(){
  $.fn.fullpage.moveTo(5, 0);
});
$(document).on('click', '#about3', function(){
  $.fn.fullpage.moveTo(2, 0);
});
$(document).on('click', '#skills3', function(){
  $.fn.fullpage.moveTo(3, 0);
});
$(document).on('click', '#work4', function(){
  $.fn.fullpage.moveTo(4, 0);
});
$(document).on('click', '#about4', function(){
  $.fn.fullpage.moveTo(2, 0);
});
$(document).on('click', '#skills4', function(){
  $.fn.fullpage.moveTo(3, 0);
});
$(window).on('resize',function(){
  location.reload();
});
/////////////page slide/////////////
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//////////////mobile menu icon  //////////////////

(function() {
  /* In animations (to close icon) */

  var beginAC = 80,
  endAC = 320,
  beginB = 80,
  endB = 320;

  function inAC(s) {
    s.draw('80% - 240', '80%', 0.3, {
      delay: 0.1,
      callback: function() {
        inAC2(s)
      }
    });
  }

  function inAC2(s) {
    s.draw('100% - 545', '100% - 305', 0.6, {
      easing: ease.ease('elastic-out', 1, 0.3)
    });
  }

  function inB(s) {
    s.draw(beginB - 60, endB + 60, 0.1, {
      callback: function() {
        inB2(s)
      }
    });
  }

  function inB2(s) {
    s.draw(beginB + 120, endB - 120, 0.3, {
      easing: ease.ease('bounce-out', 1, 0.3)
    });
  }

  /* Out animations (to burger icon) */

  function outAC(s) {
    s.draw('90% - 240', '90%', 0.1, {
      easing: ease.ease('elastic-in', 1, 0.3),
      callback: function() {
        outAC2(s)
      }
    });
  }

  function outAC2(s) {
    s.draw('20% - 240', '20%', 0.3, {
      callback: function() {
        outAC3(s)
      }
    });
  }

  function outAC3(s) {
    s.draw(beginAC, endAC, 0.7, {
      easing: ease.ease('elastic-out', 1, 0.3)
    });
  }

  function outB(s) {
    s.draw(beginB, endB, 0.7, {
      delay: 0.1,
      easing: ease.ease('elastic-out', 2, 0.4)
    });
  }

  /* Awesome burger default */

  var pathA = document.getElementById('pathA'),
  pathB = document.getElementById('pathB'),
  pathC = document.getElementById('pathC'),
  segmentA = new Segment(pathA, beginAC, endAC),
  segmentB = new Segment(pathB, beginB, endB),
  segmentC = new Segment(pathC, beginAC, endAC),
  trigger = document.getElementById('menu-icon-trigger'),
  toCloseIcon = true,
  dummy = document.getElementById('dummy'),
  wrapper = document.getElementById('menu-icon-wrapper');

  wrapper.style.visibility = 'visible';

  trigger.onclick = function() {
    if (toCloseIcon) {
      inAC(segmentA);
      inB(segmentB);
      inAC(segmentC);

      dummy.className = 'dummy dummy--active';
    } else {
      outAC(segmentA);
      outB(segmentB);
      outAC(segmentC);

      dummy.className = 'dummy';
    }
    toCloseIcon = !toCloseIcon;
  };

  /* Scale functions */

  function addScale(m) {
    m.className = 'menu-icon-wrapper scaled';
  }

  function removeScale(m) {
    m.className = 'menu-icon-wrapper';
  }

  /* Awesome burger scaled */

  var pathD = document.getElementById('pathD'),
  pathE = document.getElementById('pathE'),
  pathF = document.getElementById('pathF'),
  segmentD = new Segment(pathD, beginAC, endAC),
  segmentE = new Segment(pathE, beginB, endB),
  segmentF = new Segment(pathF, beginAC, endAC),
  wrapper2 = document.getElementById('menu-icon-wrapper2'),
  trigger2 = document.getElementById('menu-icon-trigger2'),
  toCloseIcon2 = true,
  dummy2 = document.getElementById('dummy2');

  wrapper2.style.visibility = 'visible';

  trigger2.onclick = function() {
    addScale(wrapper2);
    if (toCloseIcon2) {
      inAC(segmentD);
      inB(segmentE);
      inAC(segmentF);

      dummy2.className = 'dummy dummy--active';
    } else {
      outAC(segmentD);
      outB(segmentE);
      outAC(segmentF);

      dummy2.className = 'dummy';
    }
    toCloseIcon2 = !toCloseIcon2;
    setTimeout(function() {
      removeScale(wrapper2)
    }, 450);
  };

})();


//////////////form //////////////////

// Input Lock
$('textarea').blur(function () {
  $('#form_section textarea').each(function () {
    $this = $(this);
    if ( this.value != '' ) {
      $this.addClass('focused');
      $('textarea + label + span').css({'opacity': 1});
    }
    else {
      $this.removeClass('focused');
      $('textarea + label + span').css({'opacity': 0});
    }
  });
});

$('#form_section .field:first-child input').blur(function () {
  $('#form_section .field:first-child input').each(function () {
    $this = $(this);
    if ( this.value != '' ) {
      $this.addClass('focused');
      $('.field:first-child input + label + span').css({'opacity': 1});
    }
    else {
      $this.removeClass('focused');
      $('.field:first-child input + label + span').css({'opacity': 0});
    }
  });
});

$('#form_section .field:nth-child(2) input').blur(function () {
  $('#form_section .field:nth-child(2) input').each(function () {
    $this = $(this);
    if ( this.value != '' ) {
      $this.addClass('focused');
      $('.field:nth-child(2) input + label + span').css({'opacity': 1});
    }
    else {
      $this.removeClass('focused');
      $('.field:nth-child(2) input + label + span').css({'opacity': 0});
    }
  });
});
