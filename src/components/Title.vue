<template>
    <div>
        <span class="small -rotate-1 relative block text-base mr-32">(some of)</span>
        <h1 class="m-0 leading-10"><span class="line-one -rotate-2 block text-5xl">the music that</span><br /><span class="line-two rotate-2 relative -top-9 block text-4xl">made me</span></h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Title',
  }
  </script>
  
  <style lang="scss" scoped>

    h1 {
        font-family: "Alegreya", serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        color: #fff;
        .line-one {
            background: #fa911e;
        }
        .line-two {
            background: #000b40;
        }
    }
    .small {
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-weight: 200;
        font-style: normal;
    }

  </style>