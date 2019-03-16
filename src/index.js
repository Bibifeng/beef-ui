import btn1 from './packages/button/btn1/index.js';

const components = [
  btn1,

]


const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default{
  install,
  btn1,
}
