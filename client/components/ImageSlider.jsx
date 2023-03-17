/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Image } from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons'

<<<<<<< HEAD
export default function ImageSlider(props) {
  const slides = props.images.map((url) => (
=======
export default function ImageSlider({ images }) {
  const slides = images.map((url) => (
>>>>>>> f599a6b6822b53917821f74c7a2ec1defd13cd76
    <Carousel.Slide key={url}>
      <Image src={url} className="image-slider" height="80%" />
    </Carousel.Slide>
  ))
  const autoplay = useRef(Autoplay({ delay: 3000 }))
  return (
    <Carousel
      previousControlIcon={<IconChevronLeft size={40} />}
      nextControlIcon={<IconChevronRight size={40} />}
      sx={{
        margin: '30px',
        maxWidth: '25%',
        position: 'absolute',
        zIndex: 999,
        right: 10,
      }}
      withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  )
}
