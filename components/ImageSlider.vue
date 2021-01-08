<template>
  <VueSlickCarousel ref="carousel" v-bind="settings">
    <figure v-for="item in content" :key="item.id">
      <img :src="item.url" :alt="item.alt"/>
      <figcaption class="Base-figcaption">{{item.description}}</figcaption>
    </figure>
    <template #prevArrow="arrowOption">
      <div class="ImageSlider-toggle ImageSlider-toggle--prev">
        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
    </div>
    </template>
    <template #nextArrow="arrowOption">
      <div class="ImageSlider-toggle ImageSlider-toggle--next">
        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
      </div>
    </template>
  </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'ImageSlider',
    props: {
      content: {
        type: Array,
        required: true
      }
    },
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          'draggable': true,
          'dots': false,
          'arrows': true,
          'infinite': true,
          'adaptiveHeight': true,
          'autoplay': false,
          'mobileFirst': true,
          'fade': true,
          'cssEase': "cubic-bezier(0.77, 0, 0.175, 1)"
        }
      }
    }
  }
</script>
