import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ServiceCardTwo from '@/components/service-card-two'

const services = [
  {
    title: 'Dedicated Resources',
    icon: '👨‍💻',
    url: '/services/dedicated-resources'
  },
  {
    title: 'Full App Development',
    icon: '💻',
    url: '/services/full-app-development'
  },
  {
    title: 'DevOps Support',
    icon: '👨‍🔧',
    url: '/services/devops-support'
  }
]

const ServiceTwo = () => {
  return (
    <section className="service_section commonSection">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title">Khufu offers what you need</h4>
            <h2 className="sec_title">Our Offers</h2>
          </Col>
        </Row>
        <Row className="custom_column">
          {services.map((data, index) => (
            <Col key={index} lg={4} md={4} sm={12}>
              <ServiceCardTwo data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ServiceTwo
