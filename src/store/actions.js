export default {
  addPlayer: (context, newPlayer) => {
    context.commit('appendPlayer', newPlayer)
  }
}
