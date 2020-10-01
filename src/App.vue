<template>
  <div id="app">
    <nav class="navbar">
      <div class="container day">
        <ul class="navbar-nav">
          <li class="nav-item" alt="Logo">
            <img
              src="../src/assets/logo.svg"
              width="30"
              height="30"
              class="logo day"
              alt="Ilmoja pidellyt"
            />
          </li>
          <li class="nav-item day" alt="Haku">
            <button aria-label="Hae uutta kaupunkia" @click="haku" id="haku" class="day">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <defs />
                <path
                  stroke="#fff"
                  stroke-width=".1"
                  d="M13.4.05c3.66 0 6.65 2.93 6.65 6.5s-3 6.5-6.65 6.5a6.7 6.7 0 01-3.95-1.3l-1.2 1.17c.03.43-.13.84-.44 1.14l-4.8 4.7c-.6.59-1.58.59-2.18 0l-.33-.32c-.6-.59-.6-1.54 0-2.12l4.81-4.7c.3-.3.73-.46 1.17-.44l1.27-1.24a6.33 6.33 0 01-1-3.4c0-3.56 3-6.49 6.65-6.49 0 0 0 0 0 0zm0 3c-1.99 0-3.57 1.55-3.57 3.5 0 1.94 1.58 3.5 3.57 3.5 2 0 3.58-1.56 3.58-3.5 0-1.95-1.58-3.5-3.58-3.5z"
                />
              </svg>
            </button>
          </li>
          <li class="nav-item day" alt="Valot">
            <button
              aria-label="Vaihda yö/päivä-tilojen välillä"
              @click="Katkaisin"
              class="lamppu day daynight"
            >
              <svg
                id="lamppu"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="20"
                height="25.39"
              >
                <defs />
                <defs>
                  <linearGradient id="a">
                    <stop offset="0" stop-color="#ffe75a" />
                    <stop offset="1" stop-color="#ffe75a" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="f"
                    x1="18.9"
                    x2="32.6"
                    y1="31.7"
                    y2="31.7"
                    gradientTransform="matrix(.16129 0 0 .16211 -3.065 -1.783)"
                    gradientUnits="userSpaceOnUse"
                    xlink:href="#a"
                  />
                  <linearGradient
                    id="e"
                    x1="30.7"
                    x2="41.8"
                    y1="21.4"
                    y2="21.4"
                    gradientTransform="matrix(.16129 0 0 .16211 -3.065 -1.783)"
                    gradientUnits="userSpaceOnUse"
                    xlink:href="#a"
                  />
                  <linearGradient
                    id="d"
                    x1="45.4"
                    x2="54.7"
                    y1="17.5"
                    y2="17.5"
                    gradientTransform="matrix(.16129 0 0 .16211 -3.065 -1.783)"
                    gradientUnits="userSpaceOnUse"
                    xlink:href="#a"
                  />
                  <linearGradient
                    id="c"
                    x1="67.4"
                    x2="81.1"
                    y1="31.7"
                    y2="31.7"
                    gradientTransform="matrix(.16129 0 0 .16211 -3.065 -1.783)"
                    gradientUnits="userSpaceOnUse"
                    xlink:href="#a"
                  />
                  <linearGradient
                    id="b"
                    x1="58.2"
                    x2="69.3"
                    y1="21.4"
                    y2="21.4"
                    gradientTransform="matrix(.16129 0 0 .16211 -3.065 -1.783)"
                    gradientUnits="userSpaceOnUse"
                    xlink:href="#a"
                  />
                </defs>
                <g fill="#ffe75a" stroke-width=".309">
                  <path
                    stroke="#1c062a"
                    d="M50 29c-8 0-15 9-17 16-1 3 2 6 2 9 2 5 3 11 6 16l4 4h10l4-4c3-5 4-11 6-16 0-3 3-6 2-9-2-7-9-16-17-16z"
                    transform="matrix(.32258 0 0 .32487 -6.129 -3.574)"
                  />
                  <g stroke="#000">
                    <path
                      d="M37 65c-4-2-8-2-12 0l-1 1 1 1c4 2 8 2 12 0l1-1z"
                      transform="matrix(.32258 0 0 .32487 0 -.325)"
                    />
                    <path
                      d="M37 68H25l-1 1v1l1 1h12l1-1v-1z"
                      transform="matrix(.32258 0 0 .32487 0 -.325)"
                    />
                    <path
                      d="M37 72c-4-2-8-2-12 0l-1 1 1 1c4 2 8 2 12 0l1-1z"
                      transform="matrix(.32258 0 0 .32487 0 -.325)"
                    />
                    <path
                      d="M27 76c0-3 8-3 9 0 0 1-3 3-5 3s-5-2-4-3z"
                      transform="matrix(.32258 0 0 .32487 0 -.325)"
                    />
                  </g>
                </g>
                <g id="sade" stroke-width=".25">
                  <path
                    fill="url(#b)"
                    d="M8.065.973c0-.325-.323-.487-.646-.487-.645.325-1.29 1.297-1.129 1.946.162.324.484.486.807.324.645-.162.645-1.297.968-1.783z"
                    transform="scale(2 2.00396)"
                  />
                  <path
                    fill="url(#c)"
                    d="M9.677 2.432c-.645.324-1.612.486-1.935 1.134l.484.649C8.87 4.377 9.839 3.89 10 3.08z"
                    transform="scale(2 2.00396)"
                  />
                  <path
                    fill="url(#d)"
                    d="M5.323 0c.483.486.483 1.621 0 2.107h-.646c-.483-.486-.483-1.62 0-2.107z"
                    transform="scale(2 2.00396)"
                  />
                  <path
                    fill="url(#e)"
                    d="M1.935.973c0-.325.323-.487.646-.487.645.325 1.29 1.297 1.129 1.946-.162.324-.484.486-.807.324-.645-.162-.806-1.135-.968-1.783z"
                    transform="scale(2 2.00396)"
                  />
                  <path
                    fill="url(#f)"
                    d="M.323 2.432c.645.324 1.612.486 1.935 1.134l-.484.649C1.13 4.377.161 3.89 0 3.08z"
                    transform="scale(2 2.00396)"
                  />
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <ilmoja/>
  </div>
</template>
<script>
import ilmoja from "@/components/ilmoja.vue";
export default {
  components: {
    ilmoja
  },
  methods: {
    haku() {
      document.getElementById("lokaatio_kontti").classList.remove("valmis");
      document.getElementById("lokaatio").classList.remove("valmis");
    },
    _valotPois() {
      var x, i;
      x = document.querySelectorAll(".day");
      for (i = 0; i < x.length; i++) {
        x[i].classList.add("night");
      }
    },
    _valotPaalle() {
      var x, i;
      x = document.querySelectorAll(".night");
      for (i = 0; i < x.length; i++) {
        x[i].classList.remove("night");
      }
    },
    Katkaisin() {
      let Katkaisija = document.querySelector(".night");
      if (!Katkaisija) {
        this._valotPois();
      } else {
        this._valotPaalle();
      }
    },
  },
};
</script>

<style lang="scss">
@import "../src/scss/styles.scss";
</style>
