<template>
  <div v-if="artistAlbums" class="mt-8 text-left w-full">
    <h2 class="text-base font-bold uppercase blue-type">Albums:</h2>
    <div v-for="album in artistAlbums" :key="album.strAlbum">
      <img
        class="mt-7 mb-3"
        v-if="album.strAlbumThumb"
        :src="album.strAlbumThumb"
        :alt="album.strAlbum + ' cover art'"
      />
      <div v-if="album.strAlbum">
        <span class="text-base font-bold uppercase blue-type"
          >Album Title: </span
        >{{ album.strAlbum }}
      </div>
      <div v-if="album.intYearReleased">
        <span class="text-base font-bold uppercase blue-type"
          >Year Released: </span
        >{{ album.intYearReleased }}
      </div>
      <div v-if="album.strDescriptionEN" class="mt-3">
        <span class="text-base font-bold uppercase blue-type"
          >About {{ album.strAlbum }}: </span
        >{{ album.strDescriptionEN }}
      </div>
    </div>
  </div>
  <div v-else-if="error" class="text-lg font-bold text-red-700">
    Sorry, we are unable to retrieve this artist's albums information at this time.
  </div>
  <div v-else class="text-xl font-bold blue-type">
    Loading Albums Info
    <img
      class="size-8 inline-block ml-1"
      src="../assets/img/loading.svg"
      alt="three dot loader visual"
    />
  </div>
</template>

<script>
export default {
  name: "ArtistAlbums",
  props: ["artist"],
  data() {
    return {
      artistAlbums: null,
      error: false,
    };
  },
  mounted() {
    fetch(
      "https://www.theaudiodb.com/api/v1/json/523532/searchalbum.php?s=" +
        this.artist
    )
      .then((response) => response.json())
      .then((data) => {
        this.artistAlbums = data.album;
      })
      .catch((error) => {
        console.error(error);
        this.error = true;
      });
  },
};
</script>

<style lang="scss" scoped></style>
