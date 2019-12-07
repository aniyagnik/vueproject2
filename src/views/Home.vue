<template>
  <div class="home">
    <h1> HOME </h1>
    Total Number Of Players Registered : {{ PlayerCount }} <br>
    <button class="btn btn-primary"  @click="toogleTeamForm">Add new Player</button> <br> <br><br><br>
     <div>
      <b-form @submit.prevent="handleSubmit" @reset="handleReset" v-if="showTeamForm">
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Team:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.Team"
            :options="['India','Australia']"
            placeholder= "enter Team"
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
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      showTeamForm: false,
      form: {
        name: '',
        Team: '',
        age: 12
      }
    }
  },
  computed: {
    ...mapGetters([
      'PlayerCount'
    ])
  },
  methods: {
    ...mapActions([
      'addPlayer'
    ]),
    toogleTeamForm () {
      this.showTeamForm = !this.showTeamForm
    },
    handleSubmit () {
      this.addPlayer(this.form)
      this.form = {}
    },
    handleReset () {
      this.form = {}
    }
  }
}
</script>
