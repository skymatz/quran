<template>
  <aside class="sidebar">
    <div class="sidebar__content">
      <div class="sidebar__head">
        <img
          src="/star-logo-color-64.png"
          alt="Logo">
      </div>
      <ul class="sidebar__menu">
        <li class="sidebar__item">
          <nuxt-link
            to="/?source=sidebar"
            class="sidebar__link"
            @click.native="navigateTo">
            <MdHomeIcon
              w="2em"
              h="2em"
              name="Beranda"
              title="Beranda" />
            Beranda
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/all-surah/"
            class="sidebar__link"
            @click.native="navigateTo">
            <MdBookIcon
              w="2em"
              h="2em"
              name="Daftar surat"
              title="Daftar surat" />
            Daftar surat
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/last-verse/"
            class="sidebar__link"
            @click.native="navigateTo">
            <IosBookmarkIcon
              w="2em"
              h="2em"
              name="Terakhir dibaca"
              title="Terakhir dibaca" />
            Terakhir dibaca
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/favorite/"
            class="sidebar__link"
            @click.native="navigateTo">
            <IosStarOutlineIcon
              w="2em"
              h="2em"
              name="Surat favorit"
              title="Surat favorit" />
            Surat favorit
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/recommendation/"
            class="sidebar__link"
            @click.native="navigateTo">
            <IosNavigateIcon
              w="2em"
              h="2em"
              name="Surat rekomendasi"
              title="Surat rekomendasi" />
            Surat rekomendasi
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/settings/"
            class="sidebar__link"
            @click.native="navigateTo">
            <MdSettingsIcon
              w="2em"
              h="2em"
              name="Setelan"
              title="Setelan" />
            Setelan
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/about/"
            class="sidebar__link"
            @click.native="navigateTo">
            <MdHelpCircleIcon
              w="2em"
              h="2em"
              name="Tentang"
              title="Tentang" />
            Tentang
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <a
            href="https://github.com/mazipan/quran-offline"
            target="_blank"
            rel="noopener"
            class="sidebar__link">
            <MdCodeIcon
              w="2em"
              h="2em"
              name="Kode sumber"
              title="Kode sumber" />
            Kode sumber
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Mutation } from 'vuex-class'

import MdHomeIcon from 'vue-ionicons/dist/js/md-home'
import MdBookIcon from 'vue-ionicons/dist/js/md-book'
import MdHelpCircleIcon from 'vue-ionicons/dist/js/md-help-circle'
import MdCodeIcon from 'vue-ionicons/dist/js/md-code'
import MdSettingsIcon from 'vue-ionicons/dist/js/md-settings'
import IosNavigateIcon from 'vue-ionicons/dist/js/ios-navigate'
import IosStarOutlineIcon from 'vue-ionicons/dist/js/ios-star-outline'
import IosBookmarkIcon from 'vue-ionicons/dist/js/ios-bookmark'

import { AppConstant } from '../constant'

@Component({
  components: {
    MdHomeIcon,
    MdBookIcon,
    MdHelpCircleIcon,
    MdCodeIcon,
    MdSettingsIcon,
    IosNavigateIcon,
    IosStarOutlineIcon,
    IosBookmarkIcon
  }
})

export default class BaseSidebar extends Vue {
  AppConstant = AppConstant
  @Mutation setShowSidebar

  navigateTo (e): void {
    this.hideSidebar()
    e.preventDefault()
  }

  hideSidebar (): void {
    this.setShowSidebar(false)
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sidebar.scss';
</style>
