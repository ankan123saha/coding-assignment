import { 
    FETCH_PAYLOADS_REQUEST,
    FETCH_PAYLOADS_SUCCESS,
    FETCH_PAYLOADS_FALIURE
} from './payloadTypes';

const initialState = {
    loading:true,
    payloads: [],
    error:''
}

const payloadReducer = (state=initialState, action) => {
 switch(action.type){
     case FETCH_PAYLOADS_REQUEST:
         return {
          ...state,
          loading: true
         }
     case FETCH_PAYLOADS_SUCCESS:
         return {
          ...state,
          loading: false,
          payloads: action.payload
         }
     case FETCH_PAYLOADS_FALIURE:
         return {
          ...state,
          loading: false,
          payloads: []
         }
         default: return state

 }
}

export default payloadReducer;