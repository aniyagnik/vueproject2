export default {
  addCharacter: (context, newCharacter) => {
    context.commit('appendCharacter', newCharacter)
  }
}
