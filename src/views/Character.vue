<template>
    <div>
       <h1>{{ TeamCharacter.name }} from {{this.$route.params.Team}}</h1>
       <p>Character's Age : {{ TeamCharacter.age }}</p>
       <p>{{ TeamCharacter.last_name }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      TeamCharacter: {}
    }
  },
  computed: {
    ...mapState([
      'India',
      'Australia'
    ])
  },
  mounted () {
    const TeamCharacter = this[this.$route.params.Team].find(({ name }) => name === this.$route.params.name)
    this.TeamCharacter = TeamCharacter
  }

}
</script>
