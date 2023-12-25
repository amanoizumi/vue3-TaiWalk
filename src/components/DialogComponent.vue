<script>
import { onMounted } from 'vue';

export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    titleContent: {
      type: String,
      default: 'API 服務錯誤，請洽詢處理或明天再嘗試連線！',
    },
    dialogStyle: {
      /*
      'default'
      'success'
      'warning'
      'danger'
      */
      type: String,
      default: 'danger',
    },
    toEl: {
      type: String,
      default: 'body',
    },
  },
  setup(props, { emit }) {
    const styleClassObj = {
      default: 'bg-white',
      success: '',
      warning: '',
      danger: 'bg-red-100 text-red-900 border-b-2 border-b-red-300',
    };

    return {
      styleClassObj,
    };
  },
};
</script>

<template>
  <teleport :to="toEl">
    <template v-if="showDialog">
      <div class="fixed inset-0 z-90 flex items-start bg-gray-500/25">
        <div class="w-full p-4" :class="styleClassObj[dialogStyle]">
          <p>{{ titleContent }}</p>
        </div>
      </div>
    </template>
  </teleport>
</template>
