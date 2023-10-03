'use client'
import Slider from 'react-slick'

import './styles.scss'

const SliderWrapper = ({ children, config = {} }) => {
  const slideConfig = {
    autoplay: config.autoplay ?? true,
    speed: 500,
    slidesToShow: config.slidesToShow ?? 1,
    slidesToScroll: 1,
    infinite: config.infinite ?? true,
    arrows: config.arrows ?? false,
    adaptiveHeight: config.adaptiveHeight ?? true,
    ...config,
  }
  return <Slider {...slideConfig}>{children}</Slider>
}

export default SliderWrapper
