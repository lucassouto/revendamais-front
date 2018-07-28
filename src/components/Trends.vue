<template>
<div class="col-md-4">
  <div id="trends">
     <h5>Assuntos do momento:</h5>

    <div class="location-trends">
      <b-button @click="getLocations" v-b-modal.change-location variant="primary" size="sm">Alterar</b-button>

      <b-modal id="change-location" size="sm" centered title="Locations">

        <b-container fluid>
          <div class="search-wrapper">
            <input type="text" v-model="search" placeholder="Search location.."/>
          </div>

         <b-row class="mb-1 text-center" v-for="location in filteredList" v-bind:key="location.woeid">
            <b-col cols="12">
              <b-button @click="getTrendsLocations(location.name)">{{ location.name }}</b-button>
            </b-col>
         </b-row>
       </b-container>

      </b-modal>
    </div>

    <b-card v-for="trend in trends" v-bind:key="trend.name">
      <a v-bind:href="trend.url">{{ trend.name }}</a>
    </b-card>
  </div>
</div>
</template>

<script>
import { getTrends, getLocationsTrends } from '@/services/twitter'

export default {
  data () {
    return {
      trends: '',
      locations: [],
      search: ''
    }
  },
  computed: {
    filteredList () {
      return this.locations.filter(location => {
        return location.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    getLocations () {
      getLocationsTrends()
        .then(data => {
          this.locations = data
        })
    },
    getTrendsLocations (woeid) {
      getTrends(woeid)
        .then(data => {
          this.trends = data
        })
    }
  },
  created () {
    getTrends()
      .then(data => {
        this.trends = data
      })
  }
}
</script>

<style scoped>
#trends {
  background: #E5EBF0;
  padding: 10px;
  margin: 10px;
}

.card-body {
  padding: 14px;
}

.search-wrapper{
  margin: 5px;
}
</style>
