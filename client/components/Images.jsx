import React, { useState, useEffect } from 'react'
import { Grid } from '@mantine/core'
import BetterCarousel from './ImageSlider'
import { fetchImages } from '../apis/unsplash'

<<<<<<< HEAD
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
=======
export default function Image({ campsiteName }) {
>>>>>>> f599a6b6822b53917821f74c7a2ec1defd13cd76
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
