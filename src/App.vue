<template>
  <Header />
  <Welcome :data="decades" />
  <Footer />
</template>

<script>
import Welcome from './components/Welcome.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import info from "../info";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Welcome,
  },
  data() {
    return {
      decades: info.decades,
    };
  },
}
</script>

<style lang="scss">
#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a1b1e;
}
</style>
