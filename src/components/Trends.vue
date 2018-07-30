<template>
<div class="col-md-4">
  <div id="trends">
    <h5>Assuntos do momento:</h5>
    <h6>{{ currentLocation }}</h6>
    <b-button @click="getLocations" v-b-modal.change-location variant="primary" size="sm">Alterar</b-button>

    <div class="location-trends">

      <b-modal id="change-location" ok-only size="sm" centered title="Locais:">

        <b-container fluid>
          <div class="search-wrapper">
            <input type="text" v-model="search" placeholder="Search location.."/>
          </div>

         <b-row class="mb-1 text-center" v-for="location in filteredList.slice(0, 5)" v-bind:key="location.woeid">
            <b-col cols="12">
              <b-button variant="primary" @click="changeLocation(location.name)">{{ location.name }}</b-button>
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
      currentLocation: 'Mundo',
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
    changeLocation (location) {
      getTrends(location)
        .then(data => {
          this.currentLocation = location
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
  padding: 12px;
}

.search-wrapper{
  margin: 5px;
}
</style>
