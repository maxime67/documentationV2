<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: null
  },
  loading: {
    type: Boolean,
    default: null
  },
  error: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Documentation Card -->
        <div v-for="item in props.data" :key="item.id" class="w-full max-w-sm transform hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600">
          <a :href="item.url">
            <div class="p-6">
              <div class="flex items-center justify-between pb-2">
                <h2 class="text-xl font-bold text-white">{{ item.title }}</h2>
              </div>
              <p class="text-white/90">{{ item.description }}</p>
            </div>
            <div class="flex justify-items-center p-2.5 gap-2">
              <div v-for="tag in item.tags" :key="tag.id">
                <img class="w-16 rounded-md" :src="`../logo/${tag}.png`">
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<template>-->
<!--  <div v-if="loading" class="h-56 grid grid-cols-3 gap-4">-->
<!--    <div class="flex justify-center" v-for="item in data" :key="item.id">-->
<!--      <a-->
<!--        :href="item.url"-->
<!--        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"-->
<!--      >-->
<!--        <h5-->
<!--          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"-->
<!--        >-->
<!--          {{ item.title }}-->
<!--        </h5>-->
<!--        <p class="font-normal text-gray-700 dark:text-gray-400">-->
<!--          {{ item.description }}-->
<!--        </p>-->
<!--        <div class="grid grid-cols-4">-->
<!--          <div  v-for="tag in item.tags" :key="tag.id">-->
<!--            <img class="rounded-md " :src="`../logo/${tag}.png`">-->
<!--          </div>-->
<!--        </div>-->
<!--      </a>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<style scoped></style>
