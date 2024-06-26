<template>
  <div
    class="lg:w-6/12 sm:8/12 special-margin pt-5 flex items-center justify-center flex-col"
  >
    <button
      class="text-3xl text-blue m-5 block hover:underline"
      @click="setArtist(artistList.artist_key)"
      v-for="artistList in artistList"
      :key="artistList.artist_key"
      :aria-label="'View information about ' + artistList.artist"
    >
      {{ artistList.artist }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ArtistList",
  props: ["decade", "artistList"],
  data() {
    return {
      artist: "",
    };
  },
  methods: {
    setArtist(artistKey) {
      this.artist = artistKey;
      this.$emit("artistSelect", this.artist);
    },
  },
};
</script>

<style lang="scss" scoped></style>
