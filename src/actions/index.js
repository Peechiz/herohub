export const toggleMode = () => {
  return { type: 'TOGGLE_MODE' }
}

export const updatePlayer = (player, battletag) => {
  return {
    type: 'CHANGE_PLAYER',
    player,
    battletag
  }
}

export const selectRole = (role) => {
  return { type: 'SELECT_ROLE', role }
}

export const heroSelect = (hero) => {
  return { type: 'SELECT_HERO', hero }
}
