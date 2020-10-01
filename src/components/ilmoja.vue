<template>
  <div class="main day">
    <section id="lokaatio_kontti" class="day">
      <button
        @click="Katkaisin"
        aria-label="Vaiha yö/päivä teeman välillä"
        class="day daynight widget"
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
      <p id="ilmoja_pidellyt" class="day">Tarkista minkälaisia ilmoja pidellään ympäri maailmaa</p>
      <h1 id="h1_kaupunki">Syötä kaupunki</h1>
      <input
        title="kaupunki"
        autocomplete="off"
        id="lokaatio"
        class="day"
        v-model="loc"
        @keyup.enter="log();"
      />
      <button id="log" @click="log();" class="day">etsi</button>
      <h2 id="toimiiko" class="day"></h2>
    </section>
    <div class="atm">
      <div class="sisalto">
        <div class="kontti day">
          <section v-if="this.$store.state.dataIsRecived" class="card">
            <div class="card-body">
              <div
                v-if="weather.app_temp<=4 || weather.app_temp>=27 || weather.uv>=2.5 || weather.aqi>=51"
                class="varoitus"
              >
                <button
                  id="ilmoituksia"
                  aria-label="Avaa ilmoitukset"
                  class="day"
                  @click="ilmoitus();kumpi();"
                >!</button>
                <article class="ilmoitukset day">
                  <button
                    id="sulje"
                    aria-label="Sulje ilmoitukset"
                    class="day"
                    @click="ilmoitus_off"
                  >X</button>
                  <section class="notifications day">
                    <h2 id="varot_h1">Varoitukset</h2>
                    <ul class="notification_list">
                      <!--Ilmanlaatu yli 300-->
                      <li v-if="weather.aqi>300" class="notification day">
                        Mitä hemmettiä, ilmanlaatu indeksi (US/EPA) on
                        <p class="day hgh">{{weather.aqi}}</p> tällä hetkellä, eli
                        <u> MYRKYLLINEN</u>, älä lähde ulos urheileman, ota yhteyttä paikallisiin päättäjiin ja tiedustele että miten hemmetissä kaupungin ilmanlaatu on päässyt tähän pisteeseen?
                        <br />
                        <br />
                        <a
                          aria-label="lisätietoja pienhiukkasten haitallisista vaikutuksista terveyteen"
                          href="https://thl.fi/fi/web/ymparistoterveys/ilmansaasteet/pienhiukkasten-vaikutusmekanismit"
                        >Lisätietoja pienhiukkasten vaikutuksista terveyteen thl:n sivuilta</a>
                      </li>
                      <!--Lämpö alle -20-->
                      <li v-if="weather.app_temp<=-20" class="notification day">
                        Herranpieksut kuinka kylmä! Lämpötila on
                        <p class="day mid">{{weather.temp}}˚C</p>, Varovaisuutta erityisesti liikenteessä, tiet ovat perskutin liukkaita. Eikä sitten lähdetä ulkoilemaan ilman asianmukaisia vaatteita!
                        <br />
                        <p
                          class="day hgh"
                        >Älä missään nimessä jätä lapsia, koiria, kissoja tai yhtäkään elävää olentoa autoon ilman lämmitystä!!</p>
                      </li>
                      <!--Ilmanlaatu yli 200-->
                      <li v-if="weather.aqi>200&&weather.aqi<=300" class="notification day">
                        Ei hyvältä näytä, ilmanlaatu indeksi (US/EPA) on
                        <p class="day hgh">{{weather.aqi}}</p> tällä hetkellä, eli
                        <u> Todella haitallinen kaikille</u>, nyt kannattaa todella harkita, onko pakko lähteä ulos altistamaan elimistöään suurelle määrälle pienhiukkasia.
                        <br />
                        <br />
                        <a
                          aria-label="lisätietoja pienhiukkasten haitallisista vaikutuksista terveyteen"
                          href="https://thl.fi/fi/web/ymparistoterveys/ilmansaasteet/pienhiukkasten-vaikutusmekanismit"
                        >Lisätietoja pienhiukkasten vaikutuksista terveyteen thl:n sivuilta</a>
                      </li>
                      <!--Lämpö alle -5-->
                      <li
                        v-if="weather.app_temp<=-5&&weather.app_temp>-20"
                        class="notification day"
                      >
                        Ulkona on todella kylmää, hurr! Lämpötila on
                        <p class="day mid">{{weather.temp}}˚C</p>, Varovaisuutta erityisesti liikenteessä, tiet ovat todella liukkaita.
                        <br />
                        <p
                          class="day hgh"
                        > Älä missään nimessä jätä lapsia, koiria, kissoja tai yhtäkään elävää olentoa autoon ilman lämmitystä!!</p>
                      </li>
                      <!--Ilmanlaatu yli 150-->
                      <li v-if="weather.aqi>150&&weather.aqi<=200" class="notification day">
                        Hyhhyh, ilmanlaatu indeksi (US/EPA) on
                        <p class="day hgh">{{weather.aqi}}</p> tällä hetkellä, eli kaikille altistujoille
                        <u>Haitallinen</u>, erityisesti herkkien yksilöiden kannattaa rajoittaa hengästyttävää toimintaa vilkkailla alueilla.
                        <br />
                        <br />
                        <a
                          aria-label="lisätietoja pienhiukkasten haitallisista vaikutuksista terveyteen"
                          href="https://thl.fi/fi/web/ymparistoterveys/ilmansaasteet/pienhiukkasten-vaikutusmekanismit"
                        >Lisätietoja pienhiukkasten vaikutuksista terveyteen thl:n sivuilta</a>
                      </li>
                      <!--UV yli 10.5-->
                      <li v-if="weather.uv>=10.5" class="notification day">
                        <p class="day hgh">
                          <u>Tiedosta uv-säteilyn vaarallisuus.</u>
                        </p>
                        <br />
                        <br />UV-indeksi on
                        <p class="day hgh">{{(Math.round(weather.uv * 100) / 100).toFixed(1)}}</p>, eli aivan
                        <u>Perkuleen korkea</u>. Vältä auringossa olemista. Suojaa silmäsi ja levitä aurinkorasvaa
                        <p class="day hgh">Uskonnollisesti</p> yhden tunnin välein jos olet ulkona.
                        <br />
                        <br />
                        <a
                          aria-label="vinkkejä auringolta suojautumiseen ilmatieteen laitoksen sivuilta"
                          href="https://www.ilmatieteenlaitos.fi/suojautuminen-auringolta"
                        >Vinkkejä UV-säteilyltä suojautumiseen ilmatieteenlaitoksen sivuilta</a>
                      </li>
                      <!--Lämpö yli 45-->
                      <li v-if="weather.app_temp>=45" class="notification day">
                        Jumaleisson, nyt on ihan hemmetin kuuma! Lämpötila on
                        <p class="day hgh">{{weather.temp}}˚C</p>. Noudata erityistä varovaisuutta ulkona liikkuessasi! Ulkona on niin
                        <u>kuuma</u>, että se kannattaa ottaa jo vakavasti. Muista juoda nestettä ja kantaa vettä
                        <u>Aina mukanasi</u>. Huolehdi elimistösi neste- ja suolatasapainosta, palautumisesta ja levosta erityisellä tarkkuudella.
                        <p
                          class="day hgh"
                        >Nyt jos jätät elävän olennon autoon, löydät hyvin todennäköisesti takaisin tullessasi ei elävän olennon.</p>
                      </li>
                      <!--UV yli 7.5-->
                      <li v-if="weather.uv>=7.5&&weather.uv<10.5" class="notification day">
                        <p class="day hgh">Tiedosta uv-säteilyn haitallisuus.</p>
                        <br />
                        <br />UV-indeksi on
                        <p class="day hgh">{{(Math.round(weather.uv * 100) / 100).toFixed(1)}}</p>, eli
                        <u>Todella korkea</u>. Vältä auringossa olemista keskipäivällä. Levitä aurinkorasvaa
                        <p class="day hgh"> säännöllisesti</p>
                        <u> minimissään kahden tunnin välein. Suojaa myös silmiäsi auringolta.</u>
                        <br />
                        <br />
                        <a
                          aria-label="vinkkejä auringolta suojautumiseen ilmatieteen laitoksen sivuilta"
                          href="https://www.ilmatieteenlaitos.fi/suojautuminen-auringolta"
                        >Vinkkejä UV-säteilyltä suojautumiseen ilmatieteenlaitoksen sivuilta</a>
                      </li>
                      <!--Lämpö yli 35-->
                      <li v-if="weather.app_temp>=35&&weather.app_temp<45" class="notification day">
                        Nyt on syytä välttää ulkona rehkimistiä, on ihan pirun kuuma! Lämpötila on
                        <p class="day hgh">{{weather.temp}}˚C</p>. Muista juoda nestettä ja huolehtia elimistön neste- ja suolatasapainosta, palautumisesta ja levosta.
                        <br />
                        <br />
                        <p
                          class="day hgh"
                        >Älä missään nimessä jätä lapsia, koiria, kissoja tai yhtäkään elävää olentoa autoon ilman ilmastointia!</p>
                      </li>
                      <!--UV yli 5.5-->
                      <li v-if="weather.uv>=5.5&&weather.uv<7.5" class="notification day">
                        <p class="day hgh">Tiedosta uv-säteilyn haitallisuus.</p>
                        <br />
                        <br />UV-indeksi on
                        <p class="day hgh">{{(Math.round(weather.uv * 100) / 100).toFixed(1)}}</p>, eli
                        <u>Korkea</u>. Levitä aurinkorasvaa vähintään kahden tunnin välein.
                        <br />
                        <br />
                        <a
                          aria-label="vinkkejä auringolta suojautumiseen ilmatieteen laitoksen sivuilta"
                          href="https://www.ilmatieteenlaitos.fi/suojautuminen-auringolta"
                        >Vinkkejä UV-säteilyltä suojautumiseen ilmatieteenlaitoksen sivuilta</a>
                      </li>
                      <!--Ilmanlaatu yli 100-->
                      <li v-if="weather.aqi>100&&weather.aqi<=150" class="notification day">
                        Ilmanlaatu indeksi (US/EPA) näyttäisi olevan
                        <p class="day mid">{{weather.aqi}}</p> tällä hetkellä, eli
                        <u>Haitallinen herkille yksilöille</u>, herkkien yksilöiden kannattaa siis rajoittaa erityisesti hengästyttävää toimintaa vilkkailla alueilla.
                        <br />
                        <br />
                        <a
                          aria-label="lisätietoja pienhiukkasten haitallisista vaikutuksista terveyteen"
                          href="https://thl.fi/fi/web/ymparistoterveys/ilmansaasteet/pienhiukkasten-vaikutusmekanismit"
                        >Lisätietoja pienhiukkasten vaikutuksista terveyteen thl:n sivuilta</a>
                      </li>
                      <!--Lämpö yli 30-->
                      <li v-if="weather.app_temp>=30&&weather.app_temp<35" class="notification day">
                        Ulkona on kuuma! Lämpötila on
                        <p class="day mid">{{weather.temp}}˚C</p>, ota reilusti vettä mukaan jos lähdet ulos.
                        <p
                          class="day hgh"
                        >Vältä kuumuudessa kovin raskasta rehkimistä, kuuntele kehoasi.</p> Muista juoda nestettä ja huolehtia elimistön neste- ja suolatasapainosta, palautumisesta ja levosta.
                        <p
                          class="day hgh"
                        >Älä missään nimessä jätä lapsia, koiria, kissoja tai yhtäkään elävää olentoa autoon ilman ilmastointia!</p>
                      </li>
                      <!--UV yli 2.5-->
                      <li v-if="weather.uv>=2.5&&weather.uv<5.5" class="notification day">
                        Tiedosta uv-säteilyn haitallisuus.
                        <br />
                        <br />UV-indeksi on
                        <p class="day mid">{{(Math.round(weather.uv * 100) / 100).toFixed(1)}}</p>, levitä aurinkorasvaa kahden tunnin välein vaikka olisikin pilvistä.
                        <br />
                        <br />
                        <a
                          aria-label="vinkkejä auringolta suojautumiseen ilmatieteen laitoksen sivuilta"
                          href="https://www.ilmatieteenlaitos.fi/suojautuminen-auringolta"
                        >Vinkkejä UV-säteilyltä suojautumiseen ilmatieteenlaitoksen sivuilta</a>
                      </li>
                      <!--Lämpö yli 27-->
                      <li v-if="weather.app_temp>=27&&weather.app_temp<30" class="notification day">
                        Lämpötila on
                        <p class="day mid">{{weather.temp}}˚C</p>, ota vettä mukaan kun lähdet ulos ja nautiskele rauhallisesti lämpimästä ilmasta. Erityisesti riskiryhmiinn kuuluvien on syytä kuitenkin noudattaa varovaisuutta.
                        <br />
                        <p
                          class="day hgh"
                        >Älä missään nimessä jätä lapsia, koiria, kissoja tai yhtäkään elävää olentoa autoon ilman ilmastointia!</p>
                      </li>
                      <!--Ilmanlaatu yli 50-->
                      <li v-if="weather.aqi>50&&weather.aqi<=100" class="notification day">
                        Ilmanlaatu indeksi (US/EPA) näyttäisi olevan
                        <p class="day mid">{{weather.aqi}}</p> tällä hetkellä, eli ihan
                        <u>OK</u>, mutta ei kuitenkaan hyvä. Alle 50 jäävät arvot luokitellaan hyväksi.
                        <br />
                        <br />
                        <a
                          aria-label="lisätietoja pienhiukkasten haitallisista vaikutuksista terveyteen"
                          href="https://thl.fi/fi/web/ymparistoterveys/ilmansaasteet/pienhiukkasten-vaikutusmekanismit"
                        >Lisätietoja pienhiukkasten vaikutuksista terveyteen thl:n sivuilta</a>
                      </li>
                      <!--Lämpö alle 4-->
                      <li v-if="weather.app_temp<=4&&weather.app_temp>=-5" class="notification day">
                        Ulkona on vilpoisaa, lämpötila on
                        <p class="day mid">{{weather.temp}}˚C</p>, Varovaisuutta erityisesti liikenteessä, tiet saattavat olla hyvin liukkaita.
                        <br />
                        <p
                          class="day hgh"
                        >Älä missään nimessä jätä lapsia, koiria, kissoja tai yhtäkään elävää olentoa autoon ilman lämmitystä!</p>
                      </li>
                    </ul>
                  </section>
                </article>
              </div>
              <section id="aika">
                <h2 id="klo" class="day"></h2>
                <h2 id="pvm" class="day"></h2>
              </section>
              <img
                :src="'./ikonit/'+weather.weather.icon+'.svg'"
                alt="sää ikoni"
                id="atm_icon"
                class="day"
              />
              <h2 class="atm_lampo day">{{weather.temp}}°C</h2>
              <h3 class="data-teksti day">{{weather.city_name}}, {{weather.country_code}}</h3>
              <h3 class="atm_lampo day">{{weather.weather.description}}</h3>
            </div>
          </section>
          <div v-else class="Sää-widget"></div>
        </div>
      </div>
    </div>
    <div class="kontin_isa">
      <div class="sisalto">
        <div class="kontti">
          <div class="card">
            <div class="card-body">
              <div class="sisalto">
                <div class="kortit">
                  <div class="responsive">
                    <div class="kortti">
                      <div class="card kortti-1-gradient">
                        <div class="card-body text-center">
                          <i class="day" style="font-size:40px"></i>
                          <h4 class="data-teksti day">
                            <img
                              :src="'./ikonit/feelslike.svg'"
                              alt="tuntuu"
                              aria-label="Sää tuntuu"
                              class="details_ikoni day"
                            />
                          </h4>
                          <h4
                            v-if="weather.app_temp<-5"
                            class="data-teksti day very_cold"
                          >{{weather.app_temp}}°C</h4>
                          <h4
                            v-if="weather.app_temp>=-5&&weather.app_temp<5"
                            class="data-teksti day cold"
                          >{{weather.app_temp}}°C</h4>
                          <h4
                            v-if="weather.app_temp>=5&&weather.app_temp<27"
                            class="data-teksti day low"
                          >{{weather.app_temp}}°C</h4>
                          <h4
                            v-if="weather.app_temp>=27&&weather.app_temp<30"
                            class="data-teksti day mid"
                          >{{weather.app_temp}}°C</h4>
                          <h4
                            v-if="weather.app_temp>=30&&weather.app_temp<35"
                            class="data-teksti day hgh"
                          >{{weather.app_temp}}°C</h4>
                          <h4
                            v-if="weather.app_temp>=35"
                            class="data-teksti day very_hgh"
                          >{{weather.app_temp}}°C</h4>
                        </div>
                      </div>
                    </div>
                    <div class="kortti">
                      <div class="card kortti-2-gradient">
                        <div class="card-body text-center">
                          <i class="day" style="font-size:40px"></i>
                          <h4 class="data-teksti day">
                            <img
                              :src="'./ikonit/tuuli.svg'"
                              alt="tuuli"
                              aria-label="Tuulen nopeus"
                              class="details_ikoni day"
                            />
                          </h4>
                          <h4 class="data-teksti day">{{(Math.round(weather.wind_spd * 100) / 100).toFixed(1)}}m/s</h4>
                        </div>
                      </div>
                    </div>
                    <div class="kortti">
                      <div class="card kortti-3-gradient">
                        <div class="card-body text-center">
                          <i class="day" style="font-size:40px"></i>
                          <h4 class="data-teksti day">
                            <img
                              :src="'./ikonit/ilmankosteus.svg'"
                              alt="ilmankosteus"
                              aria-label="Ilmankosteus prosentti"
                              class="details_ikoni day"
                            />
                          </h4>
                          <h4 class="data-teksti day">{{(Math.round(weather.rh * 100) / 100).toFixed(1)}}%</h4>
                        </div>
                      </div>
                    </div>
                    <div class="kortti">
                      <div class="card kortti-4-gradient">
                        <div class="card-body text-center">
                          <i class="day" style="font-size:40px"></i>
                          <h4 class="data-teksti day">
                            <img
                              :src="'./ikonit/ilmanpaine.svg'"
                              alt="ilmanpaine"
                              aria-label="Ilmanpaine mb"
                              class="details_ikoni day"
                            />
                          </h4>
                          <h4 class="data-teksti day">{{(Math.round(weather.pres * 100) / 100).toFixed(1)}}mb</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="details">
                  <div class="details_kontti">
                    <section class="details_section">
                      <div>
                        <ul class="details_lista">
                          <li class="details_lista">
                            <ul class="details_lista">
                              <li scope="col" class="data-teksti day">UV&#8209;indeksi</li>
                              <li
                                v-if="weather.uv>=0&&weather.uv<2.5"
                                class="data-teksti day low"
                              >{{(Math.round(weather.uv * 100) / 100).toFixed(1)}}</li>
                              <li
                                v-if="weather.uv>=2.5&&weather.uv<7.5"
                                class="data-teksti day mid"
                              >{{(Math.round(weather.uv * 100) / 100).toFixed(1)}}</li>
                              <li
                                v-if="weather.uv>=7.5"
                                class="data-teksti day hgh"
                              >{{(Math.round(weather.uv * 100) / 100).toFixed(1)}}</li>
                            </ul>
                            <ul class="details_lista">
                              <li scope="col" class="data-teksti day">Pilvisyys</li>
                              <li class="data-teksti day">{{weather.clouds}}%</li>
                            </ul>
                            <ul class="details_lista">
                              <li scope="col" class="data-teksti day">Sademäärä</li>
                              <li class="data-teksti day">{{(Math.round(weather.precip * 100) / 100).toFixed(1)}}mm/hr</li>
                            </ul>
                            <ul class="details_lista">
                              <li scope="col" class="data-teksti day">Näkyvyys</li>
                              <li class="data-teksti day">{{(Math.round(weather.vis * 100) / 100).toFixed(1)}}km</li>
                            </ul>
                            <ul class="details_lista">
                              <li scope="col" class="data-teksti day">Ilmanlaatu</li>
                              <li v-if="!weather.aqi" class="data-teksti day low">Ei dataa</li>
                              <li
                                v-if="weather.aqi>=0&&weather.aqi<50"
                                class="data-teksti day low"
                              >{{weather.aqi}}/AQI</li>
                              <li
                                v-if="weather.aqi>=50&&weather.aqi<150"
                                class="data-teksti day mid"
                              >{{weather.aqi}}/AQI</li>
                              <li
                                v-if="weather.aqi>=150"
                                class="data-teksti day hgh"
                              >{{weather.aqi}}/AQI</li>
                            </ul>
                            <ul class="details_lista">
                              <li scope="col" class="data-teksti day">Kastepiste</li>
                              <li class="data-teksti day">{{(Math.round(weather.dewpt * 100) / 100).toFixed(1)}}°C</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {DateTime} from "luxon";
