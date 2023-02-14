import React, { useState, useEffect } from 'react'
import { Grid } from '@mantine/core'
import BetterCarousel from './ImageSlider'
import { fetchImages } from '../apis/unsplash'

export default function Image({ campsiteName }) {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetchImages(`${campsiteName} camping`)
      .then((images) => {
        setImages(images)
      })
      .catch((error) => console.error(error.message))
  }, [campsiteName])

  const urls = images.map((urlArr) => urlArr?.urls?.small)

  return (
    <Grid>
      <Grid.Col span="content">
        {images.length > 0 && <BetterCarousel images={urls} />}
      </Grid.Col>
    </Grid>
  )
}
