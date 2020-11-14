import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import { useSelector} from 'react-redux'
import  HistoryPost from './HistoryPost'


const History = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [historyPerPage] = useState(1);

  const history = useSelector(state => state.history.history)


  const indexOfLastHistory = currentPage * historyPerPage;
  const indexOfFirstHistory = indexOfLastHistory - historyPerPage;
  const currentHistory = history.slice(indexOfFirstHistory, indexOfLastHistory);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const next= () =>{
      if(currentPage<history.length){
        paginate(currentPage+1)
      }
  } 

  const last= () =>{
    if(currentPage>-1){
      paginate(currentPage-1)
    }
} 

  return (
    <div className='container mt-5'>
      <h1 className='text-primary'>History</h1>
      <HistoryPost history={currentHistory[0]}/>
      <section className="history-buttons-container">
      <button className="history-buttons" onClick={last}>Previous</button>
      <button className="history-buttons" onClick={next}>Next</button>
      </section> 


    </div>
  );
};

export default History;
