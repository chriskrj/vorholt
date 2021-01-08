<template>
  <div class="u-container u-marginBottom--r2 u-marginTop--r2">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row">
        <div class="GridCol2MainAside-col-main u-col">
          <h1 class="Base-h1">Kontakt</h1>
          <div class="MainContent">
            <h2 class="Base-h5">Walter Boike GmbH & Co.KG</h2>
            <p class="Base-p">Uferstr. 56  |  24106 Kiel</p>
            <p class="Base-p">
              <a class="Base-iconLink" href="tel:+49431337598">0431 33 75 98</a>
            </p>
            <p class="Base-p">
              <a class="Base-iconLink-fax" href="tel:+49431337373">0431 33 7373</a>
            </p>
            <p class="Base-p">
              <a class="Base-iconLink" href="mailto:info@schlosserei-boike.de">info@schlosserei-boike.de</a>
            </p>
            <div class="u-marginBottom--r2 u-marginTop--r2">

              <figure class="Base-figure">
                <img src="@/assets/Images/address.jpg" alt="Google Maps Adresse" />
                <figcaption class="Base-figcaption">
                  Routenbeschreibung zu unserem Standort. <a class="Base-iconLink" ref="external" target="_blank" href="https://goo.gl/maps/hywELEdpFtF8v5cG9">Zur Routenbeschreibung</a>
                </figcaption>
              </figure>

            </div>
          </div>
        </div>
        <div class="GridCol2MainAside-col-aside u-col">
          <Infobox/>
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
