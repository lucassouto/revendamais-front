<template>
<div class="col-md-8">
  <div id="researchs">
    <h3>Researches</h3>

    <b-card v-for="item in items" v-bind:key="item">
      {{ item.search }}
    </b-card>
  </div>
</div>
</template>

<script>
import { getLastResearchs } from '@/services/twitter'

export default {
  data () {
    return {
      items: ''
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
