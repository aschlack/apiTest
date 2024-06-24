<template>
    <div v-if="artistName">
        <h2>{{ artistName }}</h2>
        <img class="" :src="artistLogo"  alt="Artist Logo" />
            <h3 class="text-lg font-bold uppercase">Band Bio:</h3>
            <div >
                <img :src="artistImg" alt="Band" />
                {{ artistBio }}
            </div>
            <h3 class="text-lg font-bold uppercase">Band Website:</h3>
            <a target="_blank" :href="artistLink">{{ artistURL }}</a>
    </div>
    <div v-else-if="error">AN ERROR OCCURED</div>
    <div v-else>LOADING</div>
</template>

<script>

export default {
name: 'ArtistDisplay',
props: [
    'artist'
],
data() {
    return {
        artistName: null,
        artistLogo: null,
        artistImg: null,
        artistBio: null,
        artistURL: null,
        artistLink: null,
        error: false
    }
},
mounted() {
    fetch('https://www.theaudiodb.com/api/v1/json/523532/search.php?s=' + this.artist)
    .then((response) => response.json())
    .then((data) => {
      this.artistBio = data.artists[0].strBiographyEN;
      this.artistLogo = data.artists[0].strArtistLogo;
      this.artistURL = data.artists[0].strWebsite;
      this.artistLink = 'https://' + data.artists[0].strWebsite;
      this.artistImg = data.artists[0].strArtistThumb;
      this.artistName = data.artists[0].strArtist;
    })
    .catch((error) => {
        console.error(error);
        this.error = true
    });
}

}
</script>

<style lang="scss" scoped>
</style>