<template>
  <section class="container">
    <div class="home">
      <client-only>
        <carousel :per-page="1" :pagination-enabled="false" :autoplay="true" :loop="true">
          <slide v-for="item in dataCarousel" :key="item">
            <div class="slide">
              <div class="slide_item" :style="{'background-image': `url(${item})`}" />
            </div>
          </slide>
        </carousel>
      </client-only>

      <div class="home__wrapper">
        <div class="item">
          <nuxt-link to="/all-surah/" class="item__link has-shadow">
            <img src="/icon_quran.svg">
            Daftar Surat
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/daily-doa/" class="item__link has-shadow">
            <img src="/icon_prayer.svg">
            {{ AppConstant.DAILY_DOA }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/asmaul-husna/" class="item__link has-shadow">
            <img src="/icon_allah.svg">
            {{ AppConstant.ASMAUL_HUSNA }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/ayat-kursi/" class="item__link has-shadow">
            <img src="/icon_rosary.svg">
            {{ AppConstant.AYAT_KURSI }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/tahlil/" class="item__link has-shadow">
            <img src="/icon_mosque.svg">
            {{ AppConstant.TAHLIL }}
          </nuxt-link>
        </div>
      </div>

      <client-only>
        <carousel
          :per-page="1"
          :pagination-enabled="false"
          :navigation-enabled="true"
          navigation-next-label=">>"
          navigation-prev-label="<<"
          :autoplay="true"
          :loop="true">
          <slide v-for="item in surahRecommendation" :key="item.index">
            <nuxt-link class="slide-surah" :to="`/${item.index}/`">
              <div class="block_content has-shadow">
                <div
                  class="slide-surah__title font-arabic"
                  dir="rtl"
                  lang="ar">
                  {{ item.arabic }}
                </div>
                <div
                  class="">
                  {{ item.latin }}
                </div>
                <div
                  class="">
                  ({{ item.translation }}: {{ item.ayah_count }} Ayat)
                </div>
              </div>
            </nuxt-link>
          </slide>
        </carousel>
      </client-only>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import MdBookIcon from 'vue-ionicons/dist/js/md-book'
import MdGridIcon from 'vue-ionicons/dist/js/md-grid'
import MdWifiIcon from 'vue-ionicons/dist/js/md-wifi'
import IosColorWandIcon from 'vue-ionicons/dist/js/ios-color-wand'

import { AppConstant } from '../constant'
import surahRecommendation from '../constant/surah-recommendation'

@Component({
  components: {
    MdBookIcon,
    MdGridIcon,
    MdWifiIcon,
    IosColorWandIcon
  }
})
export default class PageIndex extends Vue {
  AppConstant = AppConstant;
  surahRecommendation = surahRecommendation.data
  dataCarousel = [
    '/illustration_1.jpg',
    '/illustration_2.jpg'
  ]

  @State settingActiveTheme;
  @Mutation setHeaderTitle;
  @Mutation setPage;

  get metaHead () {
    const title =
      "Baca Al-Qur'an dimana saja, langsung dari web browser Anda | Qur'an Web"
    const description = "Baca ayat-ayat Al-Qur'an beserta terjemahan dan tafsir dimana saja, langsung dari web browser Anda, tanpa iklan, tanpa analitik, gratis sepenuhnya"
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.settingActiveTheme.bgColor
        }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  mounted () {
    this.setHeaderTitle(AppConstant.TITLE)
    this.setPage('home')
  }

  activated () {
    this.setHeaderTitle(AppConstant.TITLE)
    this.setPage('home')
  }
}
</script>

<style lang="scss">
.VueCarousel-navigation-prev,
.VueCarousel-navigation-next{
  z-index: 2;
  background: var(--bg-body-color) !important;
  color: var(--text-color) !important;
  border-radius: 4px;
}
.VueCarousel-navigation-prev{
  left: 60px !important;
}
.VueCarousel-navigation-next{
  right: 60px !important;
}
</style>

<style lang="scss" scoped>
.slide{
  height: 250px;
  &_item {
    width: 100%;
    height: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    transition: all 2s ease-in;
  }
}

.slide-surah{
  width: 90%;
  margin: 0 auto;
  display: block;
  text-decoration: none;

  &__title{
    font-size: 1.5rem;
  }
}

.home__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1em 1em 0 1em;
}

.item {
  flex-grow: 1;
  margin: 0.3em;

  &__link {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    border-radius: 4px;
    font-size: 0.8rem;
    background: var(--bg-card-color);
    color: var(--text-color);

    img {
      width: 24px;
      height: 24px;
      margin-bottom: 1em;
    }
  }
}
</style>
