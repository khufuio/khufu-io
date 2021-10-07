import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ServiceCardTwo from '@/components/service-card-two'

import { FormattedMessage } from 'react-intl'

const services = [
  {
    title: 'component.services_card.services.dedicated',
    icon: '👨‍💻',
    url: '/services/dedicated-resources'
  },
  {
    title: 'component.services_card.services.full_app',
    icon: '💻',
    url: '/services/full-app-development'
  },
  {
    title: 'component.services_card.services.devops',
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
            <h4 className="sub_title"><FormattedMessage id='component.services_card.subtitle' /></h4>
            <h2 className="sec_title"><FormattedMessage id='component.services_card.title' /></h2>
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
