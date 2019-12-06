<template>
    <div>
       <h1>{{ animeCharacter.name }} from {{this.$route.params.anime}}</h1>
       <p>Character's Age : {{ animeCharacter.age }}</p>
       <p>{{ animeCharacter.last_name }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animeCharacter: {}
    }
  },
  computed: {
    ...mapState([
      'DBZ',
      'DeathNote'
    ])
  },
  mounted () {
    const animeCharacter = this[this.$route.params.anime].find(({ name }) => name === this.$route.params.name)
    this.animeCharacter = animeCharacter
  }

}
</script>
