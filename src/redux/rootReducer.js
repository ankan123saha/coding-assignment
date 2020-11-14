import { combineReducers } from 'redux'
import payloadReducer from './payloads/payloadReducer'
import historyReducer from './history/historyReducer'

const rootReducer = combineReducers({
  payloads: payloadReducer,
  history: historyReducer,
})

export default rootReducer