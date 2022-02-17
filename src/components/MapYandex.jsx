import React from 'react';
import './MapYandex.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import PointFetching from './PointFetching'


const setState = {
  center: [54.710167, 20.510121],
  zoom: 9,
  controls: ['zoomControl', 'fullscreenControl']
}

export default function MapYandex() {
  return (
    <div className='cont-map'>
      <YMaps>
        <Map
          defaultState={setState}
          modules={['control.ZoomControl', 'control.FullscreenControl']}>
          <PointFetching />
        </Map>
      </YMaps>
    </div>
  );
}

  