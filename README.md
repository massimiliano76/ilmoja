# Ilmoja [pidelly]

**Ilmoja** is a simple and responsive weather dashboard made with Vue.js

**Ilmoja** uses **AXIOS** to get data from **Weatherbit API**, and **Vuex** to store &amp; manage the data provided by the api.

-UI is responsive. Containers are made responsive with flexbox and fonts calculate their size based on viewport width. Icons are in svg format, created with inkscape, used SVGOMG for compression.

-User inputs city name(+2 letter country code if needed) and gets the weather data from that location.

-Users last used location is saved to local storage and used on refresh.


## Api key

https://www.weatherbit.io/api to get your own free api key.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

#### CREDITS

Credits for the data go obviously to the WeatherBit!