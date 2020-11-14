import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'


const Payloads = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [payloadPerPage] = useState(8);

  const payloads = useSelector(state => state.payloads.payloads)
  const loading = useSelector(state => state.payloads.loading)

 
  const indexOfLastPayload = currentPage * payloadPerPage;
  const indexOfFirstPayload = indexOfLastPayload - payloadPerPage;
  const currentPayloads = payloads.slice(indexOfFirstPayload, indexOfLastPayload);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary '>Payloads</h1>
      <Posts payloads={currentPayloads} loading={loading} />
      <Pagination
        payloadPerPage={payloadPerPage}
        totalPosts={payloads.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Payloads;
