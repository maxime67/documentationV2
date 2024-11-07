<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Backdrop overlay - only shows on mobile when sidebar is open -->
    <div
        v-if="isSidebarOpen"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity sm:hidden"
        @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <aside
        id="default-sidebar"
        :class="[
        'fixed sm:relative w-64 h-screen transition-transform duration-300',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
      ]"
        aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <a
            v-for="filter in filters"
            :key="filter.id"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <label
              class="relative flex cursor-pointer items-center rounded-full p-3"
              :for="filter.id"
              data-ripple-dark="true"
          >
            <input
                type="checkbox"
                :id="filter.id"
                :checked="isKeywordSelected(filter.label)"
                @change="toggleKeyword(filter.label)"
                class="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
                :disabled="loading"
            />
            <span
                class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
              >
                <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
              class="cursor-pointer text-slate-600 text-sm"
              :for="filter.id"
          >
            {{ filter.label }}
          </label>
        </a>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 p-4 sm:ml-0">
      <div class="max-w-6xl mx-auto">
        <!-- Toggle Sidebar Button (Mobile Only) -->
        <button
            class="sm:hidden mb-4 p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
            @click="toggleSidebar"
        >
          <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Stats -->
        <div class="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="text-sm mb-2">Total Documents</div>
            <div class="text-lg font-medium">{{ totalDocuments }}</div>
          </div>
        </div>

        <!-- Results Grid -->
        <div v-if="loading" class="text-center py-8">
          <div class="text-gray-500">Loading results...</div>
        </div>
        <div v-else>
          <div
              v-for="item in results"
              :key="item.id"
              class="mb-6 transition-all duration-300 rounded-lg bg-white p-4 shadow-sm"
          >
            <a :href="item.url">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="text-sm mb-2">{{ item.title || 'Untitled' }}</div>
              <div class="text-xs text-gray-500">
                {{ item.description || 'No description' }}
              </div>
              <div class="flex justify-items-center p-2.5 gap-2">
                <div v-for="tag in item.tags" :key="tag.id">
                  <img class="w-16 rounded-md" :src="`../logo/${tag}.png`" />
                </div>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FilterInterface',
  data() {
    return {
      selectedKeywords: [],
      loading: false,
      error: null,
      results: {},
      totalDocuments: 0,
      filters: null,
      isSidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    async fetchData() {
      this.loading = true;
      this.error = null;

      try {
        const categories = this.selectedKeywords.join(',');
        const response = await axios.get(
            `http://localhost:3000/category${categories ? `?categories=${categories}` : ''}`
        );
        this.results = response.data.results;
        this.totalDocuments = response.data.totalDocuments;
      } catch (error) {
        this.error = error.response?.data?.error || 'An error occurred while fetching data';
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },

    async toggleKeyword(keyword) {
      if (this.isKeywordSelected(keyword)) {
        this.removeKeyword(keyword);
      } else {
        this.selectedKeywords.push(keyword);
      }
      await this.fetchData();
    },

    async removeKeyword(keyword) {
      const index = this.selectedKeywords.indexOf(keyword);
      if (index > -1) {
        this.selectedKeywords.splice(index, 1);
        await this.fetchData();
      }
    },

    isKeywordSelected(keyword) {
      return this.selectedKeywords.includes(keyword);
    },

    async getAllCategories() {
      try {
        const response = await axios.get(`http://localhost:3000/allCategories`);
        this.filters = response.data;
      } catch (error) {
        this.error = error.response?.data?.error || 'An error occurred while fetching categories';
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    }
  },

  async created() {
    await this.fetchData();
    await this.getAllCategories();
  }
}
</script>