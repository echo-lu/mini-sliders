<template>
  <div>
    <Slider :sliders="sliders"  />
  </div>
</template>

<script>
import Slider from './lib/slider'
export default {
  name: 'app',
  data () {
    return {
      sliders: {
        data: [
          {
            src: 'https://sxsimg.xiaoyuanzhao.com/D6/5A/D685908B685DA7068A50BB6A61EDB45A.png',
            url: 'https://www.shixiseng.com/mx2018'
          },
          {
            src: 'https://sxsimg.xiaoyuanzhao.com/27/B5/27C9EDE4770EF9F1A78A9E10D7F9D2B5.png',
            url: 'https://www.shixiseng.com/tc/short'
          },
          {
            src: 'https://sxsimg.xiaoyuanzhao.com/76/2B/765B7A996EBE2FBFEFF3733CDEED7A2B.jpg',
            url: 'https://www.shixiseng.com/tc/rocket'
          },
          {
            src: 'https://sxsimg.xiaoyuanzhao.com/F4/9E/F4FBC65B27DEB9790539956CF468409E.png',
            url: 'https://wj.qq.com/s/1848680/dc3e'
          }
        ],
        interval: 3000,
        target: '_blank',
        width:"900px",
        height:"500px",
        name: 'fade'
      }
    }
  },
  components: {
    Slider
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
