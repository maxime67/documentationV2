<script setup>
import { RouterView } from 'vue-router'
import NavbarView from '@/views/NavbarView.vue'
</script>

<template>
  <NavbarView></NavbarView>

  <RouterView />
</template>

<style scoped>
body{
  background-color: red;
}
</style>
