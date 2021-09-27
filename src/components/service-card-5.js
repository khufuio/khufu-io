import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ServiceCardOne from '@/components/service-card-one'

const ServiceOne = ({ services, services2 }) => {
  return (
    <section className="service_section_2 commonSection">
      <Container>
        <Row style={{
          marginBottom: '40px'
        }}>
          {services.map((post, index) => (
            <Col lg={4} md={12} key={index}>
              <ServiceCardOne data={post} />
            </Col>
          ))}
        </Row>
        <Row style={{
          marginBottom: '40px'
        }}>
          <Col lg={2} md={12} />
            {services2.map((post, index) => (
              <Col lg={4} md={12} key={index}>
                <ServiceCardOne data={post} />
              </Col>
            ))}
          <Col lg={2} md={12} />
        </Row>
      </Container>
    </section>
  )
}

export default ServiceOne
