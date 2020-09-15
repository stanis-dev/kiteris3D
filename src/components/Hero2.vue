<template>
  <section class="hero">
    <canvas class="canvas" id="renderCanvas" @selectstart.prevent></canvas>
    <div
      class="remote"
      id="remote"
      @mousemove="draging"
      @mousedown="drag"
      @mouseup="drop"
      ref="remote"
    >
      <div :style="{ backgroundColor: 'green' }" class="color"></div>
      <div :style="{ backgroundColor: 'blue' }" class="color"></div>
      <div :style="{ backgroundColor: 'purple' }" class="color"></div>
      <div :style="{ backgroundColor: 'yellow' }" class="color"></div>
      <div :style="{ backgroundColor: 'azure' }" class="color"></div>
      <div :style="{ backgroundColor: 'red' }" class="color"></div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'

/* import inCube from '../babylonjs/inCube' */

export default {
  name: 'Hero2',
  data() {
    return {
      pickedUp: false,
      prevX: null,
      prevY: null
    }
  },
  setup() {
    onMounted(() => {
      /*  const inCubeS = new inCube()
      inCubeS.start() */

      document.mouseState = 'up'

      document.onmousedown = function() {
        document.mouseState = 'down'
      }

      document.onmouseup = function() {
        document.mouseState = 'up'
      }
    })
  },
  computed: {
    remote() {
      return document.getElementById('remote')
    }
  },
  methods: {
    getAtInt(obj, attribute) {
      return parseInt(getComputedStyle(obj)[attribute], 10)
    },
    drag() {
      this.prevX = event.clientX
      this.prevY = event.clientY
      this.pickedUp = true
      document.mouseState = 'down'
    },

    draging() {
      if (this.pickedUp && document.mouseState === 'down') {
        //This gives us the boundaries to limit the dragging
        const canvas = document.getElementById('renderCanvas')
        const rect = canvas.getBoundingClientRect()

        const newY =
          this.getAtInt(this.remote, 'top') + event.pageY - this.prevY
        console.log('newY: ' + newY)
        console.log(
          `remote top: ${this.getAtInt(this.remote, 'top')}. event TOP value: ${
            event.pageY
          }. previousY: ${this.prevY} }`
        )
        /* const newX =
          this.getAtInt(this.remote, 'left') + event.pageX - this.prevX */

        // Seeting up the boundaries
        if (newY < rect.top) {
          this.$refs.remote.style.top = rect.top + 'px'
        } else {
          this.$refs.remote.style.top = newY + 'px'
          console.log(document.getElementById('remote').style.top)
        }

        this.prevY = event.pageY
      }
    },
    drop() {
      this.pickedUp = false
      document.mouseState = 'up'
    }
  }
}
</script>

<style lang="scss">
$color-primary: #282560;

.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5.2rem;
  width: 100%;

  /* 3D CANVAS */
  #renderCanvas {
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(90deg, black, black);
  }

  #remote {
    position: absolute;
    height: 300px;
    width: 200px;
    background: grey;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
    top: 100px;
    left: 50%;

    .color {
      width: 25%;
      height: 50px;
    }
  }
}
</style>
