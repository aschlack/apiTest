<template>
  <Header />
  <div class="lg:w-6/12 sm:w-8/12 w-10/12 special-margin">
    <Welcome :data="decades" />
  </div>
  <Footer />
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import info from "../info";

export default {
  name: "App",
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
};
</script>

<style lang="scss">
body {
  margin: 0 auto;
}
#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a1b1e;
}
.blue-type {
  color: #000b40;
}
.standard-link {
  &:hover {
    text-decoration: none;
  }
  text-decoration: underline;
}
.special-margin {
  @media (min-width: 1023px) {
    margin-left: 25%;
    margin-right: 25%;
  }
  @media (max-width: 1022px) and (min-width: 640px) {
    margin-left: 16.666667%;
    margin-right: 16.666667%;
  }
  margin-left: 8.333335%;
  margin-right: 8.333335%;
}
</style>
