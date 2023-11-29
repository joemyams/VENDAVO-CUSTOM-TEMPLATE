var $ = jQuery;

(function () {
  document.body.innerHTML = document.body.innerHTML
  .replace(/((?!<sup>\s*))&reg;((?!\s*<\/sup>))/gi, "<sup>&reg;</sup>")
  .replace(/((?!<sup>\s*))®((?!\s*<\/sup>))/gi, "<sup>&reg;</sup>")
  .replace(/((?!<sup>\s*))&trade;((?!\s*<\/sup>))/gi, "<sup>&trade;</sup>")
  .replace(/((?!<sup>\s*))™((?!\s*<\/sup>))/gi, "<sup>&trade;</sup>");
  

  if ($("#typed").length) {
    setTimeout(function(){
      new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 55,
        backSpeed: 42,
        backDelay: 2000,
        startDelay: 0,
        loop: true,
        loopCount: Infinity,
      });
    }, 1250);
  }

  jQuery(".fancybox").fancybox({
    youtube: {
      controls: 1,
      autoPlay: 1,
      modestbranding: 1,
    },
    vimeo: {
      color: "f00",
    },
  });

  if ($(".block--outcome-graph").length) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".outcome-graph-container",
        start: "bottom bottom",
      },
    });

    tl.from(".swoop", { drawSVG: 0, duration: 1.5, ease: Power4.easeInOut });
    tl.from(".swoop--bottom", { rotation: 1, duration: 2.5 }, "-=0.75");
    tl.from(
      ".swoop-slide[data-index='0'] .swoop-group",
      { y: 6, autoAlpha: 0, duration: 1.5, stagger: 0.15 },
      "-=2.5"
      );
  }

  if ($(".block--contact-v2").length) {
    $(".block--contact-v2").each(function(index, elem) {
      var $formID = $(elem).find('form').attr('data-formId');
      MktoForms2.loadForm("//app-abb.marketo.com", "526-WQV-792", $formID);
    });
  }


  if ($(".block__countdown").length) {
    $(".block__countdown").each(function(index, elem) {
      var $el = $(elem);
      var $elDate = $(elem).attr('data-Date');
      $el.countdown($elDate, function(event) {
        var $this = $(this).html(event.strftime(''
          + '<ul class="countdown d-flex flex-row nav justify-content-between"><li class="time weeks"><span class="timer">%w</span><span class="label">weeks</span></li> '
          + '<li class="time days"><span class="timer">%d</span><span class="label">days</span></li> '
          + '<li class="time hours"><span class="timer">%H</span><span class="label">hours</span></li> '
          + '<li class="time minutes"><span class="timer">%M</span><span class="label">mins</span></li> '
          + '<li class="time seconds"><span class="timer">%S</span><span class="label">secs</span></li></ul>'));
      });
    });
  }

  if ($(".resource-preview").length) {
    $(".resource-preview").each(function () {
      $(this).slick({
        dots: true,
        arrows: true,
      });
    });
  }

  if ($(".content-slider__slick").length) {
    $(".content-slider__slick").each(function () {
      $(this).slick();
    });
  }

  if($('.block--business-needs-v2').length) {
    $('.block--business-needs-v2 a[data-toggle="tab"]').on('show.bs.tab', function(ev) {
      $(ev.target).parent().parent().find('.nav-link').removeClass('active');
      $(ev.target).addClass('active');
      $(ev.target).parents('.dropdown').eq(0).find('.dropdown-toggle').text($(ev.target).text());
    });
  }

  if($('.block--capabilities-v2').length) {
    $('#capability-modal').appendTo(document.body);
    $("#capability-modal").modal({
      show: !1
    });
    $(".modal-link").on("click tap", function(ev) {
      ev.preventDefault();
      let a = $(ev.currentTarget).data("target")
      , t = $(ev.currentTarget).parent()
      , o = t.find(".capability__title").text()
      , i = t.find(".capability__info").html();
      $(a).find(".capability__title").text(o);
      $(a).find(".capability__info").html(i);
      $(a).modal("show");
    });
    $("#capability-modal").on("show.bs.modal", function() {
      $("body").addClass("modal__gray-backdrop");
    });
    $("#capability-modal").on("hidden.bs.modal", function() {
      $("body").removeClass("modal__gray-backdrop");
    }); 
  }

  

  if($(".block--accordion-v2").length ) {
    $('.block--accordion-v2 .collapse').on('shown.bs.collapse', function(ev) {      
      var currentScroll = $('#' + $(ev.currentTarget).attr('aria-labelledby')).offset().top - 160;
      $('html, body').animate({
        scrollTop: currentScroll
      }, 350);
    });
  }

  if($(".block--tabs-v2").length && $(window).width() < 992 ) {
    $('.block--tabs-v2 a[data-toggle="tab"]').on('shown.bs.tab', function(ev) {
      var currentScroll = $($(ev.target).attr('href')).offset().top - 90;
      $('html, body').animate({
        scrollTop: currentScroll
      }, 350);
    });
  }

  if($('.block--way-steps-v2').length) {
    $('body').append('<aside class="modal modal__popup modal__wide fade" id="steps-modal" tabindex="-1" role="dialog" aria-labelledby="steps-modal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg nooverf" role="document"><div class="modal-content nooverf""><header class="modal-header"><button class="btn btn-transparent btn-close px-0 ml-auto" type="button" data-dismiss="modal" aria-label="Close"><div class="btn-close-text d-inline-block align-middle mr-1 sr-only">Close</div><div class="card__icon-plus svg__icon-plus z-2"><svg class="svg-icon capability__plus" width="32" height="32" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"></path></svg></div></button></header><section class="modal-body w-100 h-100 is-text--blue-30"><div class="inner modal__info"></div></section></div></div></aside>');
    $("#steps-modal").modal({
      show: !1
    });
    $("#steps-modal").on("show.bs.modal", function() {
      $("body").addClass("modal__no-backdrop");
    });
    $("#steps-modal").on("hidden.bs.modal", function() {
      $("body").removeClass("modal__no-backdrop");
    }); 
    $(".ws-link").on("click tap", function(ev) {
      ev.preventDefault();
      let a = $(ev.currentTarget).data("target")
      , t = $(ev.currentTarget).parent()
      , i = t.find(".modal__info").html();
      $(a).find(".modal__info").html(i);
      $(a).modal("show");
    });
  }

  if($('.block--career-location-v2').length) {
    $('body').append('<aside class="modal modal__popup modal__wide fade" id="career-loc-modal" tabindex="-1" role="dialog" aria-labelledby="career-loc-modal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg nooverf" role="document"><div class="modal-content nooverf""><header class="modal-header"><button class="btn btn-transparent btn-close px-0 ml-auto" type="button" data-dismiss="modal" aria-label="Close"><div class="btn-close-text d-inline-block align-middle mr-1 sr-only">Close</div><div class="card__icon-plus svg__icon-plus z-2"><svg class="svg-icon capability__plus" width="32" height="32" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"></path></svg></div></button></header><section class="modal-body w-100 h-100 is-text--blue-30"><div class="inner modal__info"></div></section></div></div></aside>');
    $("#steps-modal").modal({
      show: !1
    });
    /*
    $("#career-loc-modal").on("show.bs.modal", function() {
      $("body").addClass("modal__no-backdrop");
    });
    $("#career-loc-modal").on("hidden.bs.modal", function() {
      $("body").removeClass("modal__no-backdrop");
    });
    */ 
    $(".cl-link").on("click tap", function(ev) {
      ev.preventDefault();
      let a = $(ev.currentTarget).data("target")
      , t = $(ev.currentTarget).parent()
      , i = t.find(".career__info").html();
      $(a).find(".modal__info").html(i);
      $(a).modal("show");
    });
  }

  if ($(".podcast-slider__inner").length) {
    $(".podcast-slider__inner").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      infinite: false,
      centerMode: false,
      autoplay: false,
      speed: 1000,
      dots: false,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
      ]
    });
  }

  if($(".block--quote-slider-customer-v2").length) {
    $(".block--quote-slider-customer-v2").each(function(index, elem) {
      $id = "#"+ $(elem).attr('id');
      $($id + " .js-quote__slider-text").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: false,
        asNavFor: $id + ' .js-quote__slider-image',
        speed: 1000,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      });

      $($id + " .js-quote__slider-image").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: false,
        asNavFor: $id + ' .js-quote__slider-text',
        speed: 1200,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      });
    });

  }



  if($(".js-caseStudy__slider").length) {
    $(".js-caseStudy__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 20000,
      dots: false,
      focusOnSelect: true,
      speed: 1000,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
    });

  }

  

  if($(".js-gallery__slider").length) {
    $(".js-gallery__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      centerMode: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 20000,
      dots: false,
      focusOnSelect: true,
      speed: 1000,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
          adaptiveHeight: true
        }
      }
      ]
    });

    if($(window).width() > 567) {
      $('.js-gallery__slider').on('setPosition', function (event, slick) {
        slick.$slides.find('.card').css('height', slick.$slideTrack.height() + 'px');
      });
    }
  }

  if($(".js-career__slider").length) {
    $(".js-career__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      centerMode: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 20000,
      dots: false,
      focusOnSelect: true,
      speed: 1000,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
          adaptiveHeight: true
        }
      }
      ]
    });

    if($(window).width() > 567) {
      $('.js-career__slider').on('setPosition', function (event, slick) {
        slick.$slides.find('.card').css('height', slick.$slideTrack.height() + 'px');
      });
    }
    

  }


  if($(".js-quote__slider").length) {
    $(".js-quote__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      centerMode: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 20000,
      dots: false,
      focusOnSelect: true,
      speed: 1000,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
          adaptiveHeight: true
        }
      }
      ]
    });

    if($(window).width() > 567) {
      $('.js-quote__slider').on('setPosition', function (event, slick) {
        slick.$slides.find('.card').css('height', slick.$slideTrack.height() + 'px');
      });
    }
    

  }



  if ($(".chout-slick").length) {
    $(".chout-slick").each(function () {
      $(this).slick({
        fade: true,
      });
    });
  }
  if ($(".block--header").length) {
    $(".block--header").each(function () {
      var section = $(this);
      var lines = $(this).find(".line");
      var shape = $(this).find('.shape');
      var image = $(this).find(".image");
      var quote = $(this).find(".header__quote");
      var headline = $(this).find(".header__text");
      var $transformOrigin = "top right";
      if(image.hasClass('header__imageV2')) {
        $transformOrigin = "bottom right";
      }
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          // markers: "true"
        },
      });
      tl.from(headline, {
        autoAlpha: 0,
        y: 24,
        duration: 1.5,
        ease: "power1.out",
        delay: 0.75,
      });
      tl.from(
        image,
        {
          autoAlpha: 0,
          rotation: 2,
          duration: 1.5,
          ease: "power1.out",
          transformOrigin: $transformOrigin,
        },
        "-=1"
        );
      lines.length && tl.from(
        lines,
        {
          autoAlpha: 0,
          rotation: 2,
          duration: 1.25,
          ease: "power1.out",
          transformOrigin: $transformOrigin,
          stagger: 0.35,
        },
        "-=1.15"
        );
      shape.length && tl.from(
        shape,
        { autoAlpha: 0, y: 14, duration: 1, ease: "power1.out" },
        "-=1.15"
        );
      quote.length && tl.from(
        quote,
        { autoAlpha: 0, y: 14, duration: 1, ease: "power1.out" },
        "-=1"
        );
    });
  }

  if ($(".blog-aside__cta").length) {
    var $height = $(".blog-aside__cta").height() + 240;
    $height = "top +=" + $height;
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        let lpSt = ScrollTrigger.create({
          trigger: ".blog-aside__cta",
          start: "top 100px",
          end: $height,
          endTrigger: "#stop",
          pin: ".blog-aside__cta",
        });
      },
    });
  }

  if ($(".glossary-body.has__sidebar .body__aside-inner").length) {
    var $height = $(".body__aside-inner").height() + 120;
    $height = "top +=" + $height;
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        let lpSt = ScrollTrigger.create({
          trigger: ".body__aside-inner",
          start: "top 100px",
          end: $height,
          endTrigger: "#stop",
          pin: ".body__aside-inner",
        });
      },
    });
  }

  if ($(".press-center__contact").length) {
    var $height = $(".press-center__contact").height() + 140;
    $height = "top +=" + $height;
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        let lpSt = ScrollTrigger.create({
          trigger: ".press-center__contact",
          start: "top 140px",
          end: 999999,
          endTrigger: "#stop",
          pin: ".press-center__contact",
        });
      },
    });
  }

  ScrollTrigger.create({
    start: "top -38",
    end: 99999,
    toggleClass: { className: "is-scrolled", targets: ".site-header" },
  });

  $(".quiz-radio").on("click", function (e) {
    if (e.target.tagName == "INPUT") {
      $(".quiz-radio").removeClass("is-checked");
      $(this).addClass("is-checked");
    }
  });

  if ($(".block--quote-slider").length) {
    $(".block--quote-slider").each(function () {
      let $slider = $(this).find(".swiper-wrapper");
      $slider.slick({
        centerMode: true,
        centerPadding: "10%",
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        slidesToShow: 3,
        dots: true,
        responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            centerPadding: "10%",
          },
        },
        ],
      });
    });
  }
  // Move Indicator on Tab Groups when clicked (.tab-group)
  const tabGroups = document.getElementsByClassName("tab-group");
  if (tabGroups) {
    Array.from(tabGroups).forEach(function (link) {
      link.addEventListener("click", moveTabIndicator);
    });
  }

  // Accordion Open/Close
  jQuery(".accordion__single").on("click", function () {
    let dropdown = jQuery(this).find(".accordion-drawer");
    dropdown.slideToggle();
  });

  let bgColor = $(".site-main section:last-child").css("background-color");
  $(".pre-footer").css("background-color", bgColor);

  function moveTabIndicator(e) {
    e.preventDefault();
    if (e.target.tagName == "A") {
      // Get .tab-group__indicator (will always be first child)
      // Get coordinates of .tab-group (parent)
      // Get coordinates of clicked target (a)
      // console.log(e.target.dataset.index);
      $(".swoop-slide").fadeOut();
      $(".tab-link").removeClass("is-active");
      $(e.target).addClass("is-active");

      $('.swoop-slide[data-index="' + e.target.dataset.index + '"]').fadeIn();
      $('.tabbed-slick[data-slick="' + e.target.dataset.slick + '"]').slick(
        "slickGoTo",
        e.target.dataset.index
        );
      const indicator = e.target.parentElement.firstElementChild,
      parent = e.target.parentElement.getBoundingClientRect(),
      position = e.target.getBoundingClientRect();

      $(indicator).attr("data-position", e.target.dataset.index);

      // Animamte width & left position of indicator
      gsap.to(indicator, {
        left: `${position.left - parent.left}px`,
        width: `${position.width}px`,
        duration: 0.5,
        ease: "expo.out",
      });
    }
  }
  if ($(".quiz-slider__slick").length) {
    $(".quiz-slider__slick").each(function () {
      let $arrows = $(this).next(".quiz-slider__controls");

      $(".quiz-slider__slick").slick({
        fade: true,
        arrows: true,
        appendArrows: $arrows,
        infinite: false,
        adaptiveHeight: true,
      });
    });
  }

  if ($(".testimonial-slider__slick").length) {
    $(".testimonial-slider__slick").each(function () {
      $(this).slick({
        arrows: true,
        adaptiveHeight: true,
      });
    });
  }
  if ($(".block--quiz-capability-category-page").length) {
    $(".block--quiz-capability-category-page").each(function () {
      let $slideParent = $(this);
      let $slideBody = $slideParent.find(".quiz-cont");
      $slideParent.find(".stage-toggle").on("click", function () {
        let stageIndex = $(this).attr("data-stage");
        $slideBody.attr("class", "quiz-cont container-stage-" + stageIndex);
      });
    });
  }
  if ($(".resource-aside").length) {
    MktoForms2.whenReady(function (form) {
      // Put your code that uses the form object here

      if ($(".resource-aside").length) {
        $(".resource-aside").each(function () {
          $aside = $(this);
          ScrollTrigger.matchMedia({
            "(min-width: 992px)": function () {
              let lpSt = ScrollTrigger.create({
                pin: ".resource__aside",
                start: "bottom 90%",
                endTrigger: "#stop",
                end: "bottom 90%",
                // markers: true
              });
            },
          });
        });
      }
    });
  }

  var sections = gsap.utils.toArray(".block--half-text");
  sections.forEach((section) => {
    let blob = section.querySelector(".stat-blob");
    let inner = section.querySelector(".stat-bubble__inner");
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center 80%",
      },
    });
    if (blob) {
      tl.from(blob, {
        opacity: 0,
        scale: 0.9,
        rotation: 5,
        duration: 1,
        ease: "power1.out",
      });
    }
    if (inner) {
      tl.from(
        inner,
        { opacity: 0, y: 30, duration: 1, ease: "power2.out" },
        "-=1"
        );
    }
  });

  let resourceSections = gsap.utils.toArray(".block--resource-banner");
  resourceSections.forEach((section) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center 80%",
      },
    });
    let page = section.querySelector(".stack__single");
    let text = section.querySelector(".resource-banner__text");
    tl.to(page, { rotation: 10, duration: 2, ease: "power1.out" });
    tl.from(
      text,
      { opacity: 0, x: 20, duration: 1.5, ease: "power1.inOut" },
      "-=2"
      );
  });
})();

