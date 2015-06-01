$(document).ready(function() {


  /******************************************************************/
  /********************** Global Initialization *********************/
  /******************************************************************/


  //................Bowser
  /*
    chrome[webkit]
    firefox[gecko]
    msie
    Android native browser as android[webkit]
    iOS native browser as ios[webkit]
    opera[webkit if >12]
    phantomjs[webkit]
    safari[webkit]
    seamonkey[gecko]
    BlackBerry native browser as blackberry[webkit]
    WebOS native browser as webos[webkit]
    Amazon Kindle browser as silk[webkit]
    Bada browser as bada[webkit]
    Tizen browser as tizen[webkit]
    Sailfish browser as sailfish[gecko]
    android
    Windows Phone as windowsphone
    ios (iphone/ipad/ipod)
    blackberry
    firefoxos
    webos (touchpad)
    bada
    tizen
    sailfish
  */
  (function(){
    if ( bowser.mobile || bowser.tablet || bowser.touchpad ) {
      $('body').addClass('mobile');
    }
  })();



  //................Sticky footer
  (function(){
    var $w = $(window),
        $h = $('#SiteHeader'),
        $c = $('#SiteContent'),
        $f = $('#SiteFooter'),
        // $m = $('.js-main-menu'),
        hh = $h.outerHeight(),
        fh = $f.outerHeight(),
        // mh = $m.outerHeight(),
        wh;
    resizer();
    if (window.addEventListener) {
      window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
      window.attachEvent('onresize', resizer);
    }

    function resizer(){
      wh = $w.outerHeight();
      $c.css('minHeight', wh - hh - fh);

      // if ( $('.js-page').hasClass('page-404')){
      //   $c.css('height', '');
      //   $c.css('minHeight', '');
      // }


      // $c.css('minHeight', wh - hh - fh - mh);

      $('.page-404:eq(0)').css({'minHeight':wh - hh - fh+'px'});
    }
  })();




  //................Placeholder
  // $('input, textarea').placeholder({
  //     color : 'blue'
  // });



  //................Inputmask
  $(".input-phone").inputmask({
      mask: "+7[-999][-999999]",
      //mask: "+7 (999) 999-99-99",
      greedy: false,
      showMaskOnHover: false,
      'clearIncomplete': false,
      clearMaskOnLostFocus: false
  });



  //................Slider
  /*

    {
      mode:'fade',
      speed:800,
      easing: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      pager:false,

      auto:true,
      pause:2000,
      autoHover:true,

      slideWidth: 1000,
      minSlides: 4,
      maxSlides: 4,
      slideMargin: 10,
      moveSlides: 1,

      infiniteLoop:false,

      onSliderLoad:function(currentIndex){},
      onSlideBefore:function($slideElement, oldIndex, newIndex){},
      onSlideAfter:function($slideElement, oldIndex, newIndex){}
    }

    slider.goToPrevSlide();
    slider.goToNextSlide();
    slider.destroySlider();
    slider.goToSlide(i);

  */
  $('.slider-on').bxSlider({
    // auto: true,
    adaptiveHeight: true,
    mode: 'horizontal',
    infiniteLoop: true,
    hideControlOnEnd: true,
    easing: 'swing',
    speed: 1600
  });




  //................Fancybox
  (function(){

    $('.fancybox').fancybox();

    $('.fancybox-modal').fancybox({
        // modal:true,
        closeBtn:false
    });

    /*
        $(".fancybox-thumb").fancybox({
          prevEffect  : 'none',
          nextEffect  : 'none',
          autoSize:false,
          maxHeight:500,
          minHeight:100,
          helpers : {
            title : {
              type: 'outside'
            },
            thumbs  : {
              width : 66,
              height  : 90,
              paddingBottom: 20
            }
          }
        });
    */

    $('.product-card__img:eq(0) .fancybox:eq(0)').fancybox({
      helpers : {
        title : {
          type: 'outside'
        }
      },
      afterLoad: function(){
        this.title = $('.page-product-card__title:eq(0)').text().trim();
      }
    });

    $('.js-ask-question').fancybox({
      type: 'ajax',
      padding: 0
    });

     $('.js-popup-message').fancybox({
      type: 'ajax',
      padding: 0,

      afterShow: function(){
        var timer = setTimeout(function(){
          $.fancybox.close();
        },3000);
      }
    });


  })();



  //................Tabs
  $('.tabs-on').tabslet({
      animation: true
  });


  //................Dropdown
  $('.dropdown-on').dropdown();



  //................Toggle
  $('.toggle-box').toggleBox();



  //................Forms
  (function(){

    $('.filebox').filebox();

    $('.input-control,textarea').focus(function() {
        $(this).parent().removeClass('error');
    });

    $('.input-phone').keydown(function(e) {
      if ( $(this).val() ){
        $(this).addClass('hasVal');
      } else {
        $(this).removeClass('hasVal');
      }
    });

  })();


  //................Validation
  // (function(){

  //   $('.g-form').submit(function(e){
  //     e.preventDefault();

  //     var $form = $(this),
  //         $inputs = $form.find('.input-control, textarea'),
  //         $inputMail = $form.find('.input-mail:eq(0)'),
  //         hasError = false, val;

  //     $inputs.each(function(){
  //       val = $(this).val();
  //       if ( isBlank(val) ){
  //         $(this).parent().addClass('error');
  //         hasError = true;
  //         return;
  //       }
  //     });

  //     if( !isMail( $inputMail.val() ) ) {
  //       $inputMail.parent().addClass('error');
  //       hasError = true;
  //     }

  //     if (!hasError) {
  //       return true;
  //     } else {
  //       return false;
  //     }

  //     // for (var i = 0; i <= 1; i++) {
  //     //   $('.g-form')[i].reset();
  //     // };

  //   });

  //   function isBlank(str) {return (!str || /^\s*$/.test(str)); }
  //   function isMail(str) {return /^\w+@\w+\.\w{2,4}$/i.test(str); }

  // })();








  //................Datepicker
  // $('.datepicker').datetimepicker({
  //     lang:'ru',
  //     timepicker:false,
  //     format:'d.m.Y',
  //     dayOfWeekStart:1,
  //     closeOnDateSelect:true,
  //     scrollInput: false,
  //     scrollMonth: false,
  //     onChangeMonth: function(current_time, $input){
  //         $input.val( current_time.dateFormat('d.m.Y') );
  //     }
  // });




  //................Dot Dot Dot
  // (function(){
  //   var t,d;
  //   $(window).resize( (function(){
  //     var fn = function(){
  //       t == undefined ? d = 0 : d = 50;
  //       clearTimeout(t);
  //       t = setTimeout(function(){
  //         $('.text-overflow').dotdotdot({
  //           ellipsis  : '... '
  //         });
  //       },d);
  //     };
  //     fn();
  //     return fn;
  //   })() );
  // })();


  //................Sticky
  //$('#sticky').sticky({topSpacing:0});




  //................Appear
  // $(function(){
  //   $('.waiting').appear().trigger('scroll');
  //   $('.waiting').on('appear', function(event, $all_appeared_elements) {
  //     var currentId = $all_appeared_elements.eq(0).closest('.section').get(0).id;
  //     $(this).closest('.section')
  //       .addClass('appeared')
  //       .nextAll().removeClass('appeared');
  //     $(this).closest('.section').prevAll().addClass('appeared');
  //     $('.menu .active').removeClass('active');
  //     $(".menu [href='#"+currentId+"']").parent().addClass('active');
  //   });
  // });



  /******************************************************************/
  /********************** Local Initialization *********************/
  /******************************************************************/








shareButton();

sliderText();


activePreloaderCatalog();

choiseProductType();

  $( "#tabs" ).tabs({
    show: { effect: "fade", duration: 900 }
  });
  $("#tabs").on('tabsselect', function(event, ui) {
      window.location.href=ui.tab;
      tabRecall();
  });


    $(document).on('click', '.dropdown-menu-title', function(){
      $('.js-select:eq(0)').css({'color':'#000'});
    });

    tabRecall();


    searchLoad();


    diagnosticsStart();
    diagnosticsForm();
    coloringNext();
    diagnosticsNavLink();



  //................Google Map
  var map = $('#map').googleMap({
      mapOptions: {
      styles: [
      {
        "featureType": "administrative",
        "stylers": [
          { "saturation": -100 }
        ]
      },{
        "featureType": "landscape",
        "stylers": [
          { "saturation": -100 },
          { "lightness": -5 }
        ]
      },{
        "featureType": "poi",
        "stylers": [
          { "saturation": -100 },
          { "lightness": -7 }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "saturation": -100 }
        ]
      },{
        "featureType": "transit",
        "stylers": [
          { "saturation": -100 }
        ]
      },{
        "featureType": "water",
        "stylers": [
          { "saturation": -100 },
          { "lightness": -22 }
        ]
      }]
  },
  markerOptions: {
    icon:'/assets/images/icons/marker.png'
  }
}); 
  map.init();





  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // scrollbar: {
        // container: scrollabar,
        // hide: false,
        // draggable: true,
        // watchActiveIndex: true,
      // },
    
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    // grabCursor: true,
    // watchSlidesVisibility: true,
    watchActiveIndex: true,
  })  


});




