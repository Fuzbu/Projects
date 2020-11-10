<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the Course", "Learn Vue"],
    };
  },
};
</script>
