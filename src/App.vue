<template>
  <div id="app">
      <transition name="animate" enter-active-class="animate__animated animate__slideInRight" leave-active-class="animate__animated animate__slideOutRight">
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import './assets/styles/_reset';
</style>
