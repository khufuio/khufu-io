import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import customer1 from '@/images/bg/m-customer1.png'
import customer2 from '@/images/bg/m-customer2.png'
import customer3 from '@/images/bg/m-customer3.png'
import customer4 from '@/images/bg/m-customer4.png'
import customer5 from '@/images/bg/m-customer5.png'
import customer6 from '@/images/bg/m-customer6.png'
import customer7 from '@/images/bg/m-customer7.png'
import customer8 from '@/images/bg/m-customer8.png'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FormattedMessage } from 'react-intl'

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  }

  return (
    <section className="commonSection client">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title"><FormattedMessage id='component.customers_carousel.subtitle' /></h4>
            <h2 className="sec_title"><FormattedMessage id='component.customers_carousel.title' /></h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Slider className="client_slider" {...settings}>
              {customers.map((customer, index) => (
                <div key={index} className="singleClientContainer">
                  <div className="singleClient">
                    <Link to={customer.url} target='_blank' referrerPolicy='no-referrer'>
                      <img src={customer.image} alt="" />
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ClientCarouselOne
