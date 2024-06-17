// src/Map.js
"use client";
import React, { useState, useCallback, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = ({ marker, setMarker }) => {
  const [viewport, setViewport] = useState({
    latitude: marker.latitude,
    longitude: marker.longitude,
    zoom: 12,
  });

  const mapBoxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const handleMapClick = useCallback((event) => {
    const { lngLat } = event;
    console.log(lngLat.lng);
    setMarker({ longitude: lngLat.lng, latitude: lngLat.lat });
  }, []);

  useEffect(() => {
    // Actualiza el viewport cuando cambia el marcador
    setViewport((prevViewport) => ({
      ...prevViewport,
      latitude: marker.latitude,
      longitude: marker.longitude,
    }));
  }, [marker]);

  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
  };

  return (
    <Map
      {...viewport}
      initialViewState={viewport}
      style={{ width: "100%", height: "200px" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={mapBoxToken}
      onMove={(evt) => handleViewportChange(evt.viewState)}
      onClick={handleMapClick}
    >
      <Marker
        longitude={marker ? marker.longitude : viewport.longitude}
        latitude={marker ? marker.latitude : viewport.latitude}
      />
    </Map>
  );
};

export default MapComponent;
