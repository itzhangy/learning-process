<!--
 * @Description: 
 * @Author: yourName
 * @Date: 2022-04-13 10:03:04
 * @LastEditors: yourName
 * @LastEditTime: 2022-04-14 09:35:46
-->
<template>
  <span>mouse position {{ x }} {{ y }}</span>
</template>

<script setup>
// import { ref } from 'vue'

import useMousePosition from './useMousePosition'

const { x, y } = useMousePosition()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