export default {
  data: function () {
    return {
      loc: "",
      i: 0,
   };
 },
  mounted() {
    this.$store.commit("retrieve");
    var kaupungit = [
      "New york",
      "Lontoo",
      "Berliini",
      "Tallinna",
      "Helsinki",
      "Moskova",
      "Abu Dhabi",
      "Delhi",
      "Tokio",
      "Seoul",
      "Taipei",
      "Auckland",
      "Johannesburg",
      "Tripoli",
      "Tukholma",
      "Dublin",
      "Reykjavik",
      "Frankfurt",
      "Oslo",
      "Copenhagen",
      "Gdańsk",
      "Pariisi",
      "Wien",
      "Madrid",
      "Lissabon",
      "Sevastopol",
      "Baghdad",
      "Kathmandu",
      "Thimphu",
      "Chittagong",
      "Pyongyang",
      "Kyoto",
      "Kaesŏng",
      "Incheon",
    ];
    var rndm = kaupungit[(Math.random() * kaupungit.length) | 0];
    document.getElementById("lokaatio").placeholder = rndm;
    setInterval(function () {
      var rndm = kaupungit[(Math.random() * kaupungit.length) | 0];
      document.getElementById("lokaatio").placeholder = rndm;
   }, 2000);
    setInterval(this.aika, 2000);
    if (this.$store.state.loc) {
      this.loc=this.$store.state.loc;
      this.$store.commit("location", this.loc);
        this.$store.commit("UPDATE_WEATHER");
        this.$store.dispatch("updateWeather");
        this.i++;
    }
 },
  methods: {
    log() {
      if (this.loc != "") {
        this.$store.commit("location", this.loc);
        this.$store.commit("UPDATE_WEATHER");
        this.$store.dispatch("updateWeather");
        this.$store.commit("save");
        this.i++;
     } else {
        document
          .getElementById("lokaatio")
          .animate(
            [
              {transform: "rotate(0deg)"},
              {transform: "rotate(3deg)"},
              {transform: "rotate(0deg)"},
              {transform: "rotate(-3deg)"},
              {transform: "rotate(0deg)"},
            ],
            {duration: 250}
          );
     }
   },
    aika() {
      if (this.i > 0 && this.$store.state.dataIsRecived) {
        document.getElementById("klo").innerHTML = DateTime.local()
          .setZone(this.weather.timezone)
          .toLocaleString(DateTime.TIME_SIMPLE);
        document.getElementById("pvm").innerHTML = DateTime.local()
          .setZone(this.weather.timezone)
          .toLocaleString(DateTime.DATE_SHORT);
     }
   },
    ilmoitus() {
      document.querySelector(".ilmoitukset").classList.add("valmis");
   },
    ilmoitus_off() {
      document.querySelector(".ilmoitukset").classList.remove("valmis");
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
      let katkaisin = document.querySelector(".night");
      if (!katkaisin) {
        this._valotPois();
     } else {
        this._valotPaalle();
     }
   },
    kumpi() {
      let kumpi = document.querySelector(".night");
      if (kumpi) {
        var x, i;
        x = document.querySelectorAll(".day");
        for (i = 0; i < x.length; i++) {
          x[i].classList.add("night");
       }
     } else {
        return;
     }
   },
 },
  computed: {
    weather() {
      return this.$store.state.weather; //sää Vuex storesta
   },
 },
};
</script>