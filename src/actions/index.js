export const toggleMode = () => {
  // console.log('action: toggleMode')
  return {
    type: 'TOGGLE_MODE',
  }
}

export const updatePlayer = (player, battletag) => {
  return {
    type: 'CHANGE_PLAYER',
    player,
    battletag
  }
}
