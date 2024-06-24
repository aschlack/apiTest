import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { apiKey } from "./secret";

createApp(App).use(store).mount("#app");

export function getArtistInfo(artist) {
  const artistName = artist.replace(/ /g, "_"); // remove spaces and added in underscores
  const url = `https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${artistName}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.artists[0]);
    })
    .catch((error) => console.error(error));
}

getArtistInfo('nirvana');