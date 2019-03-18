import btn1 from './packages/button/btn1/index.js';
import btn2 from './packages/button/btn2/index.js';
import btnGroup from './packages/button/btn-group/index.js';
import bfIcon from './packages/icon/index.js';

const components = [
  btn1,
  btn2,
  btnGroup,
  bfIcon

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
  btn2,
  btnGroup,
  bfIcon
}
