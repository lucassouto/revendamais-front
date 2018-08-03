<template>
<div
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="busy"
  infinite-scroll-distance="20"
  infinite-scroll-immediate-check=false>

  <h3>{{ getTitleSearch }}</h3>
  <b-list-group>
      <template v-for="result in resultSearch">
        <b-list-group-item v-for="item in result.statuses" v-bind:key="item.id_str">
          <div v-html="highlight(item.text)">{
            {{ item.text  }}
          </div>
        </b-list-group-item>
      </template>
  </b-list-group>
</div>
</template>

<script>
import { getSearchNext } from '@/services/twitter'

export default {
  data () {
    return {
      busy: false
    }
  },
  computed: {
    getTitleSearch () {
      return this.$store.state.titleSearch
    },
    resultSearch () {
      return this.$store.state.itemsSearch
    },
    nextResults () {
      return this.$store.getters.nextResults
    }
  },
  methods: {
    loadMore: function () {
      this.busy = true

      setTimeout(() => {
        if (this.nextResults !== '') {
          getSearchNext(this.nextResults)
            .then(data => {
              this.$store.dispatch('scrollResults', data)
            })
        }
        this.busy = false
      }, 1000)
    },
    highlight: function (words) {
      return words.replace(this.getTitleSearch.toLowerCase(), '<span class=highlight>' + this.getTitleSearch + '</span>')
    }
  }
}
</script>

<style>
.highlight {
  font-weight: bold;
  color: blue;
}
</style>
