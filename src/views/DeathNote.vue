<template>
  <div>
      <h1>Death Note's Characters</h1>
    <b-table striped hover :items="DeathNote">
      <template v-slot:cell(first_name)="data">
        <a :href="`/Character/:${data.value}`">{{ data.value }}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
import DeathNote from '@/data/DeathNote'
export default {
  data () {
    return {
      DeathNote
    }
  }
}
</script>
