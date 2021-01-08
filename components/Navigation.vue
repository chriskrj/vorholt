<template>
<nav class="Navigation">
<div class="servicenav Base-theme--dark">
    <a class="servicenav-link Base-iconLink" href="tel:+49431337598">
      <span class="servicenav-linkContent">0431 / 33 75 98</span>
    </a>
    <a class="servicenav-link servicenav-linkFax Base-iconLink-fax" href="tel:+49431337373">
      <span class="servicenav-linkContent">0431 / 33 73 73</span>
      </a>
    <a class="servicenav-link Base-iconLink" href="mailto:info@schlosserei-boike.de">
      <span class="servicenav-linkContent">info@schlosserei-boike.de</span>
    </a>
    <Burger/>
</div>
  <div id="primarynavigation" class="nav">
    <nuxt-link class="nav-link" exact to="/">
      <svg class="nav-iconLink" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.359789 6.64768L8.49221 0.3262C8.79546 0.0906482 9.21982 0.0906482 9.52307 0.3262L17.6578 6.64768C17.8627 6.80708 17.9823 7.0522 17.9821 7.31175V17.2453C17.9797 18.7061 16.7955 19.8894 15.3348 19.8907H2.68245C1.22139 19.8894 0.0371189 18.7056 0.035181 17.2446V7.31097C0.0352821 7.05164 0.155069 6.80687 0.359789 6.64768ZM7.13718 18.2102H10.8801V10.8594H7.13718V18.2102ZM2.68247 18.2109C2.14864 18.2107 1.71575 17.7783 1.71489 17.2445V7.72183L9.00864 2.05308L16.3008 7.72183V17.2445C16.3 17.7783 15.8671 18.2107 15.3333 18.2109H12.5598V10.0199C12.5596 9.55613 12.1837 9.18025 11.72 9.18003H6.29575C5.83201 9.18025 5.45612 9.55613 5.45591 10.0199V18.2109H2.68247Z"/>
      </svg>
    </nuxt-link>
    <nuxt-link class="nav-link" to="/ueber-uns">Über uns</nuxt-link>
    <nuxt-link class="nav-link" to="/leistungen">Leistungen</nuxt-link>
    <nuxt-link class="nav-link" to="/karriere">Karriere</nuxt-link>
    <nuxt-link class="nav-link" to="/contact">Kontakt</nuxt-link>
  </div>
</nav>
</template>
<script>
import Burger from "~/components/Menu/Burger.vue";
export default {
  components: {
    Burger
  }
};
</script>
