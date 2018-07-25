<template>
  <div id="home">
    <latest-researchs></latest-researchs>
    <trends></trends>
  </div>
</template>

<script>
import LatestResearchs from '@/components/LatestResearchs.vue'
import Trends from '@/components/Trends.vue'

export default {
  components: {
    LatestResearchs, Trends
  }
}
</script>
