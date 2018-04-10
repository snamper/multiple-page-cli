import Vue from 'vue'
import messageVue from './message'

let MessageConstructor = Vue.extend(messageVue);

let instance;
let instances = [];   // message队列
let seed = 1;         // 标记message顺序

const Message = function (options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  let id = 'message_' + seed++;
  options.onClose = function () {
    // Message.close(id, userOnClose);
    Message.close(id);
  }

  // https://cn.vuejs.org/v2/api/#beforeMount
  // 此处实例化没有提供 el ，所以实例化之后没有挂载节点
  instance = new MessageConstructor({
    data: options
  });
  
  instance.id = id;
  // 如果没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素，
  // 并且你必须使用原生 DOM API 把它插入文档中。
  instance.vm = instance.$mount();
  instance.vm.visiable = true;
  instance.dom = instance.vm.$el;
  document.body.appendChild(instance.dom);

  instances.push(instance);
  return instance.vm;
}

Message.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
}

Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;