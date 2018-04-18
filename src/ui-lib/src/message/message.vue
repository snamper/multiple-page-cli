<template>
  <transition name="ui-message-fade">
    <div 
      class="ui-message" 
      v-show="visiable"
      @click="close"
    >
      {{message}}
      <!-- <i class="icon icon-close" @click="close">X</i> -->
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visiable: false,
      closed: false,
      onClose: null,
      timer: null,
      duration: 3000,
      message: null,
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visiable = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  },
  methods: {
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },

    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }   
        }, this.duration);
      }
    },

    clearTimer() {
      clearTimeout(this.timer);
    },

  },
  mounted() {
    this.startTimer();
  }
}
</script>

<style scoped>
.ui-message-fade-enter, .ui-message-fade-leave-to {
  /* top: 0 !important; */
  opacity: 0.6;
}
.ui-message-fade-enter-active, .ui-message-fade-leave-active {
  transition: all .3s;
}

.ui-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100000;
  text-align: center;
  /* background: #fff; */
  background: rgba(0,0,0,0.7);
  color: #fff;
  border-radius: 6px;
  padding: 30px 40px 30px 40px;
  font-size: 32px;
  border: 1px solid #ccc;
}

.icon {
  position: absolute;
  display: block;
  height: 40px;
  width: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.icon-close {
  /* background-image: url('./icon_loading.gif'); */
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
