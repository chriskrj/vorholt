<template>
  <div class="u-container u-marginBottom--r2 u-marginTop--r2">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row">
        <div class="GridCol2MainAside-col-main u-col">
          <h1 class="Base-h1">Leistung  Kompetenz</h1>
          <div class="MainContent">
            <ul class="Base-ul u-marginTop--r2 u-marginBottom--r2">
              <li>CNC Dreh- und Frästeile</li>
              <li>Schweißfachbetrieb nach ISO-3834, Zertifiziert nach DIN EN 1090 EXC 2 (bis S355 und CrNi-Stähle)</li>
              <li>Zertifizierter Fachbetrieb nach WHG</li>
              <li>Neuanfertigungen</li>
              <li>Reparaturen Instandhaltungen </li>
              <li>Konstruktionszeichnung, Werkplanung, Entwürfe</li>
            </ul>

            <h4 class="Base-h3">Unser Maschinenpark umfasst:</h4>
            <ul class="Base-ul u-marginTop--r2 u-marginBottom--r2">
              <li>3 Achs Fräszentrum (4 Stück)</li>
              <li>4 Achs Fräszentrum</li>
              <li>Drehbänke mit angetriebenen Werkzeugen und Y-Achse (3 Stück)</li>
              <li>Konventionelle Drehbank</li>
              <li>Konventionelle Fräse</li>
              <li>Fräse mit DIN Steuerung</li>
              <li>25 Tonnen Presse</li>
              <li>Blechschere</li>
              <li>Kantbank</li>
              <li>Schweißgeräte bis über 400 A</li>
              <li>LKW mit Kran</li>
            </ul>
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

<style scoped>
  .container {
    background: white;
  }
</style>
