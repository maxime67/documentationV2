<script setup>
import { RouterView } from 'vue-router'
import NavbarView from '@/views/NavbarView.vue'
import TestComponent from "@/components/TestComponent.vue";
</script>

<template>
  <TestComponent></TestComponent>
<!--  <NavbarView></NavbarView>-->

<!--  <RouterView />-->
</template>

<style scoped>
body{
  background-color: red;
}
</style>
