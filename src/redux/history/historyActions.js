import { 
    FETCH_HISTORY_REQUEST,
    FETCH_HISTORY_SUCCESS,
    FETCH_HISTORY_FALIURE
} from './historyTypes';
import axios from 'axios';


export const fetchHistory = () => {
    return (dispatch) => {
      dispatch(fetchHistoryRequest())
      axios
        .get('https://api.spacexdata.com/v3/history')
        .then(response => {
          const history = response.data
          dispatch(fetchHistorySuccess(history))
        })
        .catch(error => {
          dispatch(fetchHistoryFailure(error.message))
        })
    }
}

export const fetchHistoryRequest = () =>{
    return{
        type: FETCH_HISTORY_REQUEST
    }
}

export const fetchHistorySuccess = (history) =>{
    return{
        type: FETCH_HISTORY_SUCCESS,
        payload: history
    }
}

export const fetchHistoryFailure = (error) =>{
    return{
        type: FETCH_HISTORY_FALIURE,
        payload: error
    }
}



