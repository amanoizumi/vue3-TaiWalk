<script>
export default {
  props: {
    titleContent: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <teleport to="title"> {{ titleContent }} | TaiWalk 台灣旅遊景點導覽</teleport>
</template>