function sliderText(){
  // var pageWidth = $(document).width();
  var pageWidth = $(document).outerWidth();
  var contentWidth = $('.js-page:eq(0) > .wrap:eq(0)').width();
  var sliderWidth = (pageWidth - contentWidth)/2 +5;
  $('.slider-text').css({'margin-left':sliderWidth +'px'});

  $('.bx-wrapper .bx-pager').css({'padding-left':sliderWidth +'px'});

  var $sliderImg = $('.slider-item__img');
  var r = sliderWidth + 85;
  $sliderImg.css({'right':r +'px'});

  $('.slider-text__note').css({'margin-left':sliderWidth +'px'});


  $('.bx-wrapper .bx-prev').css({'left':sliderWidth-79 +'px'});
  $('.bx-wrapper .bx-next').css({'right':sliderWidth-79 +'px'});


  if(pageWidth <= 1105){
    sliderWidth = sliderWidth + 70;
    $('.slider-text').css({'margin-left':sliderWidth +'px'});
    $('.slider-text__note').css({'margin-left':sliderWidth +'px'});

    $('.bx-wrapper .bx-pager').css({'padding-left':sliderWidth +'px'});
    
    r = sliderWidth + 95
    $sliderImg.css({'right':r +'px'});


    $('.bx-wrapper .bx-prev').css({'left':sliderWidth-79 +'px'});
    $('.bx-wrapper .bx-next').css({'right':sliderWidth-79 +'px'});
  }
}



