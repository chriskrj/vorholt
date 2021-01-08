<template>
  <div>
    <header class="SectionHeader">
      <div class="SectionHeader-container u-limitWidth-12 u-align-center">
        <div class="SectionHeader-logo">
          <nuxt-link class="Logo" exact to="/">
            <img class="logo-lg" src="~/assets/Images/logo-blau.svg" alt="Logo Walter Boike GmbH & Co.KG"/>
          </nuxt-link>
        </div>
        <Navigation />
      </div>
    </header>
    <Sidebar>
      <div id="SidebarNavigation" class="MobileNav">
        <nuxt-link @click.prevent="closeSidebarPanel" class="MobileNav-link" exact to="/">Startseite</nuxt-link>
        <nuxt-link @click.prevent="closeSidebarPanel" class="MobileNav-link" to="/ueber-uns">Über uns</nuxt-link>
        <nuxt-link @click.prevent="closeSidebarPanel" class="MobileNav-link" to="/leistungen">Leistungen</nuxt-link>
        <nuxt-link @click.prevent="closeSidebarPanel" class="MobileNav-link" to="/karriere">Karriere</nuxt-link>
        <nuxt-link @click.prevent="closeSidebarPanel" class="MobileNav-link" to="/contact">Kontakt</nuxt-link>
      </div>
    </Sidebar>
    <HeroImage />
    <nuxt/>

    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import HeroImage from '~/components/HeroImage.vue'
import Footer from '~/components/Footer.vue'
import Sidebar from '~/components/Menu/Sidebar.vue'
import { store, mutations } from "~/store/store.js";
export default {
  components: {
    Navigation,
    HeroImage,
    Sidebar,
    Footer
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav
  }
}
</script>

