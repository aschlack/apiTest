<template>
    <div>
        <h1>Welcome!!!!!!!!!!</h1>
        <p>
          For a guide and recipes on how to configure / customize this project, check out the
          <a href="https://cli.vuejs.org" target="_blank" rel="noopener" class="underline">vue-cli documentation</a>.
        </p>
        {{ data[1].data[1].artist }}

        <ul v-for="(decade) in data" :key="decade.decade">
            <li>{{ decade.decade }}</li>

        </ul>
      </div>
    
</template>
  
<script>
export default {
  name: 'Welcome',
  props: {
    data: {
      type: Object,
    }
  },
}

</script>
  
<style scoped lang="scss">
a {
  color: #000b40;
}
</style>