<template>
  <div class="u-container u-marginBottom--r2 u-marginTop--r2">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row">
        <div class="GridCol2MainAside-col-main u-col">
          <h1 class="Base-h1">Wir suchen Verstärkung für unser Team</h1>
          <div class="MainContent u-marginBottom--r2">
            <h2 class="Base-h3 u-marginBottom--r2">Ausbildung</h2>
            <Accordion class="u-marginBottom--r2" id="jobs1" :content="jobContent" multiple />
            <h2 class="Base-h3 u-marginBottom--r2">Freie Stellen</h2>
            <Accordion class="u-marginBottom--r2" id="jobs2" :content="jobContent2" multiple />
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
import Accordion from '~/components/Accordion.vue'

const jobContent = [

]

export default {
  transition: 'fadeOpacity',

  components: {
    Infobox,
    Accordion
  },
  data() {
    return {
      jobContent: [
      {
        id: 1,
        active: false,
        title: 'Metallbauer Fachrichtung Konstruktionstechnik (m/w/d)',
        details: `<ul class="Base-ul">
        <li><strong>Ausbildungsbeginn:</strong> 01.08</li>
        <li><strong>Ausbildungsdauer:</strong> 3,5 Jahre</li>
        <li><strong>Voraussetzungen:</strong> mindestens guter Hauptschulabschluss, handwerkliches Geschick</li>
      </ul>`
      },
      {
        id: 2,
        active: false,
        title: 'Zerspanungsmechaniker Fachrichtung Dreh- und Frästechnik (m/w/d)',
        start:'01.08.2020',
        time: '3,5 Jahre',
        skills: 'sehr guter Hauptschulabschluss oder guter Realschulabschluss, gute Mathematikkenntnisse',
        details: `<ul class="Base-ul u-marginBottom--r1">
        <li><strong>Ausbildungsbeginn:</strong> 01.08</li>
        <li><strong>Ausbildungsdauer:</strong> 3,5 Jahre</li>
        <li><strong>Voraussetzungen:</strong> sehr guter Hauptschulabschluss oder guter Realschulabschluss, gute Mathematikkenntnisse</li>
      </ul>`
      },
      ],
      jobContent2: [
        {
          id: 3,
          active: false,
          title: 'Metallbauer / Schlosser (m/w/d)',
          start:'01.08',
          time: '3,5 Jahre',
          skills: 'sehr guter Hauptschulabschluss oder guter Realschulabschluss, gute Mathematikkenntnisse',
          details: `
      <h4 class="Base-h5">Voraussetzung:</h4>
      <ul class="Base-ul u-marginBottom--r1">
      <li>abgeschlossene Berufsausbildung als Schlosser/Metallbauer oder vergleichbar</li>
      <li>Schweißkenntnisse wünschenswert in WIG, MAG, E-Hand</li>
      <li>Teamfähigkeit</li>
      <li>Zuverlässigkeit</li>
      </ul>
      <h4 class="Base-h5">Wir bieten:</h4>
      <ul class="Base-ul u-marginBottom--r1">
        <li>Einschichtbetrieb</li>
        <li>unbefristete Anstellung</li>
        <li>30 Tage Urlaub im Jahr</li>
        <li>Urlaubs- und Weihnachtsgeld</li>
        <li>VWL / AVWL</li>
      </ul>
        `
        },
        {
          id: 4,
          active: false,
          title: 'Zerspanungsmechaniker (m/w/d)',
          details: `<h4 class="Base-h5">Voraussetzung:</h4>
      <ul class="Base-ul u-marginBottom--r1">
      <li>abgeschlossene Berufsausbildung als Zerspanungsmechaniker oder vergleichbar</li>
      <li>Selbstständige Arbeitsweise</li>
      <li>Teamfähigkeit</li>
      <li>Zuverlässigkeit</li>
    </ul>
    <h4 class="Base-h5">Unsere Steuerungen:</h4>
    <ul class="Base-ul u-marginBottom--r1">
      <li>Siemens 828D</li>
      <li>Fanuc (Drehtechnik)</li>
      <li>Fagor</li>
      <li>DIN-Steuerung</li>
    </ul>
    <p class="Base-p">Anfertigen von Einzelteilen und Kleinserien</p>
    <h4 class="Base-h5">Wir bieten:</h4>
    <ul class="Base-ul u-marginBottom--r1">
      <li>Einschichtbetrieb</li>
      <li>unbefristete Anstellung</li>
      <li>30 Tage Urlaub im Jahr</li>
      <li>Urlaubs- und Weihnachtsgeld</li>
      <li>VWL / AVWL</li>
    </ul>
      `
        }
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    background: white;
  }
</style>
