<template>
        <span class="small -rotate-1 relative block text-base mr-32 tracking-wide blue-type">(some of)</span>
        <div class="m-0 leading-10 page-heading">
            <span class="line-one -rotate-2 block text-5xl tracking-tight blue-type">the music that</span>
            <span class="line-two rotate-2 relative top-1 block text-4xl tracking-tight">made me</span>
        </div>
  </template>
  
  <script>
  export default {
    name: 'Title',
  }
  </script>
  
  <style lang="scss" scoped>

    .page-heading {
        font-family: "Alegreya", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        .line-one {
            background: #fa911e;
        }
        .line-two {
            background: #000b40;
            color: #fa911e;
        }
    }
    .small {
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

  </style>