function activePreloaderCatalog(){
  $('.catalog__products, .js-sharing').fadeOut(0, function(){
    $(".page-catalog:eq(0) .loader:eq(0)").css({'display': 'block'});
  });
  var timer = setTimeout(function(){
    $(".page-catalog:eq(0) .loader:eq(0)").stop(true,true).fadeOut(300, function () { 
      $('.catalog__products').fadeIn(300); 
      $('.js-sharing').fadeIn(300); 
    }); 
  },1000);
 
}

function choiseProductType() {
  $(document).on('click','.catalog-menu__link', function(e){
    e.preventDefault();
    $('.catalog-menu__link').removeClass('active');
    $(this).addClass('active');
    console.log('выбран тип продукции');
    activePreloaderCatalog();
  });
}

function tabRecall(){
  var tabrecall = $('.js-tabs-item-recall:eq(0)').find('a').attr('href');
  $('.js-aside-recall:eq(0)').fadeOut();
  if(window.location.hash === tabrecall){
    fadeInOut( $('.js-aside-recall:eq(0)'),$('.js-aside-img:eq(0)') );
  } else {
    fadeInOut( $('.js-aside-img:eq(0)'),$('.js-aside-recall:eq(0)') );
  }
}


function fadeInOut( $fadein,$fadeout ){
    $fadeout.fadeOut(1000, function() {
      $fadein.fadeIn(1000);
    });
}

