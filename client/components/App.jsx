import React, { useState } from 'react'
import Header from './Header'
import CampsiteDetails from './CampsiteDetails'
import Map from './Map'
import Images from './Images'

export default function App() {
  const [campCoOrdinates, setCampCoOrdinates] = useState([
    173.727784, -35.21101,
  ])
  const [campsiteName, setCampsiteName] = useState(
    'Puketi Recreation Area Campsite'
  )

  function updateCampingCoOrdinates(lat, lon) {
    setCampCoOrdinates(lat, lon)
  }
  function updateCampnameSearch(searchTerm) {
    setCampsiteName(searchTerm)
  }

  return (
    <div>
      <Header />
      <Images campsiteName={campsiteName} />
      <div>
        <Map campCoOrdinates={campCoOrdinates} />
      </div>
      <div>
        <CampsiteDetails
          updateCampingCoOrdinates={updateCampingCoOrdinates}
          updateCampnameSearch={updateCampnameSearch}
        />
      </div>
      <div></div>
    </div>
  )
}
