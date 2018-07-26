<template>
  <div id="home" class="row">
    <latest-researches></latest-researches>
    <trends></trends>
  </div>
</template>

<script>
import LatestResearches from '@/components/LatestResearches.vue'
import Trends from '@/components/Trends.vue'

export default {
  components: {
    LatestResearches, Trends
  }
}
</script>
