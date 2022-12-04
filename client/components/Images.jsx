import React, { useState, useEffect } from 'react'
import { Group, Avatar, Text, Grid } from '@mantine/core'
import BetterCarousel from './ImageSlider'
import { fetchImages } from '../apis/unsplash'

// ACCORDIAN COMPONENT
function Region({ label, image, description }) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  )
}

export default function Image(props) {
  // object
  const [images, setImages] = useState([])
  useEffect(() => {
    fetchImages(props.campsiteName + ' camping')
      .then((images) => {
        setImages(images)
      })
      .catch((e) => console.error(e.message))
  }, [props.campsiteName])

  let urls = images.map((urlArr) => {
    return urlArr?.urls?.small
  })

  return (
    <Grid>
      <Grid.Col span="content">
        {images.length > 0 && <BetterCarousel images={urls} />}
      </Grid.Col>
    </Grid>
  )
}
