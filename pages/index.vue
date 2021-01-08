<template>
  <div class="u-container u-marginBottom--r2 u-marginTop--r2">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row u-marginBottom--r3">
        <div class="GridCol2MainAside-col-main u-col">
          <h1 class="Base-h1">Herzlich Willkommen bei der Firma Walter Boike Schlosserei und Zerspanungstechnik</h1>
          <div class="MainContent">
            <p class="Base-p">Die Firma Walter Boike Schlosserei und Zerspanungstechnik ist ein mittelständiges Unternehmen welches seit mehr als 20 Jahren an dem Standort Kiel Wik direkt am Nord-Ostsee-Kanal ansässig ist.</p>
            <p class="Base-p">Die Firma wurde 1996 von Herrn Walter Boike gegründet und 2016 an den langjährigen Mitarbeiter Patrick Brendel verkauft.</p>
            <p class="Base-p">Mit unserer Modernen Technik, kompetenten und erfahrenen Mitarbeitern  wird garantiert, dass Ihr Auftrag mit Gewissen durchgeführt wird und das Endergebnis immer von bester Qualität ist.</p>
            <p class="Base-p u-marginBottom--r2">Sie Fragen zu unseren Produkten und Leistungen haben oder einfach nur weitere Informationen wünschen und uns kontaktieren möchten, rufen Sie uns an oder schicken Sie uns gerne eine Nachricht.</p>
            <p class="Base-p"><a class="Base-iconLink" href="tel:+49431337598">0431 / 33 75 98</a></p>
            <p class="Base-p"><a class="Base-iconLink" href="mailto:info@schlosserei-boike.de">info@schlosserei-boike.de</a></p>
          </div>
        </div>
        <div class="GridCol2MainAside-col-aside u-col">
          <Infobox/>
        </div>
      </div>
      <div class="GridCol3Even-row u-row">
        <div class="GridCol3Even-col u-col u-marginBottom--r2">
          <nuxt-link to="leistungen">
            <div class="TeaserButton-container">
              <div class="TeaserButton">
                <div class="TeaserButton-iconContainer">
                  <svg class="TeaserButton-icon u-scalingInlineSVG" width="61" height="65" viewBox="0 0 61 65" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice" style="padding-bottom: 100%;">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4479 0.0216064L56.9608 12.0695L60.2299 13.5586V51.463L33.1559 63.7686L30.4479 65L27.74 63.7686L0.666016 51.463V13.5586L3.93506 12.0822L30.4479 0.0216064ZM50.4151 15.0439L30.4479 5.96675L10.4731 15.0477L30.4479 24.1211L50.4151 15.0439ZM6.08055 47.9769V18.9935L27.74 28.8349V57.8183L6.08055 47.9769ZM33.1559 57.8183L54.8154 47.9769V18.9935L33.1559 28.8349V57.8183Z"/>
                  </svg>
                </div>
                <h3 class="TeaserButton-headline Base-h3 u-marginBottom--0">Unsere Leistungen</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="GridCol3Even-col u-col u-marginBottom--r2">
          <nuxt-link to="karriere">
            <div class="TeaserButton-container">
              <div class="TeaserButton">
                <div class="TeaserButton-iconContainer">
                  <svg class="TeaserButton-icon u-scalingInlineSVG" width="55" height="65" viewBox="0 0 55 65" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice" style="padding-bottom: 100%;">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.56867 1.01262e-07H46.4288C48.5806 -0.00033993 50.6444 0.855684 52.1658 2.37965C53.6873 3.90361 54.5417 5.9706 54.541 8.12564V56.8744C54.5417 59.0294 53.6873 61.0964 52.1658 62.6204C50.6444 64.1443 48.5806 65.0003 46.4288 65H8.56867C6.41728 64.9997 4.35417 64.1433 2.83327 62.6194C1.31238 61.0956 0.458306 59.029 0.458985 56.8744V8.12564C0.458306 5.97105 1.31238 3.90444 2.83327 2.38055C4.35417 0.856664 6.41728 0.000340253 8.56867 1.01262e-07ZM48.3414 58.7901C48.8485 58.282 49.1331 57.5927 49.1324 56.8743V8.12557C49.1331 7.40712 48.8485 6.71788 48.3414 6.20974C47.8342 5.70159 47.1462 5.41625 46.4288 5.41659H8.56868C7.85119 5.41625 7.16298 5.70155 6.65563 6.20966C6.14828 6.71776 5.86341 7.407 5.86375 8.12557V56.8743C5.86341 57.5929 6.14828 58.2821 6.65563 58.7902C7.16298 59.2983 7.85119 59.5836 8.56868 59.5833H46.4288C47.1462 59.5836 47.8342 59.2983 48.3414 58.7901ZM41.084 48.6872C41.084 49.4111 40.799 50.1054 40.2917 50.6172C39.7844 51.129 39.0965 51.4164 38.3792 51.416H16.7464C15.2533 51.416 14.043 50.1943 14.043 48.6872C14.043 47.1799 15.2531 45.9577 16.7464 45.957H38.3792C39.873 45.957 41.084 47.1794 41.084 48.6872ZM38.3792 40.625C39.873 40.625 41.084 39.4027 41.084 37.8949C41.084 37.1709 40.799 36.4766 40.2917 35.9648C39.7844 35.453 39.0965 35.1657 38.3792 35.166H16.7464C15.2533 35.166 14.043 36.3878 14.043 37.8949C14.043 39.4022 15.2531 40.6243 16.7464 40.625H38.3792ZM41.084 27.1038C41.084 28.6117 39.873 29.834 38.3792 29.834H16.7464C15.2531 29.8333 14.043 28.6112 14.043 27.1038C14.043 25.5967 15.2533 24.375 16.7464 24.375H38.3792C39.0965 24.3747 39.7844 24.662 40.2917 25.1738C40.799 25.6856 41.084 26.3799 41.084 27.1038ZM27.584 19.043C29.0801 19.043 30.293 17.8209 30.293 16.3135C30.293 14.806 29.0801 13.584 27.584 13.584H16.7507C15.255 13.5847 14.043 14.8065 14.043 16.3135C14.043 17.8204 15.255 19.0423 16.7507 19.043H27.584Z"/>
                  </svg>
                </div>
                <h3 class="TeaserButton-headline Base-h3 u-marginBottom--0">Aktuelle Stellenangebote</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="GridCol3Even-col u-col u-marginBottom--r2">
          <nuxt-link to="contact">
            <div class="TeaserButton-container">
              <div class="TeaserButton">
                <div class="TeaserButton-iconContainer">
                  <svg class="TeaserButton-icon u-scalingInlineSVG" width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice" style="padding-bottom: 100%;">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4631 34.3763C23.0686 34.3763 15.4324 26.7363 15.4324 17.3456C15.4324 7.95486 23.0724 0.314819 32.4631 0.314819C41.8539 0.314819 49.4926 7.95486 49.4926 17.3456C49.4926 26.7363 41.8526 34.3763 32.4631 34.3763ZM32.4632 5.39294C27.6286 5.39243 23.2699 8.30427 21.4194 12.7706C19.569 17.237 20.5913 22.3782 24.0096 25.7969C27.428 29.2156 32.5691 30.2385 37.0357 28.3885C41.5022 26.5385 44.4145 22.1801 44.4145 17.3456C44.4068 10.748 39.0607 5.40134 32.4632 5.39294ZM58.9062 62.207C58.9062 63.6092 60.043 64.746 61.4453 64.746C62.8475 64.746 63.9843 63.6092 63.9843 62.207V54.9617C63.9843 45.571 56.3481 37.931 46.9536 37.931H17.9714C8.58071 37.931 0.940674 45.5672 0.940674 54.9617V62.207C0.940674 63.6092 2.07745 64.746 3.47974 64.746C4.88202 64.746 6.0188 63.6092 6.0188 62.207V54.9617C6.02649 48.3637 11.3734 43.0168 17.9714 43.0091H46.9536C53.5519 43.0161 58.8992 48.3634 58.9062 54.9617V62.207Z"/>
                  </svg>
                </div>
                <h3 class="TeaserButton-headline Base-h3 u-marginBottom--0">Ansprechpartner</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Infobox from '~/components/Infobox.vue'

export default {
  transition: 'fadeOpacity',

  components: {
    Infobox
  }
}
</script>
