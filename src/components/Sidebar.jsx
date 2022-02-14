import React from 'react';
import './Sidebar.css';
import { PointData } from './PointData'

export default function Sidebar() {
  return (
    <>
      <div className='info-menu'>
        <h1>Tractor info</h1>
        {PointData.map(tractor =>
          <li className='tractor'>Tractor #{tractor.id} is {tractor.charge}% charged.</li>
          )}
      </div>
    </>
  );
}

  