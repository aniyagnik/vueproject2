export default {
  appendPlayer: (state, newPlayer) => {
    state[newPlayer.Team].push(newPlayer)
  }
}
