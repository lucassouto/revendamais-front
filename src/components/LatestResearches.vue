<template>
<div class="col-md-8">
  <div id="researchs">
    <h3>Últimas Pesquisas</h3>

    <b-card v-for="item in list.slice(0,10)" v-bind:key="item.search">
      {{ item.search }}
    </b-card>
  </div>
</div>
</template>

<script>
import _ from 'lodash'
import { getLastResearchs } from '@/services/twitter'

export default {
  data () {
    return {
      items: ''
    }
  },
  computed: {
    list () {
      return _.orderBy(this.items, ['modified'], 'desc')
    }
  },
  created () {
    getLastResearchs()
      .then(data => {
        this.items = data
      })
  }
}
</script>

<style scoped>
#researchs {
  background: #E5EBF0;
  padding: 10px;
  margin: 10px;
}
</style>
