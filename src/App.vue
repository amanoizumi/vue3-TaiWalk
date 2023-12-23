<template>
  <!-- <Loading v-model:active="isLoading" /> -->
  <RouterView></RouterView>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { ref } from 'vue';

export default {
  components: {
    Loading,
  },
  setup(props) {
    const isLoading = ref(false);
    return {
      isLoading,
    };
  },
};
</script>
