import React from 'react';
import './MapYandex.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { PointData } from './PointData'


const setState = {
  center: [54.710167, 20.510121],
  zoom: 9,
  controls: ['zoomControl', 'fullscreenControl']
}

export default function MapYandex() {
  return (
    <div className='cont-map'>
      <YMaps>
        <Map height='100%' width='100%'
          defaultState={setState}
          modules={['control.ZoomControl', 'control.FullscreenControl']}>
          {PointData.map(tractor =>
          <Placemark  modules={['geoObject.addon.balloon']}
          defaultGeometry={[tractor.coordX, tractor.coordY]}
          properties={{
              balloonContentBody:`${tractor.name} have ${tractor.charge} %`}}/>
          )}
        </Map>
      </YMaps>
    </div>
  );
}

  