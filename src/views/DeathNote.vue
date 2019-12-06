<template>
  <div>
      <h1>Death Note's Characters</h1>
    <b-table striped hover :items="DeathNote">
      <template v-slot:cell(name)="data">
        <a :href="`/Character/DeathNote/${data.value}`">{{ data.value }}</a>
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
      'DeathNote'
    ])
  }
}
</script>
