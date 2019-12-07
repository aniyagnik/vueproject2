<template>
  <div>
      <h1>Indian Players</h1>
    <b-table striped hover :items="IndianPlayersSummary">
      <template v-slot:cell(name)="data">
        <router-link :to="`/Player/India/${data.value}`">{{ data.value }}</router-link>
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
      'IndianPlayersSummary'
    ])

  }
}
</script>
