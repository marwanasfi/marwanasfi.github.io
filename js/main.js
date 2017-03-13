
/*
Form
*/


// Input Lock
$('textarea').blur(function () {
  $('#contactform textarea').each(function () {
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

$('#contactform .field:nth-child(2) input').blur(function () {
  $('#contactform .field:nth-child(2) input').each(function () {
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

$('#contactform .field:nth-child(4) input').blur(function () {
  $('#contactform .field:nth-child(4) input').each(function () {
    $this = $(this);
    if ( this.value != '' ) {
      $this.addClass('focused');
      $('.field:nth-child(4) input +  label + span').css({'opacity': 1});
    }
    else {
      $this.removeClass('focused');
      $('.field:nth-child(4) input + label + span').css({'opacity': 0});
    }
  });
});



//Form validation

  $('#contactform').validate({
        errorPlacement: function ($error, $element) {
            var name = $element.attr("name");
            $("#error" + name).append($error);
        },
    rules: {
      name: {
        required:true
      },
      _replyto: {
        required:true,
        // Email will be validated by the built-in "email" rule
        email: true
      },
      message:{
        required:true
      },
    },
    // Validation error messages
    messages: {
      name: "Please enter your name.",
      email: "Please enter a valid email address",
      message: "Please enter your message."
    },
    // After validation submit the form
    submitHandler: function(form) {
      form.setAttribute('action', 'https://formspree.io/' + 'marwaworkmessages' + '@' + 'gmail' + '.' + 'com');
      form.submit();
    }
  });

/*
scroll
*/

$(document).ready(function(){

  function checkWidth() {
    if ($(window).width() < 960) {
      $('#fullpage').attr('id','not_fullpage');
      $(".content").css({'height':'100%','max-height':'100%', 'overflow-y': 'hidden'});
      $(".right_about").css({'height':'100%','max-height':'100%'});
      $(".right_skills").css({'height':'100%','max-height':'100%'});
      $(".right_work").css({'height':'100%','max-height':'100%'});
      $(".right_contact").css({'height':'120%','max-height':'100%', 'padding-bottom':'10vh'});
      $("#about").attr('href','#about_anchor');
      $("#skills").attr('href','#skills_anchor');
      $("#work").attr('href','#work_anchor');
      $("#contact").attr('href','#contact_anchor');
      $("#contactMe").attr('href','#contact_anchor');
      $(".fp-auto-height").css({'height':'auto'});

      /*content divs height on mobile*/
      function Height($elm) {
        var windowHeight = $(window).height();
        var height = $elm.prop('scrollHeight');

        if($elm === ".right_work"){
        $elm.css({'height':height/2,'max-height':height});
        $(".work_image").css({'height':height,'width':'auto'});
        $(".box").css({'height':height});
        $(".scale-caption").css({'height':height});
        $("#mainwrapper").css({'height':height});

      }else {
        $elm.css({'height':height,'max-height':height});
      }
      }

      Height($(".right_about"));
      Height($(".right_skills"));
      Height($(".right_work"));
      Height($(".right_contact"));

        /*page slide on mobile*/
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

    };
  }

  checkWidth();

      // Store the window width
      var windowWidth = $(window).width();
      // Resize Event
      $(window).resize(function(){
          // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
          if ($(window).width() != windowWidth) {
              // Update the window width for next time
              windowWidth = $(window).width();
              location.reload();
          }
      });


  $('#fullpage').fullpage({

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

/*
Mobile menu icon
*/

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
 /*
 Awesome burger default
 */

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
     $(".menu_icon").css({'height':'100%','width':'100%', 'background-color':'#fff'});
     $("body").css({'overflow-y':'hidden'});
     $(".dummy").css({'display':'block'});


     function mobile_menu() {
       $(".dummy").css({'display':'none'});
       $(".menu_icon").css({'height':'25%','width':'25%', 'background-color':'transparent'});
       $("body").css({'overflow-y':'auto'});
       outAC(segmentA);
       outB(segmentB);
       outAC(segmentC);
          dummy.className = 'dummy';
          toCloseIcon = !toCloseIcon;
     }

     document.getElementById('mobile_menu_about').onclick = function() { mobile_menu() ; }
     document.getElementById('mobile_menu_skills').onclick = function() { mobile_menu() ; }
     document.getElementById('mobile_menu_work').onclick = function() { mobile_menu() ; }
     document.getElementById('mobile_menu_contact').onclick = function() { mobile_menu() ; }

   } else {
     outAC(segmentA);
     outB(segmentB);
     outAC(segmentC);

     dummy.className = 'dummy';
     $(".menu_icon").css({'height':'25%','width':'25%', 'background-color':'transparent'});
     $("body").css({'overflow-y':'auto'});
     $(".dummy").css({'display':'none'});
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