$(window).load(function () {

  setTimeout(function(){
    if (typeof LC_API != "undefined") {
      var LC__variables = [
        { name: "FirstPageSeen", value: Cookies.get("handl_landing_page") },
        { name: "FirstWebsiteSource", value: Cookies.get("organic_source_str") },
        { name: "FirstReferralURL", value: Cookies.get("handl_original_ref") },
        { name: "LastReferralURL", value: Cookies.get("handl_ref") },
        { name: "PageFormSubmitted", value: Cookies.get("handl_url") },
        { name: "FirstUTMCampaign", value: Cookies.get("first_utm_campaign") },
        { name: "FirstUTMSource", value: Cookies.get("first_utm_source") },
        { name: "FirstUTMMedium", value: Cookies.get("first_utm_medium") },
        { name: "FirstUTMTerm", value: Cookies.get("first_utm_term") },
        { name: "FirstUTMContent", value: Cookies.get("first_utm_content") },
        { name: "LastUTMCampaign", value: Cookies.get("utm_campaign") },
        { name: "'LastUTMSource", value: Cookies.get("utm_source") },
        { name: "LastUTMMedium", value: Cookies.get("utm_medium") },
        { name: "LastUTMTerm", value: Cookies.get("utm_term") },
        { name: "LastUTMContent", value: Cookies.get("utm_content") },
        { name: "GCLID", value: Cookies.get("gclid") },
        ];
      LC_API.update_custom_variables(LC__variables);
    }
  }, 6000);

  if ($(".stat-number--scale").length) {
    fitty(".stat-number--scale", {
      minSize: 20,
      maxSize: 80,
    });
  }

  if ($(".partner__gridV2").length) {
    function getHashFilter() {
      var hash = location.hash;
      // get filter=filterName
      var matches = location.hash.match(/filter=([^&]+)/i);
      var hashFilter = matches && matches[1];
      return hashFilter && decodeURIComponent(hashFilter);
    }

    $(function () {
      var $grid = $(".partner__gridV2").isotope({
        itemSelector: ".partner-card",
        layoutMode: "fitRows",
      });

      // bind filter button click
      var $filters = $(".partner__filters .dropdown-item").on("click", function () {
        var filterAttr = $(this).attr("data-filter");
        // set filter in hash
        var $filterText = $(this).text();
        $(this).parent().parent().parent().find('.dropdown-toggle .text').text($filterText);
        $(this).parent().parent().children().removeClass('active');
        $(this).parent().addClass('active');
        location.hash = "filter=" + encodeURIComponent(filterAttr);
      });

      var isIsotopeInit = false;

      function onHashchange() {
        var hashFilter = getHashFilter();
        if (!hashFilter && isIsotopeInit) {
          return;
        }
        isIsotopeInit = true;
        // filter isotope
        $grid.isotope({
          itemSelector: ".element-item",
          filter: hashFilter,
        });
        // set selected class on button
        if (hashFilter) {
          $filters.find(".is-checked").removeClass("is-checked");
          $filters
          .find('[data-filter="' + hashFilter + '"]')
          .addClass("is-checked");
        }
      }

      $(window).on("hashchange", onHashchange);
      // trigger event handler to init Isotope
      onHashchange();
    });
  }



  if ($(".partner-directory__grid").length) {
    function getHashFilter() {
      var hash = location.hash;
      // get filter=filterName
      var matches = location.hash.match(/filter=([^&]+)/i);
      var hashFilter = matches && matches[1];
      return hashFilter && decodeURIComponent(hashFilter);
    }

    $(function () {
      var $grid = $(".partner-directory__grid").isotope({
        itemSelector: ".partner-card",
        layoutMode: "fitRows",
      });

      // bind filter button click
      var $filters = $(".filter-button-group").on("click", "a", function () {
        var filterAttr = $(this).attr("data-filter");
        // set filter in hash
        location.hash = "filter=" + encodeURIComponent(filterAttr);
      });

      var isIsotopeInit = false;

      function onHashchange() {
        var hashFilter = getHashFilter();
        if (!hashFilter && isIsotopeInit) {
          return;
        }
        isIsotopeInit = true;
        // filter isotope
        $grid.isotope({
          itemSelector: ".element-item",
          filter: hashFilter,
        });
        // set selected class on button
        if (hashFilter) {
          $filters.find(".is-checked").removeClass("is-checked");
          $filters
          .find('[data-filter="' + hashFilter + '"]')
          .addClass("is-checked");
        }
      }

      $(window).on("hashchange", onHashchange);
      // trigger event handler to init Isotope
      onHashchange();
    });
  }

  // var mySwiper = new Swiper(".swiper-container", {
  //   loop: true,
  //   slidesPerView: 1.25,
  //   spaceBetween: 5,
  //   centeredSlides: true,
  //   speed: 850,
  //   autoplay: true,
  //   // longSwipesRatio: .15,
  //   slideToClickedSlide: true,

  //   breakpoints: {
  //     // when window width is >= 992px
  //     640: {
  //       slidesPerView: 1.5,
  //     },
  //     992: {
  //       slidesPerView: 2.5,
  //       spaceBetween: 30,
  //     },
  //     1200: {
  //       slidesPerView: 3.5,
  //     },
  //   },

  //   // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  //   // autoplay: {
  //   //   delay: 4000
  //   // },
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  if ($(window).width() < 992) {
    $("#primary-mobile-menu").on("click", function () {
      $("#primary-mobile-menu").toggleClass("is-open");
    });
    $("#primary-menu-list .menu-item-has-children").on("click", function (e) {
      if (e.target.tagName !== "A" && $(e.target).hasClass("level-0")) {
        $(e.target).toggleClass("is-open");
      }
    });
  }

  $(".site-header__search-toggle").on("click", function () {
    $("body").toggleClass("nav-search-open");
    if($("body").hasClass("nav-search-open")) {
      $('.site-header__search .search-field').focus();
    }
  });

  // Debounce Function
  function debounce(cb, time) {
    let debounceTimeoutId;

    return function (...args) {
      clearTimeout(debounceTimeoutId);
      debounceTimeoutId = setTimeout(() => cb.apply(this, args), time);
    };
  }

  let calcUtils = {
    formatter: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    }),
    incrementValue: function (val) {
      val = val.replace(/\D/g, "");
      val = parseInt(val);
      val = val + 1000000;
      val = this.formatter.format(val);
      return val;
    },
    decrementValue: function (val) {
      val = val.replace(/\D/g, "");
      val = parseInt(val);
      val = val - 1000000;
      if (val <= 0) {
        return 0;
      } else {
        return this.formatter.format(val);
      }
    },
    translateNumber: function ($val, divider) {
      $total = $val.val();
      $int = calcUtils.formatCurrencytoInt($total);
      let percentage = ($int / divider) * 100;
      return Math.round(percentage);
    },
    formatCurrencytoInt: function (val) {
      val = val.replace(/,/g, "");
      val = val.replace(/\$/g, "");
      val = parseInt(val);
      return val;
    },
    getValues: function (arr) {
      let values = jQuery.map(arr, function (field) {
        return $(field).val();
      });
      return values;
    },
    updateGraph: function (fields, chart, divider) {
      totalValHigh = fields.totalValue.val();
      let newValues = calcUtils.getValues(fields.graphFields);
      let newLegendValues = calcUtils.getValues(fields.legendFields);

      if (divider) {
        newValues = $.map(fields.graphFields, function (field) {
          return calcUtils.translateNumber(field, divider);
        });
      }
      chart.data.datasets[0].data = newValues;
      chart.data.datasets[0].legendData = newLegendValues;
      chart.update();
      $("#graphTotal").text(totalValHigh);
      document.getElementById("chartLegend").innerHTML = chart.generateLegend();
    },
    createGraph: function (formFields, divider) {
      var ctx = document
      .getElementById(formFields.graphTarget)
      .getContext("2d");
      let dataValues = this.getValues(formFields.graphFields);
      let legendValues = this.getValues(formFields.legendFields);

      if (divider) {
        dataValues = $.map(formFields.graphFields, function (field) {
          return calcUtils.translateNumber(field, divider);
        });
      }
      var chartData = {
        datasets: [
        {
          data: dataValues,
          legendData: legendValues ? legendValues : dataValues,
          backgroundColor: formFields.graphColors,
        },
        ],
        labels: formFields.graphLabels,
      };
      let options = {
        legend: {
          display: false,
        },
        legendCallback: function (chart) {
          let dataArr = chart.data.datasets[0];
          let labelArr = chart.data.labels;
          var text = [];
          text.push("<ul class='graph-legend__ul'>");
          for (var i = 0; i < dataArr.data.length; i++) {
            text.push("<li class='graph-legend__li'>");
            text.push(
              '<span class="graph-legend__swatch" style="background-color:' +
              dataArr.backgroundColor[i] +
              '"></span><span class="graph-legend__label">' +
              labelArr[i] +
              "<span class='graph-legend__num'>" +
              dataArr.legendData[i] +
              "</span></span>"
              );
            text.push("</li>");
          }
          text.push("</ul>");
          return text.join("");
        },
      };
      let myDoughnutChart = new Chart(ctx, {
        type: "doughnut",
        data: chartData,
        options: options,
      });

      document.getElementById(
        "chartLegend"
        ).innerHTML = myDoughnutChart.generateLegend();
      $("#graphTotal").text(formFields.totalValue.val());

      return myDoughnutChart;
    },
  };

  if ($(".block--cpq-calc").length) {
    $(document).on("keypress", ".gform_wrapper", function (e) {
      let code = e.keyCode || e.which;
      if (code == 38 && !$(e.target).is('textarea,input[type="submit"]')) {
        e.preventDefault();
        return false;
      }
    });
    $(".block--cpq-calc").each(function () {
      let formID = $(this).find(".gform_anchor").attr("id").split("_").pop();

      let formFields = {
        formID: formID,
        graphTarget: "myChart",
        totalValue: $(`#input_${formID}_28`),
        graphFields: [
          $(`#input_${formID}_33`),
          $(`#input_${formID}_34`),
          $(`#input_${formID}_35`),
          $(`#input_${formID}_36`),
          ],
        legendFields: [
          $(`#input_${formID}_33`),
          $(`#input_${formID}_34`),
          $(`#input_${formID}_35`),
          $(`#input_${formID}_36`),
          ],
        graphColors: ["#116fbb", "#736ac7", "#f0bd4d", "#c94a65"],
        graphLabels: [
          "Sales Effectiveness, Quoting Capacity",
          "Go-to-Market Effectiveness",
          "Pricing Discipline, Margin Management",
          "Back Office and Supply Chain Efficiency",
          ],
      };

      let myDoughnutChart = calcUtils.createGraph(formFields, false);

      gform.addAction(
        "gform_input_change",
        debounce(function () {
          calcUtils.updateGraph(formFields, myDoughnutChart);
        }, 50),
        10,
        3
        );
    });
  }

  $("input").on("keyup", function (e) {
    var code = e.keyCode || e.which;
    if (code == 38 && $(e.target).is('input[type="text"]')) {
      let $target = $(e.target);
      let $value = calcUtils.incrementValue($(e.target).val());
      $target.val($value).change();
    }
    if (code == 40 && $(e.target).is('input[type="text"]')) {
      let $target = $(e.target);
      let $value = calcUtils.decrementValue($(e.target).val());
      $target.val($value).change();
    }
  });

  if ($(".block--roi-calc").length) {
    $(".block--roi-calc").each(function () {
      let formID = $(this).find(".gform_anchor").attr("id").split("_").pop();

      let formFields = {
        formID: formID,
        graphTarget: "myChart",
        totalValue: $(`#input_${formID}_110`),
        graphFields: [
          $(`#input_${formID}_106`),
          $(`#input_${formID}_108`),
          $(`#input_${formID}_109`),
          $(`#input_${formID}_107`),
          ],
        legendFields: [
          $(`#input_${formID}_106`),
          $(`#input_${formID}_108`),
          $(`#input_${formID}_109`),
          $(`#input_${formID}_107`),
          ],
        graphColors: ["#116fbb", "#736ac7", "#f0bd4d", "#c94a65"],
        graphLabels: [
          "Analytics",
          "Price Management",
          "Price Optimization",
          "Deal Management",
          ],
      };

      let divider = calcUtils.formatCurrencytoInt(formFields.totalValue.val());
      let myDoughnutChart = calcUtils.createGraph(formFields, divider);

      gform.addAction(
        "gform_input_change",
        debounce(function () {
          calcUtils.updateGraph(formFields, myDoughnutChart, divider);
        }, 50),
        10,
        3
        );
    });
  }

  $("#showDownloadForm").on("click", function () {
    $(this).fadeOut();
    $(".gform_body > .gform_fields").slideUp("slow");
    $(".roi__2col-fields").slideUp("slow");
    $("#formContact").slideDown("slow");
    $(".gform_footer").show();
  });

  if ($('#regenerateQuiz').length) {

    let $entryID = $('#regenerateQuiz').attr('data-entry');

    $(document).ready(function () {


      let data = {
        'action': 'generateQuizPDF',
        'entry': $entryID,
        'nonce': Theme_AJAX.nonce
      };

      $.ajax({
        type: 'POST',
        url: Theme_AJAX.ajax_url,
        data: data,
        success: function (data) {
          $('#pdfLink').html(data.data.response);
        },
        error: function (data) {
          $('#pdfLink').html(data.data.response);
        }
      })
    })
  }

  if ($(window).width() < 992) {
    $("#primary-mobile-menu").on("click", function () {
      $(".site-header__nav .primary-menu-container").slideToggle();
      $("#primary-mobile-menu").toggleClass("is-open");
    });
    $("#primary-menu-list .menu-item-has-children").on("click", function (e) {
      if (e.target.tagName !== "A" && $(e.target).hasClass("level-0")) {
        $(e.target).find("> .sub-menu").slideToggle();
        $(e.target).toggleClass("is-open");
      }
    });
  }

  



});

