<template>
  <div id="app">
    <dv-loading>Loading...</dv-loading>
    <div style="overflow: hidden">
      <div @touchstart.capture="touchstart" @touchend.capture="touchend" style="position: relative;transition: all .3s;background-color: #ddd;height: 30px">
        <span style="width: 100%;position: absolute;top: 0;left: 0">向左滑动出现删除</span>
        <span style="padding: 0 1em;background-color: #c03;position: absolute;top: 0;right: -4em;height: 30px" @click="deleteItem">删除</span>
      </div>
      <div @touchstart.capture="touchstart" @touchend.capture="touchend" style="position: relative;transition: all .3s;background-color: #ddd;height: 30px">
        <span style="width: 100%;position: absolute;top: 0;left: 0">向左滑动出现删除</span>
        <span style="padding: 0 1em;background-color: #c03;position: absolute;top: 0;right: -4em;height: 30px" @click="deleteItem">删除</span>
      </div>
      <div @touchstart.capture="touchstart" @touchend.capture="touchend" style="position: relative;transition: all .3s;background-color: #ddd;height: 30px">
        <span style="width: 100%;position: absolute;top: 0;left: 0">向左滑动出现删除</span>
        <span style="padding: 0 1em;background-color: #c03;position: absolute;top: 0;right: -4em;height: 30px" @click="deleteItem">删除</span>
      </div>
      <div @click="show=!show" @touchstart.capture="touchstart" @touchend.capture="touchend" style="position: relative;transition: all .3s;background-color: #ddd;height: 30px">
        <span style="width: 100%;position: absolute;top: 0;left: 0">向左滑动出现删除</span>
        <span style="padding: 0 1em;background-color: #c03;position: absolute;top: 0;right: -4em;height: 30px" @click="deleteItem">删除</span>
      </div>
    </div>
    <transition mode="out-in" enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
      <dv-border-box-1 v-show="show">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </dv-border-box-1>
    </transition>
    <dv-border-box-13>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </dv-border-box-13>
    <dv-border-box-11 class="animate__animated animate__zoomIn animate__infinite" title="dv-border-box-11">
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </dv-border-box-11>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      X: 0,
      show: false,
    }
  },
methods: {
  touchstart(e) {
    this.X = e.touches[0].clientX
  },
  touchend(e) {
    if (this.X - e.changedTouches[0].clientX > 30) {
      e.currentTarget.style.transform = 'translateX(-4em)'
    } else if (this.X - e.changedTouches[0].clientX < -30) {
      e.currentTarget.style.transform = 'translateX(0)'
    }
  },
  deleteItem() {
    alert('被你删除了')
  }
}
}
</script>

<style>
body {margin: 0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
