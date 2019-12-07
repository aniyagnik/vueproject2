export default {
  appendPlayer: (state, newPlayer) => {
    state[newPlayer.team].push(newPlayer)
  }
}
