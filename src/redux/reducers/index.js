import { combineReducers } from 'redux'
 
import counterReducer from './counterSlice'
import userReducer from './userSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  counter: counterReducer,
  user: userReducer,
})
 
export default rootReducer