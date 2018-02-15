<template>
  <div class="slider" @mouseover="clearInv" @mouseout="_runInv" :style="style">
    <ul class="slider-wrapper" >
      <transition-group :name="mode">
          <li v-for="(item,index) in sliders.data" :key="index" class="slider-item" v-show="index === nowIndex">
            <a :href="item.url" :target="sliders.target">
              <img :src="item.src" alt="">
            </a>
          </li>
      </transition-group>
    </ul>
    <div class="dots" >
      <span class="dot" v-for="(item, index) in dots" :key="index" :class="{active: nowIndex === index }" @click="goto(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sliders: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      dots: this.sliders.data.length,
      nowIndex: 0,
      mode: this.sliders.name || 'move',
      style: 'width:'+(this.sliders.width || '800px')+';height:'+(this.sliders.height || '400px')
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.sliders.data.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === (this.sliders.data.length - 1)) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.nowIndex = index
    },
    _runInv () {
      this.inv = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.sliders.interval || 3000)
    },
    clearInv () {
      clearInterval(this.inv)
    }
  },
  mounted () {
    this._runInv()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slider
    position:relative
    overflow: hidden
    margin:0
    padding:0
    .slider-wrapper
      width:100%
      height:100%
      list-style:none
      overflow: hidden
      margin:0
      padding:0
      .slider-item
        position:absolute
        width:100%
        height:100%
        overflow: hidden
        img
          width:100%
          height:100%
        &.move-enter-active
          transition: all 0.5s ease
          transform: translateX(0)
        &.move-leave-active
          transition: all 0.5s ease
          transform: translateX(-100%)
        &.move-enter
          transform: translateX(100%)
        &.move-leave
          transform: translateX(0)
        &.fade-enter-active, .fade-leave-active
          transition: opacity 1s
        &.fade-enter, .fade-leave-active
          opacity: 0.5
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 20px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: rgba(255,255,255,0.6)
        &.active
          width: 20px
          border-radius: 5px
          background: rgba(255,255,255,0.9)
</style>
