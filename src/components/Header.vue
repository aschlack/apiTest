<template>
  <header class="mb-10 mt-6">
    <Title />
  </header>
</template>

<script>
import Title from "./Title.vue";

export default {
  name: "Header",
  components: {
    Title,
  },
};
</script>

<style lang="scss">
header {
  margin: 20px 0;
  text-align: center;
}
</style>