$(document).ready(function() {

  // MicroModal.init();

  if($('.block--world-map [data-toggle="popover"]').length) {
    $('.block--world-map [data-toggle="popover"]').popover({
      'html': true,
      'trigger': 'click',
      'container': '.block--world-map'
    });
    $(document).on('show.bs.popover', '.block--world-map [data-toggle="popover"]', function() {
      $(this).addClass('popover-open');
      $('.block--world-map [data-toggle="popover"]').not(this).popover('hide');
    });
    $(document).on('hide.bs.popover', '.block--world-map [data-toggle="popover"]', function() {
      $(this).removeClass('popover-open');
    });
  }

  if($('.block--people-storytelling-v2').length) {

    var $isDragging = false;

    $('#people-modal').appendTo(document.body);

    $("#people-modal").modal({
      show: !1
    });

    $(".js-team__slider-inner").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 20000,
      dots: true,
      focusOnSelect: true,
      speed: 1000,
      fade: true,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true
        }
      }
      ]
    });

    $(document).on("click tap", ".modal-people-link" ,function(ev) {
      ev.preventDefault();
      var $panelTeamSlider = $(ev.currentTarget).parents('.people-modal').eq(0).find('.js-team__slider'),
      $panelTeamSliderCards = $(ev.currentTarget).parents('.people-modal').eq(0).find('.js-team__slider .slick-active').find('.card__team'),
      $imageClone = $(ev.currentTarget).parents('.people-modal').eq(0).find('.people__image-clone'),
      $panelCopy = $(ev.currentTarget).parents('.people-modal').eq(0).find('.js-team__content').children();

      if(!$isDragging && !($panelTeamSlider.hasClass('is-swipping'))) {
        var a = $(ev.currentTarget).data("target")
        , t = $(ev.currentTarget).parent()
        , x = t.find(".people__image .img-container").html()
        , y = t.find(".people__title").text()
        , z = t.find(".people__job-title").text()
        , k = t.find(".people__content");

        $imageClone.css({"width": t.find(".people__image").width()})
        $imageClone.find(".img-container").html(x);

        var $ixPos0 = t.find(".people__image")[0].getBoundingClientRect().left;
        var $ixPos1 = $(a).find(".people__image")[0].getBoundingClientRect().left;
        var $iyPos0 = t.find(".people__image")[0].getBoundingClientRect().top;
        var $iyPos1 = $(a).find(".people__image")[0].getBoundingClientRect().top;
        var $ixPosF = $ixPos1 - $ixPos0;
        var $iyPosF = $iyPos1 - $iyPos0;
        var $iscale = $(a).find(".people__image").width() / t.find(".people__image").width();
        var $irotation = 0;       

        $(a).find(".people__image .img-container").empty();
        $(a).find(".people__title").empty();
        $(a).find(".people__job-title").empty();

        $(a).find(".people__image .img-container").html(x);
        $(a).find(".people__title").text(y);
        $(a).find(".people__job-title").text(z);

        $(a).find('.js-team__slider-inner').slick('slickRemove', null, null, true);
        k.each(function(index, elem) {
          $(a).find('.js-team__slider-inner').slick('slickAdd', $(elem).html());
        });
        var tl = gsap.timeline({ 
          onComplete: function() { 
            setTimeout( function(){ 
              $('.people__image-clone').removeClass("show");
            } , 120 );
          } 
        });
        tl.set($imageClone, {className: 'people__image-clone show'})
        .set($imageClone, { x: $ixPos0, y: $iyPos0 })
        tl.add('start')
        .to($panelTeamSlider, 0.25, { ease: 'in-out-smooth', opacity: 0 }, 'start')
        .to($panelTeamSliderCards, 0.25, { ease: 'in-out-smooth', opacity: 0, y: 20, stagger: 0.05 }, 'start')
        .to($panelCopy, 0.35, { ease: 'in-out-smooth', opacity: 0, y:20, stagger: 0.05, 
          onComplete: function() {
            $("#people-modal-inner").collapse("show");
          }
        }, 'start')  
        .to($imageClone, 0.65, { ease: 'in-out-smooth', x: $ixPos1, y: $iyPos1, scale: $iscale, rotation: $irotation }, 'start');
       //  $(a).collapse("show");
      }
    });

    $('#people-modal-inner').on('show.bs.collapse', function (ev) {
      var $panelTeamSlider = $(ev.currentTarget).find('.js-team__slider-inner'),
      $panelTeamSliderCards = $(ev.currentTarget).find('.js-team__slider-inner .slick-active').find('.inner'),
      $panelCopy = $(ev.currentTarget).find('.fadeinModal');
      var tl = gsap.timeline({ });
      tl.set($panelTeamSlider, { opacity: 1 })
      .set($panelTeamSliderCards, { opacity: 0, y: 20 })
      .set($panelCopy, { opacity: 0, y: 20 });
    });

    $('#people-modal-inner').on('shown.bs.collapse', function (ev) {
      $('.js-team__slider-inner').slick('setPosition');
      $('.js-team__slider-inner').addClass('open');
      var $panelTeamSlider = $(ev.currentTarget).find('.js-team__slider-inner'),
      $panelTeamSliderCards = $(ev.currentTarget).find('.js-team__slider-inner .slick-active').find('.inner'),
      $panelCopy = $(ev.currentTarget).find('.fadeinModal');
      var tl = gsap.timeline({ });
      tl.add('start')
      .to($panelTeamSliderCards, 0.25, { ease: 'in-out-smooth', opacity: 1, y: 0, stagger: 0.05 }, 'start')
      .to($panelCopy, 0.35, { ease: 'in-out-smooth', opacity: 1, y: 0, stagger: 0.05}, 'start')
    });

    $('#people-modal-inner').on('hidden.bs.collapse', function (ev) {
      $('.js-team__slider-inner').slick('setPosition');
      $('.js-team__slider-inner').removeClass('open');
      var $panelTeamSlider = $(ev.currentTarget).parents('.people-modal').eq(0).find('.js-team__slider'),
      $panelTeamSliderCards = $(ev.currentTarget).parents('.people-modal').eq(0).find('.js-team__slider .slick-active').find('.card__team'),
      $panelCopy = $(ev.currentTarget).parents('.people-modal').eq(0).find('.js-team__content').children();

      var tl = gsap.timeline({ });
      tl.set($panelTeamSlider, { opacity: 1 })
      .add('start')
      .to($panelTeamSliderCards, 0.25, { ease: 'in-out-smooth', opacity: 1, y: 0, stagger: 0.05 }, 'start')
      .to($panelCopy, 0.35, { ease: 'in-out-smooth', opacity: 1, y: 0, stagger: 0.05}, 'start')  
    });

    $('#people-modal').on('show.bs.modal', function (ev) {
      var $panelTeamSlider = $(ev.currentTarget).find('.js-team__slider'),
      $panelTeamSliderCards = $(ev.currentTarget).find('.js-team__slider .slick-active').find('.card__team'),
      $panelCopy = $(ev.currentTarget).find('.js-team__content').children();
      var tl = gsap.timeline({ });
      tl.set($panelTeamSlider, { opacity: 1 })
      .set($panelTeamSliderCards, { opacity: 0, y: 20 })
      .set($panelCopy, { opacity: 0, y: 20 });
    });

    $('#people-modal').on('shown.bs.modal', function (ev) {
      $('.js-team__slider').slick('setPosition');
      $('.js-team__slider').addClass('open');
      var $panelTeamSlider = $(ev.currentTarget).find('.js-team__slider'),
      $panelTeamSliderCards = $(ev.currentTarget).find('.js-team__slider .slick-active').find('.card__team'),
      $panelCopy = $(ev.currentTarget).find('.js-team__content').children();

      var tl = gsap.timeline({ });
      tl.add('start')
      .to($panelTeamSliderCards, 0.25, { ease: 'in-out-smooth', opacity: 1, y: 0, stagger: 0.05 }, 'start')
      .to($panelCopy, 0.35, { ease: 'in-out-smooth', opacity: 1, y: 0, stagger: 0.05}, 'start');
    });

    $('#people-modal').on('hidden.bs.modal', function (ev) {
      $('.js-team__slider').slick('setPosition');
      $('.js-team__slider').removeClass('open');
    });

    if($(".js-team__slider").length) {
      $(".js-team__slider").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        centerMode: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 20000,
        dots: false,
        focusOnSelect: true,
        speed: 1000,
        arrows: false,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            adaptiveHeight: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            adaptiveHeight: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            adaptiveHeight: false
          }
        },
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            adaptiveHeight: true
          }
        }
        ]
      });


      $('.js-team__slider').on('swipe', function(event, slick, direction){
        $isDragging = true;
        $('.js-team__slider').addClass('is-swipping');
      });

      $('.js-team__slider').off('afterChange').on('afterChange', function(event, slick, currentSlide, nextSlide){
        setTimeout( function(){
          $isDragging = false;
          $('.js-team__slider').removeClass('is-swipping'); 
        } , 110 );
      });

      /*
      if($(window).width() > 567) {
        $('.js-team__slider').on('setPosition', function (event, slick) {
          slick.$slides.find('.card').css('height', slick.$slideTrack.height() + 'px');
        });
      }
      */
    }
  }

  if ($(window).width() > 991) {
    if($('#site-navigation .two-column.columns-stacked').length) {
      var $maxDropdownHeight = 0;
      $('.two-column.columns-stacked').on('mouseenter', function(ev) {
        var $items = $(ev.currentTarget).find('.level-1');
        $items.each(function(index, elem){
          var $elem = $(elem);
          var $elemHeight = $elem.outerHeight();
          $elem.css({
            height: $elemHeight
          });
          if($maxDropdownHeight < $elemHeight) {
            $maxDropdownHeight = $elemHeight;
          }
        });

        $('#site-navigation .two-column.columns-stacked > .sub-menu > .sub-menu__inner').css({
          height: $maxDropdownHeight + 60
        });
      });
    }
  }

  function popupSetCookie(cname, cvalue, exhours) {
    let d = new Date();
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000)); 
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires; 
  } 

  function popupGetCookie(cname) {
    let name = cname + "="; 
    let ca = document.cookie.split(';'); 
    for (let i = 0; i < ca.length; i++) { 
      let c = ca[ i ]; 
      while (c.charAt(0) == ' ') {
        c = c.substring(1); 
      } 
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length); 
      } 
    } 
    return ""; 
  }

  if($('#exit-modal').length) {
    $("html").on('mouseleave', function() {
      var popUp = popupGetCookie("vendavo_popup");
      if (popUp != "") {} else {
        MicroModal.show('exit-modal');
        var popUp = 1;
        var popUpCookieDuration = $('#exit-modal').attr('data-cookie-duration');
        popupSetCookie("vendavo_popup", popUp, popUpCookieDuration); 
      } 
    });

    $('.btn-open-exit-modal').on('click', function(ev){
      ev.preventDefault();
      MicroModal.show('exit-modal');
    });
  }

  if($('.m-form').length) {
    $('.m-form').each(function(index, elem){
      var $formID = $(elem).attr('id').replace("mktoForm_", "");
      MktoForms2.loadForm("//app-abb.marketo.com", "526-WQV-792", $formID);
    });
  }

  if($('.js-related__slider').length) {
    $('.js-related__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      infinite: false,
      centerMode: false,
      autoplay: false,
      speed: 1000,
      dots: false,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
      ]
    });

    $('.js-related__slider').on('setPosition', function (event, slick) {
      slick.$slides.find('.card-slider').css('height', slick.$slideTrack.height() + 'px');
    });
  }

  if($(".js-videoCard__slider").length) {
    $(".js-videoCard__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      centerMode: false,
      autoplay: false,
      speed: 1000,
      dots: false,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    });

    $('.js-videoCard__slider').on('setPosition', function (event, slick) {
      slick.$slides.find('.card').css('height', slick.$slideTrack.height() + 'px');
    });

  }

  if($(".js-resourceCard__slider").length) {
    $(".js-resourceCard__slider").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      infinite: false,
      centerMode: false,
      autoplay: false,
      speed: 1000,
      dots: false,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
      ]
    });

    $('.js-resourceCard__slider').on('setPosition', function (event, slick) {
      slick.$slides.find('.card').css('height', slick.$slideTrack.height() + 'px');
    });

  }

  if ($(".js-resourceFeatured__slider").length) {
    $(".js-resourceFeatured__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      centerMode: false,
      autoplay: false,
      speed: 1000,
      dots: false,
      rows: 3,
      slidesPerRow: 1,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M12 304l292 -292c17,-16 43,-16 59,0 16,16 16,42 0,59l-263 263 263 263c16,16 16,43 0,59 -16,16 -42,16 -59,0l-292 -293c-16,-16 -16,-42 0,-59z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 375 668"><path d="M363 304l-292 -292c-17,-16 -43,-16 -59,0 -16,16 -16,42 0,59l263 263 -263 263c-16,16 -16,43 0,59 16,16 42,16 59,0l292 -293c16,-16 16,-42 0,-59z"/></svg></button>',
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          rows: 1,
          slidesPerRow: 1
        }
      }
      ]
    });

  }

  if($('.res-filter').length) {
    var urlTarget = window.location.href;
    $('.res-filter a[href="' +urlTarget+ '"]').addClass("found");
    $('.res-filter a[href="' +urlTarget+ '"]').closest(".dropdown").addClass("is-active");
    if($(window).width() > 992) {
      $('.res-filter.dropdown').on('mouseenter', function(ev) {
        $(ev.currentTarget).addClass('show');
        $(ev.currentTarget).find('.dropdown-menu').addClass('show');   
      }); 
      $('.res-filter.dropdown').on('mouseleave', function(ev) {
        $(ev.currentTarget).removeClass('show');
        $(ev.currentTarget).find('.dropdown-menu').removeClass('show');
      });
    }
  }

  $(document).on('click', '.btn-ajax', function(ev) {
    ev.preventDefault();
    var el = $(ev.currentTarget);
    var nextPage = el.data('next-page');
    var maxPages = el.data('max-pages');
    var postType = el.data('post-type');
    var nonce = el.data('nonce');
    var termType = el.data('term-type');
    var termID = el.data('term-id');
    var loopEl = el.parents('.ajax-container').eq(0).find('.ajax-loop');
    if(nextPage <= maxPages) {
      loopEl.addClass('is-loading');
      $.ajax({
        url: Theme_AJAX.ajax_url,
        type: "post",
        data: {
          action: 'ajax_vendor_pagination',
          post_type: postType,
          termID: termID,
          termType: termType,
          paged: nextPage,
          nonce: nonce
        }
      }).done(function(response) {

        loopEl.append(response);
        gsap.fromTo('.card-item.todisplay', .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, force3D: !0, ease: Cubic.easeOut, stagger: 0.1 } );
        $(".card-item.todisplay").removeClass("todisplay");
        nextPage++;
        if(nextPage > maxPages) {
          el.parent().hide().remove();
        }
        el.data('next-page', nextPage);
        loopEl.removeClass('is-loading');
      });
    } else {
      el.parent().hide().remove();
    }
  });


  $('.btn-ajax-search').each(function(index, elem) {
    var el = $(elem);
    var nextPage = el.data('next-page');
    var maxPages = el.data('max-pages');
    var searchTerm = el.data('search-term');
    var nonce = el.data('nonce');
    var loopEl = el.parents('.ajax-container').eq(0).find('.ajax-loop');
    ScrollTrigger.create({
      trigger: ".btn-ajax-search",
      start: "top bottom+=1000px",
      end: 99999,
      onUpdate: self => {
        if(!el.hasClass("active")) {
          el.addClass('active');
          if(nextPage <= maxPages) {
            loopEl.addClass('is-loading');
            $.ajax({
              url: Theme_AJAX.ajax_url,
              type: "post",
              data: {
                action: 'ajax_search_pagination',
                search_term: searchTerm,
                paged: nextPage,
                nonce: nonce
              }
            }).done(function(response) {

              loopEl.append(response);
              gsap.fromTo('.card-item.todisplay', .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, force3D: !0, ease: Cubic.easeOut, stagger: 0.1 } );
              $(".card-item.todisplay").removeClass("todisplay");
              nextPage++;
              if(nextPage > maxPages) {
                el.parent().hide().remove();
              }
              el.data('next-page', nextPage);
              loopEl.removeClass('is-loading');
              el.removeClass('active');
            });
          } else {
            el.parent().hide().remove();
          }
        }

      }
    });
  });

  $(document).on('click', '.btn-ajax-search', function(ev) {
    ev.preventDefault();
    var el = $(ev.currentTarget);
    var nextPage = el.data('next-page');
    var maxPages = el.data('max-pages');
    var searchTerm = el.data('search-term');
    var nonce = el.data('nonce');
    var loopEl = el.parents('.ajax-container').eq(0).find('.ajax-loop');
    if(nextPage <= maxPages) {
      loopEl.addClass('is-loading');
      $.ajax({
        url: Theme_AJAX.ajax_url,
        type: "post",
        data: {
          action: 'ajax_search_pagination',
          search_term: searchTerm,
          paged: nextPage,
          nonce: nonce
        }
      }).done(function(response) {

        loopEl.append(response);
        gsap.fromTo('.card-item.todisplay', .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0, force3D: !0, ease: Cubic.easeOut, stagger: 0.1 } );
        $(".card-item.todisplay").removeClass("todisplay");
        nextPage++;
        if(nextPage > maxPages) {
          el.parent().hide().remove();
        }
        el.data('next-page', nextPage);
        loopEl.removeClass('is-loading');
      });
    } else {
      el.parent().hide().remove();
    }
  });

});




$(window).on('resize', function () {
  if($('.js-related__slider').length) {
    $('.js-related__slider .card-slider').css('height', '');
  }
  if ($(".js-resourceCard__slider").length) {
    $('.js-resourceCard__slider .card').css('height', '');
  }
  if ($(".js-quote__slider").length) {
    $('.js-quote__slider .card').css('height', '');
  }
  if ($(window).width() > 991) {
    if($('#site-navigation .two-column.columns-stacked').length) {
      var $maxDropdownHeight = 0;
      $('.two-column.columns-stacked').on('mouseenter', function(ev) {
        var $items = $(ev.currentTarget).find('.level-1');
        $items.each(function(index, elem){
          var $elem = $(elem);
          var $elemHeight = $elem.outerHeight();
          $elem.css({
            height: $elemHeight
          });
          if($maxDropdownHeight < $elemHeight) {
            $maxDropdownHeight = $elemHeight;
          }
        });

        $('#site-navigation .two-column.columns-stacked > .sub-menu > .sub-menu__inner').css({
          height: $maxDropdownHeight + 60
        });
      });
    }
  }
});