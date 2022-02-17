import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Placemark } from 'react-yandex-maps'

const apiUrl = 'test_host.boom/api/tractors'

export default function PointFetching() {
  const [ tractors, setTractors ] = useState([])

  useEffect(() => {
     axios
      .get(apiUrl)
      .then(res => setTractors(res.data))
      .catch(err => console.log(err))
  })
  
  return (
    <>
    {tractors.map(tractor =>
    <Placemark  
      modules={['geoObject.addon.balloon']}
      defaultGeometry={[tractor.coords.x, tractor.coords.y]}
      properties={{balloonContentBody:`${tractor.id} have ${tractor.charge} %`}}/>
          )}
    </>
  )
}