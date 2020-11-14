import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import { useSelector} from 'react-redux'
import  HistoryPost from './HistoryPost'


const History = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const history = useSelector(state => state.history.history)


  const currentHistory = history[currentPage]

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const next= () =>{
      if(currentPage<history.length){
        paginate(currentPage+1)
      }
  } 

  const last= () =>{
    if(currentPage>0){
      paginate(currentPage-1)
    }
} 

  return (
    <div className='container mt-5'>
      <h1 className='text-primary'>History</h1>
      <HistoryPost history={currentHistory}/>
      <section className="history-buttons-container">
      <button disabled={(currentPage==0)} className="history-buttons" onClick={last}>Previous</button>
      <button disabled={(currentPage==history.length-1)} className="history-buttons" onClick={next}>Next</button>
      </section> 


    </div>
  );
};

export default History;
