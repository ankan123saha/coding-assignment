import React from 'react';
import moment from 'moment';

const HistoryPost = ({ history }) => {
  return (
    <article className="history-post">
        <header className="text-center"><b>{history?history.title:""}</b></header>
        <div className="text-center"><b>Date: </b> {(history && history.event_date_utc)?moment(history.event_date_utc).format('DD MMM YYYY'):""}</div>
        {(history && history.flight_number)?<div className="text-center"><b>Flight Number: </b>{history.flight_number}</div>:""}
        <p className="text-center">{history?history.details:""}</p>
        {history?<div>
       {Object.keys(history.links).map(key=><div className={(history.links[key] && history.links[key].length>0)?"text-wrap text-center":"display-none"}>{key}: <a target="_blank" href={history.links[key]}>{history.links[key]}</a></div>)}
        </div>:""}
    </article>
  );
};

export default HistoryPost;
