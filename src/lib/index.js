import Slider from './slider.vue'
const comment = {
  install: function(Vue) {
    Vue.component('Slider', Slider)
  }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(comment) 
}
export default comment