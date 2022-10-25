import changeCount from "./changeCount";
import changeTheme from "./changeTheme";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeCount,
  changeTheme
})

export default rootReducer
