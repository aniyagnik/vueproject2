export default {
  appendCharacter: (state, newCharacter) => {
    state[newCharacter.anime].push(newCharacter)
  }
}
