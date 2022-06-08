<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'animate.css';
@import "assets/css/mixins";

@font-face {
  font-family: 'The Sans Arabic';
  src: url(assets/fonts/THESANSARABIC-BOLD.ttf);
}

#app {
  box-sizing: border-box;
  font-family: "The Sans Arabic", Avenir, Helvetica, Arial, sans-serif;

  // This defines what 1rem is
  font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

  @include respond(tab-land) { // width < 1200?
    font-size: 45%; //1 rem = 9px, 9/16 = 50%
  }

  @include respond(tab-port) { // width < 900?
    font-size: 40%; //1 rem = 8px, 8/16 = 50%
  }

  @include respond(big-desktop) {
    font-size: 75%; //1rem = 12, 12/16
  }
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  transition: .4s all;
}

i {
  transition: .01s all !important;
}

.ar {
  text-align: right;
  direction: rtl;
}

.en {
  text-align: left;
  direction: ltr;
}

.hidden {
  display: none;
}

.title-1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.title-2 {
  font-size: 2.2rem;
  font-weight: 700;
}

.title-3 {
  font-size: 2rem;
  font-weight: 500;
}

.title-4 {
  font-size: 1.6rem;
  font-weight: 500;
}

.title-5 {
  font-size: 1.4rem;
  font-weight: 500;
}

.desc {
  font-size: 1rem;
  margin: .5rem 1rem;
  font-weight: 500;
  width: 60%;
}

a {
  text-decoration: none !important;
  color: inherit !important;
}

@include respond(tab-port) {
  .desc {
    width: 100%;
  }
}

</style>
