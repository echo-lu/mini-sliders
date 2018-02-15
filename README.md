# vue-sliders

> vue轮播图组件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 参数配置
**data**：传入一个数组，包含一个或多个对象，每个对象包含图片地址和链接跳转地址，必选<br>
**interval**：轮播动画时间，可选（默认3000ms）<br>
**target**：链接跳转方式，可选（默认_self）<br>
**width**：轮播图宽度，可选（默认800px）<br>
**height**：轮播图高度，可选（默认400px）<br>
**name**：轮播图切换动画模式，有左右滑动（move）和淡入淡出（fade）两种动画切换模式，可选（默认move）<br>

## 实例
首先在项目的入口文件（main.js）中引入
``` 
import Slider from 'mini-sliders'
Vue.use(Slider) 
```

然后使用该组件
``` 
<Slider :sliders="sliders"  />
```

``` 
sliders: {
        data: [
          {
            src: 'https://sxsimg.xiaoyuanzhao.com/D6/5A/D685908B685DA7068A50BB6A61EDB45A.png', //图片地址
            url: 'https://www.shixiseng.com/mx2018' //链接跳转地址
          }
        ],//传入图片地址和链接跳转地址，必选
        interval: 3000, //轮播动画时间，可选（默认3000ms）
        target: '_blank', //跳转方式，可选（默认_self）
        width:"1200px",//图片宽度，可选（默认800px）
        height:"600px",//图片高度，可选（默认400px）
        name: 'fade' //轮播图动画方式，可选（默认move）
      } 
```

关于vue封装插件并发布到npm上的步骤可参考我的微博[vue封装插件并发布到npm上](https://github.com/echo-lu/mini-sliders)

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
