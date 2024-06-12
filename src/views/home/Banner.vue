<template>
    <section class="slider-section">
      <div class="slider-container">
        <div
          class="slide"
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: index === activeSlide }"
        >
          <img :src="slide.src"  />
          <!-- :alt="`Slide ${index + 1}`" -->
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    setup() {
      const activeSlide = ref(0);
      const slides = ref([
        {
          src: '//cityinsurance.com.bd/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-31-at-12.20.20-PM.jpeg',
        },
        // { src: '//cityinsurance.com.bd/wp-content/uploads/2023/11/Media.jpg' },
        // { src: '//cityinsurance.com.bd/wp-content/uploads/2023/11/ICAB-scaled.jpg' },
        // { src: '//cityinsurance.com.bd/wp-content/uploads/2023/10/1.jpg' },
        // { src: '//cityinsurance.com.bd/wp-content/uploads/2023/10/2.jpg' },
        // { src: '//cityinsurance.com.bd/wp-content/uploads/2023/10/3.jpg' },
      ]);
      let intervalId = null;
  
      const startSlider = () => {
        intervalId = setInterval(() => {
          nextSlide();
        }, 5000); // Change slide every 3 seconds
      };
  
      const stopSlider = () => {
        clearInterval(intervalId);
      };
  
      const nextSlide = () => {
        activeSlide.value = (activeSlide.value + 1) % slides.value.length;
      };
  
      onMounted(() => {
        startSlider();
      });
  
      onUnmounted(() => {
        stopSlider();
      });
  
      return {
        activeSlide,
        slides,
      };
    },
  };
  </script>
  
  <style scoped>
  .slider-section {
    width: 100%;
    overflow: hidden;
  }
  
  .slider-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide {
    min-width: 100%;
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }
  
  .slide.active {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  </style>
  