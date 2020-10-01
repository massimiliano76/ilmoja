/* eslint-disable no-console */

import { register } from 'register-service-worker'

  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'PWA toimii ja tarjoillaan selaimen cahcesta.\n' +
        'Lisätietoja osoitteesta https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker rekisteröity.')
    },
    cached () {
      console.log('Sisältö tallennettu offline käyttöä varten.')
    },
    updatefound () {
      console.log('Ladataan uutta sisältöä.')
    },
    updated () {
      console.log('Uutta sisältö saatavilla, ole hyvä ja päivitä.');
      const script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.innerHTML = 'window.location.reload(true);';
  
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'refresh');
      meta.setAttribute('content', '0;');
  
      const noscript = document.createElement('noscript');
      noscript.appendChild(meta);
  
      const body = document.getElementsByTagName('body')[0];
      body.appendChild(script);
      body.appendChild(noscript);
    },
    offline () {
      console.log('PWA on offline tilassa.')
    },
    error (error) {
      console.error('Virhe rekisteröitäessä service workeria:', error)
    }
  })