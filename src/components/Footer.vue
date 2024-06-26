<template>
  <div class="mb-10 grid grid-cols-1 place-items-center">
    <div class="orange-strip block -rotate-1 h-1.5 mt-10 mb-5 w-full"></div>
    <img
      class="w-20 mb-1.5"
      src="../assets/img/as-logo.svg"
      alt="Austin Schlack logo"
    />
    <div class="copyright blue-type">
      &copy; {{ new Date().getFullYear() }} Austin Schlack
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.orange-strip {
  background: #fa911e;
}
</style>
