<template>
  <nav class="block w-full  px-4 py-2 mx-auto bg-white shadow-md lg:px-8 lg:py-3 ">
    <div class="flex flex-wrap items-center justify-between mx-auto text-slate-800">
      <a href="#" class="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
        <img class="w-28 rounded-md" :src="`../logo/LogoEasySetup.png`" />
      </a>

      <div class="hidden lg:block">
        <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>

            <a href="#" class="flex items-center">
              Pages
            </a>
          </li>
          <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

            <a href="#" class="flex items-center">
              Account
            </a>
          </li>
          <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
            </svg>

            <a href="#" class="flex items-center">
              Blocks
            </a>
          </li>
          <li
              class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>

            <a href="#" class="flex items-center">
              Docs
            </a>
          </li>
        </ul>
      </div>
      <button class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
      </button>
    </div>
  </nav>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Backdrop overlay - for mobile only -->
    <div
        v-if="isSidebarOpen"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity sm:hidden"
        @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <aside
        :class="[
        'fixed sm:relative w-64 h-screen transition-transform duration-300',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
      ]"
        aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <div v-for="(subcategories, category) in categories" :key="category" class="mb-2">
          <!-- Category dropdown button -->
          <button
              @click="toggleCategory(category)"
              class="w-full flex items-center justify-between p-2 text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span class="font-medium">{{ category }}</span>
            <svg
                class="w-4 h-4"
                :class="{ 'transform rotate-180': openCategory === category }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Subcategories dropdown -->
          <div
              v-show="openCategory === category"
              class="ml-4 mt-1 space-y-1"
          >
            <a
                v-for="subcategory in subcategories"
                :key="subcategory"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <label
                  class="relative flex cursor-pointer items-center rounded-full p-3"
                  :for="subcategory"
                  data-ripple-dark="true"
              >
                <input
                    type="checkbox"
                    :key="subcategory"
                    :checked="isSubcategorySelected(category, subcategory)"
                    @change="toggleSubcategory(category, subcategory)"
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
                  :for="subcategory"
              >
                {{ subcategory }}
              </label>
            </a>
          </div>
        </div>
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
              class="mb-6 bg-white rounded-lg p-4 shadow-sm"
          >
            <a :href="item.url">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="text-sm mb-2">{{ item.title || 'Untitled' }}</div>
                <div class="text-xs text-gray-500">
                  {{ item.description || 'No description' }}
                </div>
                <div class="flex justify-items-center p-2.5 gap-2">
                  <div v-for="tag in item.tags" :key="tag">
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

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

// State
const openCategory = ref(null);
const isSidebarOpen = ref(false);
const loading = ref(false);
const results = ref({});
const totalDocuments = ref(0);
const selectedCategories = reactive({});

// Categories definition
const categories = {
  'DevOps': ['Jenkins', 'Docker', 'Kubernetes', 'GitLab'],
  'Database': ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  'Application': ['NodJS', 'Python', 'Java', 'PHP'],
  'Framework': ['Symfony', "VueJS"],
  'Web-server': ['Nginx', 'Apache', 'Tomcat']
};

// Methods
const toggleCategory = (category) => {
  openCategory.value = openCategory.value === category ? null : category;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const isSubcategorySelected = (category, subcategory) => {
  return selectedCategories[category]?.[subcategory] || false;
};

const toggleSubcategory = async (category, subcategory) => {
  if (!selectedCategories[category]) {
    selectedCategories[category] = {};
  }
  selectedCategories[category][subcategory] = !selectedCategories[category][subcategory];
  await fetchData();
};

const getSelectedSubcategories = () => {
  const selected = [];
  Object.entries(selectedCategories).forEach(([category, subcats]) => {
    Object.entries(subcats).forEach(([subcat, isSelected]) => {
      if (isSelected) {
        selected.push(subcat);
      }
    });
  });
  return selected;
};

const fetchData = async () => {
  loading.value = true;
  try {
    const selectedSubcats = getSelectedSubcategories();
    const response = await axios.get(
        `https://easysetup:3000/category${
            selectedSubcats.length ? `?categories=${selectedSubcats.join(',')}` : ''
        }`
    );
    results.value = response.data.results;
    totalDocuments.value = response.data.totalDocuments;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};

// Lifecycle hooks
onMounted(async () => {
  await fetchData();
});
</script>