import { 
    FETCH_HISTORY_REQUEST,
    FETCH_HISTORY_SUCCESS,
    FETCH_HISTORY_FALIURE
} from './historyTypes';

const initialState = {
    loading:true,
    history: [],
    error:''
}

const historyReducer = (state=initialState, action) => {
 switch(action.type){
     case FETCH_HISTORY_REQUEST:
         return {
          ...state,
          loading: true
         }
     case FETCH_HISTORY_SUCCESS:
         return {
          ...state,
          loading: false,
          history: action.payload
         }
     case FETCH_HISTORY_FALIURE:
         return {
          ...state,
          loading: false,
          history: []
         }
         default: return state

 }
}

export default historyReducer;