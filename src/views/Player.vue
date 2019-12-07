<template>
    <div>
       <h1>{{ TeamPlayer.name }} from {{this.$route.params.Team}}</h1>
       <h3>Personal Info</h3>
       <p>Born :  {{ TeamPlayer.Born }}</p>
       <p>Birth Place : {{ TeamPlayer.BirthPlace }}</p>
       <p>height : {{ TeamPlayer.Height }}</p>
       <p>Role : {{ TeamPlayer.Role }}</p>
       <p>Batting Style : {{ TeamPlayer.BattingStyle }}</p>
       <p>Bowling Style : {{ TeamPlayer.BowlingStyle }}</p>
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
