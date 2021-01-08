<template>
  <div class="u-container u-marginBottom--r2 u-marginTop--r2">
    <div class="u-limitWidth-12 u-align-center">
      <div class="GridCol2MainAside-row u-row">
        <div class="GridCol2MainAside-col-main u-col">
          <h1 class="Base-h1">Impressum & Datenschutz</h1>
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
            <p class="Base-p">
              <a class="Base-iconLink" href="https://www.schlosserei-boike.de">www.schlosserei-boike.de</a>
            </p>
            <p class="Base-p">Geschäftsführer: Patrick Brendel</p>
            <p class="Base-p">Umsatzsteuer-IdNr. DE322046471<br/>Sitz in Kiel | AG Kiel, HRA 10229 KI</p>
            <p class="Base-p">p.h.G.: Patrick Brendel Verwaltungsgesellschaft mbH</p>
            <p class="Base-p">Kammer: Handwerkskammer Lübeck, Breite Str. 10-12, 23547 Lübeck</p>

            <h3 class="Base-h3">Hauftungsausschluss:</h3>
            <h4 class="Base-h4">Haftung für Inhalte</h4>
            <p class="Base-p">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            <h4 class="Base-h4">Haftung für Links</h4>
            <p class="Base-p">Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.</p>
            <h4 class="Base-h4">Urheberrecht</h4>
            <p class="Base-p">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
              jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
              dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            <h3 class="Base-h3">Datenschutz</h3>
            <p class="Base-p">Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener
              Daten möglich. Soweit auf unseren Seiten personenbezogene Daten
              (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies,
              soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
              Zustimmung nicht an Dritte weitergegeben.  Wir weisen darauf hin, dass die
              Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
              möglich.  Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter
              Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der
              unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor. </p>
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
