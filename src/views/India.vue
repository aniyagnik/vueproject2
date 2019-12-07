<template>
  <div>
      <h1>Indian Players</h1>
    <b-table striped hover :items="India">
      <template v-slot:cell(name)="data">
        <a :href="`/Player/India/${data.value}`">{{ data.value }}</a>
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
      'India'
    ])
  }
}
</script>
