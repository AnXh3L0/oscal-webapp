<template>
  <v-layout justify-center align-top>
    <v-list three-line>
      <template v-for="(event, index) in events">
        <event :event="event"></event>
        <v-divider v-if="index + 1 < events.length"></v-divider>
      </template>
    </v-list>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'

import Event from './Event'

export default {
  name: 'all-events',

  components: {
    'event': Event
  },

  computed: mapGetters({
    events: 'allEvents'
  })
}
</script>

<style>
  .layout {
    width: 100%;
  }

  .list {
    width: 100%;
    padding: 0;
  }
</style>
