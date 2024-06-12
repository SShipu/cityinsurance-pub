<template>
    <section class="elementor-section elementor-top-section elementor-element elementor-element-276a815 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div class="elementor-container elementor-column-gap-extended">
        <div class="elementor-row">
          <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7eece5d">
            <div class="elementor-column-wrap elementor-element-populated">
              <div class="elementor-widget-wrap">
                <div class="elementor-element elementor-element-89df387 elementor-widget elementor-widget-ct_heading">
                  <div class="elementor-widget-container">
                    <div class="ct-heading ct-heading-default h-align-">
                      <div class="ct-heading--inner">
                        <h3 class="item--title">We’ve achieved many national awards for our success.</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="elementor-element elementor-element-6656871 elementor-widget elementor-widget-ct_text_editor">
                  <div class="elementor-widget-container">
                    <div id="ct_text_editor-6656871" class="ct-text-editor">
                      <div class="ct-item--inner">
                        <div class="ct-text-editor elementor-clearfix">
                          Our business leaders have come a long way. There are numerous areas in which our business leaders, through their creativity & entrepreneurship.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a67b4dc">
            <div class="elementor-column-wrap elementor-element-populated">
              <div class="elementor-widget-wrap">
                <div class="elementor-element elementor-element-a5f4db9 elementor-widget elementor-widget-ct_award_carousel">
                  <div class="elementor-widget-container">
                    <div class="ct-award-wrap">
                      <div class="ct-award-image">
                        <img src="https://cityinsurance.com.bd/wp-content/uploads/2020/03/award-medal.png" alt="Award Medal" />
                      </div>
                      <Carousel :items-to-show="1" :wrap-around="true" class="ct-slick-carousel">
                        <Slide v-for="(award, index) in awards" :key="index">
                            <div class="item--inner">
                            <div class="item--image">
                                <img :src="award.image" :alt="award.title" />
                            </div>
                            <div :style="{ backgroundImage: `url(${award.imageBg})` }" class="item--image-bg bg-image"></div>
                            <div class="item--holder">
                                <div class="item--logo">
                                <img :src="award.logo" alt="" />
                                </div>
                                <h3 class="item--title">{{ award.title }} <b>{{ award.year }}</b></h3>
                            </div>
                            </div>
                        </Slide>
                        </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
  
  
      const awards = ref([
        {
          image: 'https://cityinsurance.com.bd/wp-content/uploads/2023/11/ICAB-scaled-1-1-400x300.jpg',
          imageBg: 'https://cityinsurance.com.bd/wp-content/uploads/2023/11/ICAB-scaled-1-1.jpg',
          logo: 'https://cityinsurance.com.bd/wp-content/uploads/2023/10/2893logo.png',
          title: 'ICAB 23rd National Award',
          year: '2022',
        },
        {
          image: 'https://cityinsurance.com.bd/wp-content/uploads/2023/11/Media-1-1.jpg',
          imageBg: 'https://cityinsurance.com.bd/wp-content/uploads/2023/11/Media-1-1.jpg',
          logo: 'https://cityinsurance.com.bd/wp-content/uploads/2023/10/ICSB-Logo-2-2.jpg',
          title: '10th ICSB National Award',
          year: '2022',
        },
        {
          image: 'https://cityinsurance.com.bd/wp-content/uploads/2023/11/4_SAFA-scaled-1-1-1-1.jpeg',
          imageBg: 'https://cityinsurance.com.bd/wp-content/uploads/2023/11/4_SAFA-scaled-1-1-1-1.jpeg',
          logo: 'https://cityinsurance.com.bd/wp-content/uploads/2023/10/logo1-2.png',
          title: 'South Asian Federation of Accountants',
          year: '2021',
        },
      ]);
  
      
  </script>
  
  <style scoped>
  .elementor-section {
    width: 100%;
    margin-left: -15px; /* Adjust the left margin to properly align the section */
  }
  
  .ct-award-wrap {
    position: relative;
  }
  
  .ct-award-image img {
    display: block;
    margin: 0 auto;
  }
  
  .item--inner {
    text-align: center;
  }
  
  .item--image {
    position: relative;
  }
  
  .item--image-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  
  .item--holder {
    margin-top: 20px;
  }
  
  .item--logo img {
    max-width: 100%;
    height: auto;
  }
  
  .item--title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10px;
  }
  </style>
  