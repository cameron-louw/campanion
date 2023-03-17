import React, { useEffect, useState } from 'react'
import { Accordion } from '@mantine/core'
import { getCampsites, getCampsiteNews } from '../apis/campsites'
import { Markup } from 'interweave'

function Nav(props) {
  const [campsiteID, setCampsiteID] = useState('')
  const [campsites, setCampsites] = useState([])
  const [campsitesNews, setCampsitesNews] = useState([])
  const [unsplash, setUnsplash] = useState([])
  const [clickedCampsite, setClickedCampsite] = useState({})

  useEffect(() => {
    getCampsites()
      .then((track) => {
        setCampsites(track)
      })
      .catch((err) => {
        console.log(err)
      })
    getCampsiteNews()
      .then((track) => {
        setCampsitesNews(track)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

<<<<<<< HEAD
  let clickedCamp = ''

=======
>>>>>>> f599a6b6822b53917821f74c7a2ec1defd13cd76
  return (
    <>
      <nav className="CampDetails">
        <h2>Explore New Zealand Campsites</h2>
        <Accordion variant="contained" radius="xl" defaultValue="Campsites">
          {campsitesNews.map((campsite, i) => {
            return (
              <div key={i}>
                <Accordion.Item value={`item-${i}`}>
                  <Accordion.Control
                    onClick={() => {
                      setCampsiteID(campsite.assetId)
                      setClickedCampsite(
                        campsites.find(
                          (site) => site.assetId === campsite.assetId
                        )
                      )
                      props.updateCampingCoOrdinates([
                        campsites[i]?.lon,
                        campsites[i]?.lat,
                      ])
                      props.updateCampnameSearch(campsite.name)
                      setUnsplash(campsite.name)
                    }}
                  >
                    {campsite?.name}
                  </Accordion.Control>
                  <Accordion.Panel>
                    {campsite.alerts.map((news, i) => {
                      let info = news.detail
                      return (
                        <p key={i}>
                          Located in the {campsites[i]?.region} region.
                          <br />
                          <br />
                          <span className="boldText">Alerts: </span>
                          {news.heading}
                          <Markup content={info} />
                        </p>
                      )
                    })}
                  </Accordion.Panel>
                </Accordion.Item>
              </div>
            )
          })}
        </Accordion>
      </nav>
    </>
  )
}

export default Nav
