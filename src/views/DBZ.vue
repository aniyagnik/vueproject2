<template>
  <div>
      <h1>Dragon Ball Z's Characters</h1>
    <b-table striped hover :items="DBZ">
      <template v-slot:cell(name)="data">
        <a :href="`/Character/DBZ/${data.value}`">{{ data.value }}</a>
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
      'DBZ'
    ])
  }
}
</script>
