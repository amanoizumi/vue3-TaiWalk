<template>
  <ul class="flex flex-col md:flex-row">
    <li v-for="(item, idx) in breadcrumbLi" :key="item" >
      <RouterLink :to="item.path" class="px-2" :class="idx < 2 ? 'text-[#6E7D60] hover:text-green-800 ' : 'text-gray'">
        {{ item.text }}
      </RouterLink>
      {{ idx + 1 === breadcrumbLi.length ? '' : '/' }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    'breadcrumb-li': {
      type: Array,
      default: () => [],
    },
  },
};
</script>
