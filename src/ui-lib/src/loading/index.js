import Vue from 'vue'
import loadingVue from './loading.vue'
import merge from '../../utils/merge'
import afterLeave from '../../utils/after-leave'

const LoadingConstructor = Vue.extend(loadingVue);

const defaults = {
  text: null,
};

let fullscreenLoading;

LoadingConstructor.prototype.close = function () {
  afterLeave(this, () => {
    const target = this.fullscreen || this.body
    ? document.body
    : this.target;
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$destroy();
  }, 300);

}

const Loading = (options = {}) => {
  if (Vue.prototype.$isServer) return;
  options = merge({}, defaults, options);

  let parent = document.body;
  let instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  });

  parent.appendChild(instance.$el);

  return instance;
}

export default Loading;