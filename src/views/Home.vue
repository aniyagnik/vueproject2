<template>
  <div class="home">
    <h1> HOME </h1>
    <button class="btn btn-primary"  @click="toogleAnimeForm">Add new Character</button> <br> <br><br><br>
     <div>
      <b-form @submit.prevent="handleSubmit" @reset="handleReset" v-if="showAnimeForm">
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Anime:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.anime"
            :options="['DBZ','DeathNote']"
            placeholder= "enter anime"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      showAnimeForm: false,
      form: {
        name: '',
        anime: '',
        age: 12
      }
    }
  },
  methods: {
    ...mapActions([
      'addCharacter'
    ]),
    toogleAnimeForm () {
      this.showAnimeForm = !this.showAnimeForm
    },
    handleSubmit () {
      this.addCharacter(this.form)
      this.form = {}
    },
    handleReset () {
      this.form = {}
    }
  }
}
</script>
