<template>
  <div>
      <h1>Australian Players</h1>
    <b-table striped hover :items="AustralianPlayersSummary">
      <template v-slot:cell(name)="data">
        <a :href="`/Player/Australia/${data.value}`">{{ data.value }}</a>
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
