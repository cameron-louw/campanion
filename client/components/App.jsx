import React, { useState } from 'react'
import Header from './Header'
import CampsiteDetails from './CampsiteDetails'
import Map from './Map'
import Images from './Images'

export default function App() {
  const [line, setCoOrdinates] = useState(initialWalkingTrail)
  const [campCoOrdinates, setCampCoOrdinates] = useState([
    173.727784, -35.21101,
  ])
  const [campsiteName, setCampsiteName] = useState(
    'Puketi Recreation Area Campsite'
  )

  function updateWalkingCoOrdinates(walkingTrackData) {
    setCoOrdinates(walkingTrackData)
  }

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
        <Map campCoOrdinates={campCoOrdinates} line={line} />
      </div>
      <div>
        <CampsiteDetails
          updateWalkingCoOrdinates={updateWalkingCoOrdinates}
          updateCampingCoOrdinates={updateCampingCoOrdinates}
          updateCampnameSearch={updateCampnameSearch}
        />
      </div>
      <div></div>
    </div>
  )
}

const initialWalkingTrail = [
  [173.727784, -35.21101],
  [173.727344, -35.210471],
  [173.726274, -35.210036],
  [173.724303, -35.210002],
  [173.72266, -35.208157],
  [173.721521, -35.207544],
  [173.721347, -35.207212],
  [173.720751, -35.207041],
  [173.720228, -35.206461],
  [173.719316, -35.205884],
  [173.717938, -35.205403],
  [173.716947, -35.205236],
  [173.716456, -35.204921],
  [173.713434, -35.205307],
  [173.713134, -35.205086],
  [173.713381, -35.204978],
  [173.71416, -35.203947],
  [173.715564, -35.202554],
  [173.715589, -35.201934],
  [173.71706, -35.20065],
  [173.716848, -35.200036],
  [173.717261, -35.199993],
  [173.717241, -35.199146],
  [173.717881, -35.198705],
  [173.71769, -35.198511],
  [173.717892, -35.198528],
  [173.717677, -35.198366],
  [173.717326, -35.198405],
  [173.717037, -35.198175],
  [173.717481, -35.19755],
  [173.717576, -35.196941],
  [173.717989, -35.19652],
  [173.718736, -35.196438],
  [173.719329, -35.196828],
  [173.720872, -35.196586],
  [173.721974, -35.195959],
  [173.722847, -35.195975],
  [173.723181, -35.195581],
  [173.723696, -35.195297],
  [173.724146, -35.194707],
  [173.724586, -35.194532],
  [173.725158, -35.19477],
  [173.725754, -35.194784],
  [173.727369, -35.193812],
  [173.728515, -35.19384],
  [173.728999, -35.194099],
  [173.72971, -35.194169],
  [173.73154, -35.193853],
  [173.732178, -35.193584],
  [173.73354, -35.192342],
]
