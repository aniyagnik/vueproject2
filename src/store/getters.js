export default {
  PlayerCount: (state) => {
    return state.India.length + state.Australia.length
  },
  IndianPlayersSummary: (state) => {
    return state.India.map(obj => {
      return {
        name: obj.name,
        role: obj.Role,
        team: obj.team
      }
    })
  },
  AustralianPlayersSummary: (state) => {
    return state.Australia.map(obj => {
      return {
        name: obj.name,
        role: obj.Role,
        team: obj.team
      }
    })
  }
}
