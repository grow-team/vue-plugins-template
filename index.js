// 这个是打包插件的入口
import Demo from './src/demo.vue';

Demo.install = function(Vue) {
  Vue.component(Demo.name, Demo);
};

export default Demo;
