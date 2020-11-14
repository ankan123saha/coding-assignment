import React from 'react';
import moment from 'moment';
const Posts = ({ payloads, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='list-group mb-4'>
      {payloads.map(payload => (
        <div key={payload.payload_id} className='list-group-item'>
          {payload.cap_serial?<div><b>{payload.cap_serial}</b></div>:""}
         {payload.nationality? <div><b>Nationality: </b> {payload.nationality}</div>:""}
         {payload.manufacturer?<div><b>Manufacturer: </b> {payload.manufacturer}</div>:""}
         {payload.payload_type?<div><b>Payload Type: </b> {payload.payload_type}</div>:""}
         {payload.payload_mass_kg? <div><b>Payload Mass: </b> {payload.payload_mass_kg}</div>:""}
          <div><b>Reused: </b> {payload.reused?"Yes":"No"}</div>
         {payload.orbit? <div><b>Orbit: </b>{payload.orbit}</div>:""}
         <b>Orbit Params</b>
         {payload?<ul className="orbit-params">
       {Object.keys(payload.orbit_params).map(key=><li className={(payload.orbit_params[key] && payload.orbit_params[key].length>0)?"":"display-none"}>{key}: {(key=='epoch')?moment(payload.orbit_params[key]).format('DD MMM YYYY'):payload.orbit_params[key]}</li>)}
        </ul>:""}
        </div>
      ))}
    </div>
  );
};

export default Posts;
