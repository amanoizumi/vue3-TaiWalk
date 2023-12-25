<template>
  <Loading class="z-30 bg-[#ffffff] bg-opacity-90" :lock-scroll="true" :active.sync="pageLoading">
    <PageLoadingIcon></PageLoadingIcon>
  </Loading>
  <DialogComponent :show-dialog="showDialog"></DialogComponent>
  <RouterView />
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    Loading,
  },
  setup(props) {
    const store = useStore();
    const pageLoading = computed(() => store.getters['loadingModules/pageLoading']);
    const showDialog = computed(() => store.getters['dialogModules/showDialog']);

    return {
      pageLoading,
      showDialog
    };
  },
};
</script>
