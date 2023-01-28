const initialState = false;

const changeTheme = (state=initialState,action)=>{
  switch (action.type) {
    case "TOGGLETHEME": return !state
    default: return state
  }
}

export default changeTheme