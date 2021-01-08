<template>
  <div class="u-container u-marginBottom--r2 u-marginTop--r2">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row">
        <div class="GridCol2MainAside-col-main u-col">
          <h1 class="Base-h1">Über uns</h1>
          <div class="MainContent">
            <p class="Base-p">Wir haben eine Fertigungsfläche von 600 m², Halle bekrant bis 3,2 Tonnen, 1
              Teleskopstapler bis 3,8 Tonnen mit 13,5 m Auslage, Bürofläche mit einem Konstruktionsbüro auf einer
              Fläche von 450 m2, mit einem Mitarbeiterstamm von zur Zeit 18 Personen.</p>
            <p class="Base-p"><strong>Die Firma fußt auf drei Elementen:</strong></p>
            <ul class="Base-ul">
              <li>Herstellen von Produkten aus Stahl und Edelstahl</li>
              <li>Dreh- und Fräsarbeiten unterschiedlichster Art</li>
              <li>Konstruktionsbüro</li>
            </ul>
            <p class="Base-p">Auf einer Fläche von 600 m2 beschäftigen wir qualifizierte Dreher, Fräser und Schlosser/ Metallbauer.</p>
            <p class="Base-p"> Für die Bearbeitung von Einzel- und Serienteilen sowie Sonder- oder Prototypen - auf hohem technischen Niveau - sind ausreichend Kapazitäten vorhanden.</p>
            <p class="Base-p"> Unsere erfahrenen Mitarbeiter ermöglichen eine termingerechte Fertigung. Mit unserer
              modernen Technik, wird garantiert, dass Ihr Auftrag mit Gewissen durchgeführt wird und das Ergebnis immer von bester Qualität ist.</p>
            <p class="Base-p"> Wenn Sie Fragen zu unseren Produkten und Leistungen haben oder einfach nur weitere Informationen wünschen und uns kontaktieren möchten, rufen Sie uns an oder schicken uns eine Nachricht.</p>
          </div>
        </div>
        <div class="GridCol2MainAside-col-aside u-col">
          <Infobox/>
        </div>
      </div>
      <div class="GridCol1Main-row u-row">
        <div class="GridCol1Main-col u-col">
          <header class="u-marginTop--2">
            <h2 class="Base-h2">Ansprechpartner</h2>
          </header>
        </div>
      </div>
      <div class="GridCol3Even-row u-row">
        <div class="Person-item GridCol3Even-col u-col">
          <Ansprechpartner imagesrc="ansprechpartner--fallback.svg" imagealt="Bild von Patrick Bendel" fullname="Patrick Brendel" position="Geschäftsführer, Metallbauermeister, SFM" phone="0431 33 75 98" fax="0431 33 7373" email="info@schlosserei-boike.de" />
        </div>
        <div class="Person-item GridCol3Even-col u-col">
          <Ansprechpartner imagesrc="ansprechpartner--fallback.svg" imagealt="Bild von Melina Brendel" fullname="Melina Brendel" position="Büro/Buchhaltung" phone="0431 33 75 98" fax="0431 33 7373" email="info@schlosserei-boike.de" />
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Infobox from '~/components/Infobox.vue'
import Ansprechpartner from '~/components/Ansprechpartner.vue'

export default {
  transition: 'fadeOpacity',

  components: {
    Infobox,
    Ansprechpartner
  }
}
</script>

<style scoped>
  .container {
    background: white;
  }
</style>
