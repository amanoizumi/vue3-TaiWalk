<template>
  <Loading :active.sync="isLoading">
    <PageLoadingIcon></PageLoadingIcon>
  </Loading>
  <!-- <div class="z-20 absolute inset-0 bg-white duration-200"  v-show="!showIndexPage"></div> -->

  <RouterView />
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    Loading,
  },
  setup(props) {
    const store = useStore();
    const isLoading = computed(() => store.getters['isLoading']);

    const showIndexPage = ref(false);

    return {
      showIndexPage,
      isLoading,
    };
  },
};
</script>
