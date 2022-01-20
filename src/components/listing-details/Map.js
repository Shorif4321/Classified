// @ts-nocheck
/* eslint-disable import/no-webpack-loader-syntax */
import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import mapboxgl from '!mapbox-gl';
import '../../styles/Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibG10b25heTEiLCJhIjoiY2t3eWN3ZzhlMDc0aDJwb2Jpd3pzMDQ0aCJ9.Y6CXxJV73PyjnV1cHf-ABA';

const Map = function () {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(67.001137);
  const [lat, setLat] = useState(24.860735);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Map;
