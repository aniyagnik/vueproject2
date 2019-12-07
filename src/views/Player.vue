<template>
    <div>
       <h1>{{ TeamPlayer.name }} from {{this.$route.params.Team}}</h1>
       <p>Player's Age : {{ TeamPlayer.age }}</p>
       <p>{{ TeamPlayer.last_name }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      TeamPlayer: {}
    }
  },
  computed: {
    ...mapState([
      'India',
      'Australia'
    ])
  },
  mounted () {
    const TeamPlayer = this[this.$route.params.Team].find(({ name }) => name === this.$route.params.name)
    this.TeamPlayer = TeamPlayer
  }

}
</script>
