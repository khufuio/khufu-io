import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { ClientCarouselData } from '@/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'

import customer1 from '@/images/bg/m-customer1.png'
import customer2 from '@/images/bg/m-customer2.png'
import customer3 from '@/images/bg/m-customer3.png'
import customer4 from '@/images/bg/m-customer4.png'
import customer5 from '@/images/bg/m-customer5.png'
import customer6 from '@/images/bg/m-customer6.png'
import customer7 from '@/images/bg/m-customer7.png'
import customer8 from '@/images/bg/m-customer8.png'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Pagination])

const customers = [
  {
    url: 'https://signbox.io',
    image: customer1
  },
  {
    url: 'https://cotraveling.io',
    image: customer2
  },
  {
    url: '#',
    image: customer3
  },
  {
    url: '#',
    image: customer4
  },
  {
    url: '#',
    image: customer5
  },
  {
    url: '#',
    image: customer6
  },
  {
    url: '#',
    image: customer7
  },
  {
    url: '#',
    image: customer8
  }
]

const ClientCarouselOne = () => {
  const { sectionContent } = ClientCarouselData
  const { title, subTitle } = sectionContent

  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '#client-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  }

  return (
    <section className="commonSection client">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Swiper className="client_slider" {...carouselOptions}>
              {customers.map(({ url, image }, index) => (
                <SwiperSlide key={index}>
                  <div className="singleClient">
                    <Link to={url}>
                      <img src={image} alt="" />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
              <div
                className="swiper-pagination"
                id="client-carousel-pagination"
              ></div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ClientCarouselOne
