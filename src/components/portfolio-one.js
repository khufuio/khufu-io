import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PortfolioCard from '@/components/portfolio-card'

import customer1 from '@/images/bg/m-customer1.png'
import customer2 from '@/images/bg/m-customer2.png'
import customer3 from '@/images/bg/m-customer3.png'
import customer4 from '@/images/bg/m-customer4.png'
import customer5 from '@/images/bg/m-customer5.png'
import customer6 from '@/images/bg/m-customer6.png'
import customer7 from '@/images/bg/m-customer7.png'
import customer8 from '@/images/bg/m-customer8.png'

const customers = [
  {
    url: '/customers/signbox',
    urlExt: 'https://signbox.io',
    image: customer1,
    title: 'SignBox'
  },
  {
    urlExt: 'https://cotravelling.io',
    image: customer2,
    title: 'CoTraveling'
  },
  {
    image: customer3,
    title: 'FitLine'
  },
  {
    image: customer4,
    title: 'FindThePet'
  },
  {
    image: customer5,
    title: 'MyDigitalWaiter'
  },
  {
    image: customer6,
    title: 'Axelliance Groupe'
  },
  {
    image: customer7,
    title: 'ScroreApps'
  },
  {
    image: customer8,
    title: 'MaMontreAMoi'
  }
]

const PortfolioOne = () => {
  return (
    <section className="commonSection porfolioPage">
      <Container>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {customers.map((post, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <PortfolioCard data={post} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
        {/* <Row>
          <Col lg={12} className="text-center">
            <a className="common_btn red_bg" href="#">
              <span>Load More</span>
            </a>
          </Col>
        </Row> */}
      </Container>
    </section>
  )
}

export default PortfolioOne