function searchLoad() {
  var $pageSearch = $('.page-search');
  var $form = $pageSearch.find('.form-search-question:eq(0)');
  var $input = $pageSearch.find('.search-question__input:eq(0)');
  var $count = $pageSearch.find('.search-count:eq(0)');
  var $loader = $pageSearch.find('.loader:eq(0)');
  var $searchBlocks = $pageSearch.find('.page-search__blocks:eq(0)');
  var $paginator = $pageSearch.find('.paginator:eq(0)');


  $(document).on('submit','.page-search .form-search-question:eq(0)', function(e){
    e.preventDefault();
    var phrase = $input.val();
    var oldPhrase = phrase;

      $loader.removeClass('hide');
      var timer = setTimeout(function(){
        $loader.stop(true,true).fadeOut(300, function () { 
          $count.removeClass('hide').fadeIn(300); 
          $searchBlocks.removeClass('hide').fadeIn(300); 
          $paginator.removeClass('hide').fadeIn(300); 
        }); 
      },1000);

      $searchBlocks.removeHighlight().highlight(phrase);

  });
}




//проверка валидности и сообщение об успешной отправке
 (function(){
     
    // валидация подписки
    $('.email-delivery__form').submit(function(e){
      e.preventDefault();

      var $form = $(this),
          $inputs = $form.find('.input-control'),
          $inputMail = $form.find('.input-mail:eq(0)'),
          $validText = $form.find('.js-validText'),
          valMail = $inputMail.val(),
          hasError = false, val;

      $inputs.each(function(){
        val = $(this).val();
        if ( isBlank(val) ){
          $(this).parent().addClass('has-error');
          hasError = true;
          $validText.text('укажите e-mail');

          return;

        }
      });

      $inputs.focus(function(){
       $(this).parent().removeClass('has-error');
       $validText.text('');
      });


      if( !isMail( $inputMail.val() ) && $inputMail.val() !== '') {
        $inputMail.parent().addClass('has-error');
        hasError = true;
         $validText.text('e-mail ввиде example@mail.com');
      }

       if($inputMail.val() === 'ru@ru.ru'){
          $validText.text('Данный email уже присутствует в базе подписчиков на рассылку');
          $inputMail.parent().addClass('has-error');
          hasError = true;
      }

      if (!hasError) {

            $form.parent().addClass('success');
            $('.email-delivery__submit').hide();
            $inputs.hide();
            $validText.text('Вы успешно подписались на рассылку');
                  
            var timer = setTimeout(function(){
              // for (var i = 0; i <= 1; i++) {
              //   $(".email-delivery__form")[i].reset();
              // };
              $validText.text('');
              $form.parent().removeClass('success');
              $('.email-delivery__submit').show();
              $inputs.val('').show();
            },3000);
            

            return true;
          } else {
            return false;
          }
      });





      // валидация отправки вопроса
      $(document).on('submit','.js-form-ask-question-popup',function(e){
      e.preventDefault();

      var $form = $(this),
          $inputs = $form.find('.input-control'),
          $inputName = $form.find('.input-name:eq(0)'),
          $inputMail = $form.find('.input-mail:eq(0)'),
          $textarea = $form.find('textarea:eq(0)'),
          $select = $form.find('.js-select:eq(0)'),
          validTextSelector = '.js-validText',
          valMail = $inputMail.val(),
          hasError = false, val;

      $inputs.each(function(){
        val = $(this).val();
        if ( isBlank(val) ){
          $(this).parent().addClass('has-error');
          hasError = true;
          return;
        }
      });

      $inputs.focus(function(){
       $(this).parent().removeClass('has-error').find(validTextSelector).text('');
      });

      if( $inputName.val() === '') {
        $inputName.parent().addClass('has-error').find(validTextSelector).text('напишите имя');
        hasError = true;
      }

      if( $inputMail.val() === '') {
        $inputMail.parent().addClass('has-error').find(validTextSelector).text('укажите e-mail');
        hasError = true;
      }

      if( !isMail( $inputMail.val() ) && $inputMail.val() !== '') {
        $inputMail.parent().addClass('has-error').find(validTextSelector).text('e-mail ввиде example@mail.com');
        hasError = true;
      }

      if( $select.text().trim() === "Тема") {
        $('.dropdown-on').addClass('has-error').find(validTextSelector).text('выберите тему');
      } else {
        $('.dropdown-on').removeClass('has-error').find(validTextSelector).text('');

      }

      $(document).on('click', '.dropdown-button', function(){
        $('.dropdown-on').removeClass('has-error').find(validTextSelector).text('');
      });

      if( $textarea.val() === '') {
        $textarea.parent().addClass('has-error').find(validTextSelector).text('напишите вопрос');
        hasError = true;
      }


      if (!hasError) {
          $('.js-popup-message').click();
            

            return true;
          } else {
            return false;
          }
      });

      // проверка отзыва и вопроса, форма которых находится сбоку
     $(document).on('submit','.js-form-aside',function(e){
      e.preventDefault();

      var $form = $(this),
          $inputs = $form.find('.input-control'),
          $inputName = $form.find('.input-name:eq(0)'),
          $inputMail = $form.find('.input-mail:eq(0)'),
          $textarea = $form.find('textarea:eq(0)'),
          validTextSelector = '.js-validText',
          valMail = $inputMail.val(),
          hasError = false, val;

      $inputs.each(function(){
        val = $(this).val();
        if ( isBlank(val) ){
          $(this).parent().addClass('has-error');
          hasError = true;
          return;
        }
      });

      $inputs.focus(function(){
       $(this).parent().removeClass('has-error').find(validTextSelector).text('');
      });

      if( $inputName.val() === '') {
        $inputName.parent().addClass('has-error').find(validTextSelector).text('напишите имя');
        hasError = true;
      }

      if( $inputMail.val() === '') {
        $inputMail.parent().addClass('has-error').find(validTextSelector).text('укажите e-mail');
        hasError = true;
      }

      if( !isMail( $inputMail.val() ) && $inputMail.val() !== '') {
        $inputMail.parent().addClass('has-error').find(validTextSelector).text('e-mail ввиде example@mail.com');
        hasError = true;
      }

      if( $textarea.val() === '') {
        $textarea.parent().addClass('has-error').find(validTextSelector).text('напишите отзыв');
        hasError = true;
      }


      if (!hasError) {
          

          $('.js-popup-message').click();

          for (var i = 0; i <= 1; i++) {
            $form[i].reset();
          };            

            return true;
          } else {
            return false;
          }
      });





    function isBlank(str) {return (!str || /^\s*$/.test(str)); }
    function isMail(str) {return /^\w+@\w+\.\w{2,4}$/i.test(str); }

})();

