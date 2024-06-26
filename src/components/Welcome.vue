<template>
  <main class="self-center">
    <h1 class="text-2xl font-bold mb-6 pt-1 blue-type text-left">
      The artists that were on repeat over the decades of my life.
    </h1>
    <p class="text-left text-lg">
      Music inspires, motivates, and clears my mind. Below are the top five
      artists that I listened to over each decade of my life, plus a bonus 5
      artists I regularly listen to that were <em>Before My Time</em> (BMT).
    </p>
    <!-- Make each year clickable and then on click display list -->
    <nav class="my-5">
      <button
        v-for="(decade, idx) in data"
        :key="decade.decade"
        @click="setDecade(decade.decade, data[idx], idx)"
        class="lg:mx-4 sm:mx-2 mx-1 lg:text-2xl sm:text-xl decade px-1 blue-type"
        :class="{ active: activeIndex === idx }"
        :aria-current="activeIndex === idx ? 'true' : 'false'"
        :aria-description="'View artists from the' + decade.decade"
      >
        {{ decade.decade }}
      </button>
    </nav>
    <!-- Display these based on that has been clicked -->
    <ArtistList
      v-if="displayList"
      :decade="decade"
      :artistList="artistList"
      @artistSelect="showArtist"
    />
    <ArtistDisplay v-if="displayArtist" :artist="artist" />
  </main>
</template>

<script>
import ArtistDisplay from "./ArtistDisplay.vue";
import ArtistList from "./ArtistList.vue";

export default {
  name: "Welcome",
  components: {
    ArtistDisplay,
    ArtistList,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      artist: "thrice",
      decade: "",
      displayList: false,
      displayArtist: false,
      artistList: "",
      activeIndex: "",
    };
  },
  methods: {
    setDecade(decade, data, index) {
      this.decade = decade;
      this.displayList = true;
      this.artistList = data.data;
      this.displayArtist = false;
      this.activeIndex = index;
    },
    showArtist(artist) {
      this.artist = artist;
      this.displayList = false;
      this.displayArtist = true;
    },
  },
};
</script>

<style scoped lang="scss">
.decade {
  background: #fa911e;
  &:hover {
    background: #000b40;
    color: #fa911e;
  }
}
.active {
  color: #fa911e;
  background: #1a1b1e;
}
</style>
