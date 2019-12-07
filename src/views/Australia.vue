<template>
  <div>
      <h1>Australian Players</h1>
    <b-table striped hover :items="Australia">
      <template v-slot:cell(name)="data">
        <a :href="`/Character/Australia/${data.value}`">{{ data.value }}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'Australia'
    ])
  }
}
</script>