function diagnosticsStart(){
  $(document).on('click','.diagnostics-welcome__button:eq(0)', function(){
    $('.js-welcome:eq(0)').fadeOut(400, function(){
      $('.js-form:eq(0)').fadeIn(400).removeClass('hide');
    });
  });
}

function diagnosticsForm(){
  $(document).on('click','.step__link', function(e){
    e.preventDefault();
    var $this = $(this);
    var stepLink = $this.attr('href');
    var $stepLink = $(stepLink);
    var numStep = parseInt(stepLink.replace(/\D+/g,""));

    var $formNavLink = $('.diagnostics-nav-link');


    if( $this.parents('.step').find('.step__answers input[type="radio"]:checked').length && $this.hasClass('step__link--next') || $this.parents('.step').find('.step__answers input[type="checkbox"]').length){
      console.log('checked');
      changeStep($this, $formNavLink, numStep, $stepLink);

    }  else if ($this.hasClass('step__link--prev')){
      console.log('prev');
      changeStep($this, $formNavLink, numStep, $stepLink);

    } else {
      console.log('must checked');
    }
    
  });

}


function changeStep($this, $formNavLink, numStep, $stepLink) {
  $('.step.active').removeClass('active').fadeOut('slow', function(){
    $stepLink.fadeIn('slow').removeClass('hide').addClass('active');
  });

  $formNavLink.removeClass('active');
  $formNavLink.each(function(){
    var formNavLink = $(this).attr('href');
    var numNavLink = parseInt(formNavLink.replace(/\D+/g,""));
    if(numNavLink <= numStep){
      $(this).addClass('active');
    };
  });
}


function coloringNext(){
  $(document).on('click','.step__answers input[type="radio"]:checked', function(e){
    console.log("coloringNext");
    $(this).parents('.step').find('.step__link--next').addClass('active');
  });

}

function diagnosticsNavLink(){
  $(document).on('click', '.diagnostics-nav-link.active', function(){
    var $this = $(this);
    var linkHash = $this.attr('href');
    var numStep = parseInt(linkHash.replace(/\D+/g,""));
    var $stepLink = $(linkHash);
    var $formNavLink = $('.diagnostics-nav-link');
    changeStep($this, $formNavLink, numStep, $stepLink) 

  });
}
