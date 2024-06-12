(function($){var WidgetCTPostCarouselHandler=function($scope,$){var breakpoints=elementorFrontend.config.breakpoints;var carousel=$scope.find(".ct-slick-carousel");var data=carousel.data();var slickOptions={slidesToShow:data.colxl,slidesToScroll:data.slidestoscroll,autoplay:!0===data.autoplay,autoplaySpeed:data.autoplayspeed,infinite:!0===data.infinite,pauseOnHover:!0===data.pauseonhover,speed:data.speed,arrows:!0===data.arrows,dots:!0===data.dots,rtl:!0===data.dir,responsive:[{breakpoint:1200,settings:{slidesToShow:data.collg}},{breakpoint:992,settings:{slidesToShow:data.colmd}},{breakpoint:767,settings:{slidesToShow:data.colsm}},{breakpoint:575,settings:{slidesToShow:data.colxs,slidesToScroll:data.colxs,}},]};var nav_for=$scope.find(".ct-slick-nav");if(nav_for.length>0){slickOptions.asNavFor=nav_for}
if(typeof carousel.attr('data-centerMode')!=='undefined'){slickOptions.centerMode=carousel.attr('data-centerMode')=='true'?!0:!1}
if(typeof carousel.attr('data-vertical')!=='undefined'){slickOptions.vertical=carousel.attr('data-vertical')=='true'?!0:!1}
carousel.slick(slickOptions);$('.ct-nav-carousel').parents('.elementor-element').addClass('hide-nav');$('.ct-nav-carousel .nav-prev').on('click',function(){$(this).parents('.elementor-element').find('.slick-prev').trigger('click')});$('.ct-nav-carousel .nav-next').on('click',function(){$(this).parents('.elementor-element').find('.slick-next').trigger('click')});$('.ct-portfolio-carousel4 .ct-portfolio-images .slick-next').on('click',function(){$(this).parents('.ct-portfolio-carousel4').find('.ct-portfolio-content .slick-next').trigger('click')});$('.ct-portfolio-carousel4 .ct-portfolio-images .slick-prev').on('click',function(){$(this).parents('.ct-portfolio-carousel4').find('.ct-portfolio-content .slick-prev').trigger('click')})};$('.ct-slick-slider').each(function(){var slider_main=$(this).find('.ct-slick-carousel');var slider_nav=$(this).find('.ct-slick-nav');$(slider_nav).slick({slidesToShow:parseInt(slider_nav.attr('data-nav')),slidesToScroll:1,asNavFor:slider_main,dots:!1,arrows:!1,centerMode:!0,infinite:!0,focusOnSelect:!0,autoplay:!1,autoplaySpeed:8000,speed:800,rtl:!0===slider_nav.data('dir'),responsive:[{breakpoint:768,settings:{slidesToShow:1}}]})});$(window).on('elementor/frontend/init',function(){elementorFrontend.hooks.addAction('frontend/element_ready/ct_blog_carousel.default',WidgetCTPostCarouselHandler);elementorFrontend.hooks.addAction('frontend/element_ready/ct_service_carousel.default',WidgetCTPostCarouselHandler);elementorFrontend.hooks.addAction('frontend/element_ready/ct_portfolio_carousel.default',WidgetCTPostCarouselHandler);elementorFrontend.hooks.addAction('frontend/element_ready/ct_gallery_carousel.default',WidgetCTPostCarouselHandler);elementorFrontend.hooks.addAction('frontend/element_ready/ct_testimonial_carousel.default',WidgetCTPostCarouselHandler);elementorFrontend.hooks.addAction('frontend/element_ready/ct_team_carousel.default',WidgetCTPostCarouselHandler);elementorFrontend.hooks.addAction('frontend/element_ready/ct_client_carousel.default',WidgetCTPostCarouselHandler);elementorFrontend.hooks.addAction('frontend/element_ready/ct_feature_carousel.default',WidgetCTPostCarouselHandler);elementorFrontend.hooks.addAction('frontend/element_ready/ct_award_carousel.default',WidgetCTPostCarouselHandler);elementorFrontend.hooks.addAction('frontend/element_ready/ct_offer_carousel.default',WidgetCTPostCarouselHandler);elementorFrontend.hooks.addAction('frontend/element_ready/ct_service_external.default',WidgetCTPostCarouselHandler)})})(jQuery)