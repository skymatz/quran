<template>
  <div class="container daily-doa">
    <div class="search clearfix">
      <label
        for="search-daily-doa"
        class="search__title">
        Pencarian cepat
      </label>
      <input
        id="search-daily-doa"
        v-model="searchText"
        type="search"
        name="search"
        placeholder="Cari doa harian">
    </div>
    <div class="wrapper">
      <div class="wrapper__item">
        <div
          v-for="item in filteredDailyDoa"
          :key="item.title"
          class="item"
          @click="onClickDoa(item)">
          <div class="item__title">
            {{ item.title }}
          </div>
          <div
            v-show="isExpanded(item.title)"
            class="collapsible">
            <div class="arabic">
              {{ item.arabic }}
            </div>
            <div class="latin">
              {{ item.latin }}
            </div>
            <div class="translation">
              {{ item.translation }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import { __isNotEmptyString, __normalizeText } from '../utils/index'

interface expandedData {
  title: string
}

@Component({
  async asyncData () {
    const resp = await import('~/static/data/daily-doa.json')
    return {
      dailyDoa: resp.data
    }
  }
})

export default class DailyDoaPage extends Vue {
  searchText = ''
  expandedData: expandedData = {
    title: ''
  }

  @State settingActiveTheme
  @Mutation setHeaderTitle
  @Mutation setPage

  get metaHead () {
    const title = "Daftar lengkap bacaan do'a sehari-hari beserta terjemahan | Qur'an Web"
    const description = "Daftar lengkap bacaan do'a sehari-hari beserta terjemahan, baca langsung dari web browser Anda, tanpa iklan, tanpa analitik, gratis sepenuhnya"
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ]
    }
  }

  get filteredDailyDoa () {
    if (__isNotEmptyString(this.searchText) && this.searchText.length >= 3) {
      // @ts-ignore: Unreachable code error
      return this.dailyDoa.filter((item) => {
        const predicate = __normalizeText(item.title).includes(
          __normalizeText(this.searchText)
        )

        return predicate
      })
      // @ts-ignore: Unreachable code error
    } else { return this.dailyDoa || [] }
  }

  head () {
    return this.metaHead
  }

  onClickDoa (item: expandedData): void {
    if (this.isExpanded(item.title)) {
      this.expandedData = {
        title: ''
      }
    } else { this.expandedData = item }
  }

  isExpanded (title: string): boolean {
    return title === this.expandedData.title
  }

  mounted () {
    this.setHeaderTitle("Do'a Harian")
    this.setPage('daily-doa')
  }

  activated () {
    this.setHeaderTitle("Do'a Harian")
    this.setPage('daily-doa')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/search.scss';

.item{
  text-decoration: none;
  border-radius: .25em;
  padding: 1em;
  font-size: 1.3rem;
  width: 100%;
  margin: 1em 0 0 0;
  background: var(--bg-card-color);
  color: var(--text-color);

  &__title {
    font-size: 1rem;
  }
}
.collapsible{
  margin-top: 1em;
  color: var(--text-color);
}
.arabic{
  font-size: 2rem;
  width: 100%;
  text-align: right;
}
.latin{
  font-size: 1rem;
  width: 100%;
  margin-top: 1.5em;
  text-align: left;
}
.translation{
  margin-top: 2em;
  font-size: 0.9rem;
  width: 100%;
  font-style: italic;
  text-align: left;
}
</style>
