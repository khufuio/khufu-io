import React from 'react'
import { Link } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, EffectFade } from 'swiper'
import { Col, Container, Row } from 'react-bootstrap'
import { SliderOneData } from '@/data'

import 'swiper/swiper-bundle.min.css'

import { FormattedMessage } from 'react-intl'

SwiperCore.use([Autoplay, Navigation, EffectFade])

const SliderOne = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '#main-slider-next',
      prevEl: '#main-slider-prev'
    },
    autoplay: {
      delay: 5000
    }
  }
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {SliderOneData.map(({ image, subTitle, title, button }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <Container>
              <Row>
                <Col lg={12} className="text-center">
                  <p className="main-slider__subtext"><FormattedMessage id={subTitle} /></p>
                  <h3 className="main-slider__title"><FormattedMessage id={title} /></h3>
                  <Link to={button.url} className={'common_btn'}>
                    <span><FormattedMessage id={button.label} /></span>
                  </Link>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" id="main-slider-prev">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="swiper-button-next" id="main-slider-next">
          <i className="fa fa-angle-right"></i>
        </div>
      </Swiper>
    </section>
  )
}

export default SliderOne
