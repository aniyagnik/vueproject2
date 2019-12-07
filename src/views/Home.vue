<template>
  <div class="home">
    <h1> HOME </h1>
    Total Number Of Players Registered : {{ PlayerCount }} <br>
    <button class="btn btn-primary"  @click="toogleTeamForm">Add new Player</button> <br> <br><br><br>
     <div>
      <b-form @submit.prevent="handleSubmit" @reset="handleReset" v-if="showTeamForm">
        <b-form-group id="input-group-1" label="Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Birth Place :" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.BirthPlace"
            required
            placeholder="Enter Birth Place"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-8" label="Height :" label-for="input-8">
          <b-form-input
            id="input-8"
            v-model="form.Height"
            required
            placeholder="Enter Height"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Date Of Birth :" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.Born"
            required
            placeholder="Enter Birth Date"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Team:" label-for="input-4">
          <b-form-select
            id="input-4"
            v-model="form.team"
            :options="['India','Australia']"
            placeholder= "enter Team"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-5" label="Role:" label-for="input-5">
          <b-form-select
            id="input-5"
            v-model="form.Role"
            :options="['Bowler','Batsman','All Rounder', 'Wicket Keeper']"
            placeholder= "enter Role"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-6" label="Batting Style:" label-for="input-6">
          <b-form-select
            id="input-6"
            v-model="form.BattingStyle"
            :options="['Right Handed Bat','Left Handed Bat']"
            placeholder= "enter Batting Style"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-7" label="Bowling Style:" label-for="input-7">
          <b-form-select
            id="input-7"
            v-model="form.BowlingStyle"
            :options="['Right-arm fast','Right-arm medium-fast','Right-arm medium','Right-arm Offbreak','Right-arm Legbreak','Left-arm fast','Left-arm medium-fast','Left-arm medium','Left-arm Offbreak','Chinaman']"
            placeholder= "enter Batting Style"
            required
          ></b-form-select>
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
        Born: '',
        BirthPlace: '',
        Height: '',
        Role: '',
        BattingStyle: '',
        BowlingStyle: '',
        team: ''
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
