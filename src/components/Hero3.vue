<template>
  <carousel
    :visibleSlide="visibleSlide"
    :slides="slides"
    class="carousel"
    @next="next"
    @prev="prev"
    @set-visible-slide="setVisibleSlide"
  >
    <carousel-slide
      v-for="(slide, index) in slides"
      :key="slide"
      :index="index"
      :visibleSlide="visibleSlide"
      :direction="direction"
    >
      <video class="video" autoplay muted loop>
        <source :src="slide.src" type="video/mp4" />
      </video>
    </carousel-slide>
  </carousel>
</template>

<script>
import Carousel from './Carousel'
import CarouselSlide from './CarouselSlide'

export default {
  data() {
    return {
      slides: [
        { src: '/videos/car.mp4', duration: 8 },
        { src: '/videos/watch.mp4', duration: 7 },
        { src: '/videos/phone.mp4', duration: 4 },
        { src: '/videos/cream.mp4', duration: 4 },
        { src: '/videos/jacket.mp4', duration: 4 },
        { src: '/videos/sofa.mp4', duration: 5 }
      ],
      visibleSlide: 0,
      direction: 'left',
      timeout: null
    }
  },
  computed: {
    slidesLength() {
      return this.slides.length - 1
    }
  },
  created() {
    this.autoSlide()
  },
  updated() {
    this.autoSlide()
  },
  methods: {
    restartVideo() {
      const video = document.getElementsByClassName('video')[this.visibleSlide]
      video.currentTime = 0
    },
    autoSlide() {
      const time = this.slides[this.visibleSlide].duration
      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        this.next()
      }, time * 1000)
    },
    next() {
      if (this.visibleSlide >= this.slidesLength) {
        this.visibleSlide = 0
      } else {
        this.visibleSlide++
      }
      this.direction = 'left'
      this.restartVideo()
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLength
      } else {
        this.visibleSlide--
      }
      this.direction = 'right'
      this.restartVideo()
    },
    setVisibleSlide(index) {
      this.visibleSlide = index
      this.restartVideo()
    }
  },
  components: {
    Carousel,
    CarouselSlide
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  height: 100vh;

  video {
    position: absolute;
    min-height: 100%;
    padding-top: 85px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
