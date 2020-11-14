
import { 
    FETCH_PAYLOADS_REQUEST,
    FETCH_PAYLOADS_SUCCESS,
    FETCH_PAYLOADS_FALIURE
} from './payloadTypes';
import axios from 'axios';



export const fetchPayloads = () => {
    return (dispatch) => {
      dispatch(fetchPayloadsRequest())
      axios
        .get('https://api.spacexdata.com/v3/payloads')
        .then(response => {
          const payloads = response.data
          dispatch(fetchPayloadsSuccess(payloads))
        })
        .catch(error => {
          dispatch(fetchPayloadsFailure(error.message))
        })
    }
  }


export const fetchPayloadsRequest = () =>{
    return{
        type: FETCH_PAYLOADS_REQUEST
    }
}

export const fetchPayloadsSuccess = (payloads) =>{
    return{
        type: FETCH_PAYLOADS_SUCCESS,
        payload: payloads
    }
}

export const fetchPayloadsFailure = (error) =>{
    return{
        type: FETCH_PAYLOADS_FALIURE,
        payload: error
    }
}



