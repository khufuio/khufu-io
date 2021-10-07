import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

import { FormattedMessage } from 'react-intl'

const FunfactData = [
  {
    title: 'component.funfact.projects',
    countNumber: 19
  },
  {
    title: 'component.funfact.line',
    countNumber: 25632
  },
  {
    title: 'component.funfact.coffee',
    countNumber: 3625
  },
  {
    title: 'component.funfact.countries',
    countNumber: 6
  }
]

const FunfactOne = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  })
  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setCounter({ startCounter: true })
    }
  }
  return (
    <section className="commonSection funfact">
      <Container>
        <Row>
          {FunfactData.map(({ title, countNumber }, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <div className="singlefunfact text-center">
                <h1 className="timer">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? countNumber : 0} />
                  </VisibilitySensor>
                </h1>
                <h3><FormattedMessage id={title} /></h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default FunfactOne
