export default {
  appendCharacter: (state, newCharacter) => {
    state[newCharacter.Team].push(newCharacter)
  }
}
