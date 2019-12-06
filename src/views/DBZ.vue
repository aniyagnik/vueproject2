<template>
  <div>
      <h1>Dragon Ball Z's Characters</h1>
    <b-table striped hover :items="DBZ">
      <template v-slot:cell(first_name)="data">
        <a :href="`/Character/:${data.value}`">{{ data.value }}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
import DBZ from '@/data/DBZ'

export default {
  data () {
    return {
      DBZ
    }
  }
}
</script>
