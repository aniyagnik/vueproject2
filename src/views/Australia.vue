<template>
  <div>
      <h1>Australian Players</h1>
    <b-table striped hover :items="AustralianPlayersSummary">
      <template v-slot:cell(name)="data">
        <router-link :to="`/Player/Australia/${data.value}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'AustralianPlayersSummary'
    ])
  }
}
</script>
