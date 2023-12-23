<template>
  <Loading :active.sync="isLoading">
    <PageLoadingIcon></PageLoadingIcon>
  </Loading>
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
    return {
      isLoading,
    };
  },
};
</script>
