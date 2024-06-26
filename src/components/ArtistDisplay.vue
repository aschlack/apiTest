<template>
  <div v-if="artistName" class="flex items-center justify-center flex-col">
    <img
      v-if="artistLogo"
      class="my-4 max-w-md"
      :src="artistLogo"
      :alt="artistName"
    />
    <div v-if="!artistLogo" class="text-3xl font-bold blue-type">
      {{ artistName }}
    </div>
    <div class="text-left mt-8">
      <h2 class="text-base font-bold uppercase blue-type">Artist Bio:</h2>
      <div class="text-lg">{{ artistBio }}</div>
    </div>
    <div v-if="artistGenre" class="text-left mt-8 w-full">
      <h2 class="text-base font-bold uppercase blue-type">Artist Genre:</h2>
      <div class="text-lg">{{ artistGenre }}</div>
    </div>
    <div v-if="artistURL" class="mt-8 text-left w-full">
      <h2 class="text-base font-bold uppercase blue-type">Artist Website:</h2>
      <a class="standard-link text-lg" target="_blank" :href="artistLink" :aria-label="'Visit ' + artistName + ' website. This link will open in a new window.'">{{
        artistURL
      }}<img src="../assets/img/external-link.svg" class="size-4 inline-block ml-1" alt="External Link" /></a>
    </div>

    <img class="mt-8 max-w-lg" :src="artistImg" alt="Band" />
  </div>
  <div v-else-if="error" class="text-lg font-bold text-red-700">
    Sorry, we are unable to retrieve this artist's information at this time.
  </div>
  <div v-else class="text-xl font-bold blue-type">Loading Artist Info <img class="size-8 inline-block ml-1" src="../assets/img/loading.svg" alt="three dot loader visual" /></div>
</template>

<script>
export default {
  name: "ArtistDisplay",
  props: ["artist"],
  data() {
    return {
      artistName: null,
      artistLogo: null,
      artistImg: null,
      artistBio: null,
      artistURL: null,
      artistLink: null,
      artistGenre: null,
      error: false,
    };
  },
  mounted() {
    fetch(
      "https://www.theaudiodb.com/api/v1/json/523532/search.php?s=" +
        this.artist
    )
      .then((response) => response.json())
      .then((data) => {
        this.artistBio = data.artists[0].strBiographyEN;
        this.artistLogo = data.artists[0].strArtistLogo;
        this.artistURL = data.artists[0].strWebsite;
        this.artistLink = "https://" + data.artists[0].strWebsite;
        this.artistImg = data.artists[0].strArtistThumb;
        this.artistName = data.artists[0].strArtist;
        this.artistGenre = data.artists[0].strGenre;
      })
      .catch((error) => {
        console.error(error);
        this.error = true;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>
