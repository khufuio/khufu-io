import React from 'react'
import { Container, Col, Card, Row, Button } from 'react-bootstrap'
import { Link } from 'gatsby'

import { FormattedMessage } from 'react-intl'

const CardPrice = ({ title, offers }) => {
  return (
    <section className="service_section_2 commonSection" style={{
      padding: '50px 0 100px 0'
    }}>
      <Container>
        {title ? <h1 style={{ textAlign: 'center', marginBottom: '50px', color: '#a461e5' }}><FormattedMessage id={title} /></h1> : ''}
        <Row>
          {offers.map((offer, index) => (
            <Col key={index} lg='4'>
              <Card style={{
                borderColor: '#a461e588',
                boxShadow: '0 2px 40px #a461e588'
              }}>
                <Card.Body>
                  <Card.Title as='h3' style={{ textAlign: 'center' }}><FormattedMessage id={offer.name} /></Card.Title>
                  <hr />
                  <div style={{
                    height: '250px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <ul style={{
                      margin: 0,
                      padding: 0
                    }}>
                      {offer.services.map((service, index) => (
                        <li key={index} style={{
                          marginBottom: '5px'
                        }}>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Link href='/contact'>
                      <Button variant='primary' style={{
                        background: '#eeb60d',
                        borderColor: '#eeb60d',
                        padding: '7px 35px'
                      }}><FormattedMessage id={offer.actionLabel} /></Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default CardPrice
