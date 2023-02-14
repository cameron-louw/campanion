import React, { useEffect } from 'react'

import {
  useMap,
  MapContainer,
  TileLayer,
  Popup,
  Circle,
  CircleMarker,
} from 'react-leaflet'

// WALKING TRAILS
export default function Map(props) {
  const campsiteLocation = props.campCoOrdinates.reverse()
  const fillBlueOptions = { fillColor: 'blue' }
  const redOptions = { color: 'red' }

  return (
    <MapContainer
      id="map"
      center={campsiteLocation}
      zoom={20}
      scrollWheelZoom={false}
    >
      <UpdateMapCentre mapCentre={campsiteLocation} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        center={campsiteLocation}
        pathOptions={fillBlueOptions}
        radius={100}
      />
      <CircleMarker
        center={campsiteLocation}
        pathOptions={redOptions}
        radius={15}
      >
        <Popup center={campsiteLocation}>Popup in CircleMarker</Popup>
      </CircleMarker>
    </MapContainer>
  )
}

function UpdateMapCentre(props) {
  const map = useMap()

  useEffect(() => {
    map.panTo(props.mapCentre)
  }, [props.mapCentre])

  return null
}
