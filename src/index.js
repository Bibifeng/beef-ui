import btn1 from './packages/button/btn1/index.js';
import btn2 from './packages/button/btn2/index.js';
import btnGroup from './packages/button/btn-group/index.js';
import bfIcon from './packages/icon/index.js';
import bfCol from './packages/grid/col/index.js';
import bfRow from './packages/grid/row/index.js';
import bfInput from './packages/input/index.js';
import bfPopover from './packages/popover/index.js';
import bfTabs from './packages/tabs/bf-tabs/index.js';
import bfTabsBody from './packages/tabs/bf-tabs-body/index.js';
import bfTabsHead from './packages/tabs/bf-tabs-head/index.js';
import bfTabsItem from './packages/tabs/bf-tabs-item/index.js';
import bfTabsPane from './packages/tabs/bf-tabs-pane/index.js';

const components = [
  btn1,
  btn2,
  btnGroup,
  bfIcon,
  bfCol,
  bfRow,
  bfInput,
  bfPopover,
  bfTabs,
  bfTabsBody,
  bfTabsHead,
  bfTabsItem,
  bfTabsPane
];


const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default{
  install,
  btn1,
  btn2,
  btnGroup,
  bfIcon,
  bfCol,
  bfRow,
  bfInput,
  bfPopover,
  bfTabs,
  bfTabsBody,
  bfTabsHead,
  bfTabsItem,
  bfTabsPane
}
