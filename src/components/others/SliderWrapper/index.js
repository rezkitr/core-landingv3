'use client'
import Slider from 'react-slick'

import './styles.scss'

const SliderWrapper = ({ children, config = {} }) => {
  const slideConfig = {
    infinite: true,
    speed: 500,
    slidesToShow: config.slidesToShow || 1,
    slidesToScroll: 1,
    ...config,
  }
  return <Slider {...slideConfig}>{children}</Slider>
}

export default SliderWrapper
