import Payloads from './Payloads'
import History from './History'
import Menu from './Menu'
import {BrowserRouter, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react';


import { useSelector, useDispatch } from 'react-redux'
import { fetchPayloads,fetchHistory } from '../redux'


function Container() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPayloads())
    dispatch(fetchHistory())

  }, []);

  return (
    <BrowserRouter>
    <div>
      <Menu/>
       <Route exact path="/" component={Payloads}/>
       <Route exact path="/history" component={History}/>

    </div>
    </BrowserRouter>
  );
}

export default Container;
