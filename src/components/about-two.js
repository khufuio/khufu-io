import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import team1 from '@/images/bg/m-team-1.jpg'

import { FormattedMessage } from 'react-intl'

const AboutTwo = () => {
  return (
    <section className="commonSection ab_agency">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="PR_79">
            <h4 className="sub_title"><FormattedMessage id='page.home.summary.subtitle' /></h4>
            <h2 className="sec_title MB_45"><FormattedMessage id='page.home.summary.title' /></h2>
            <p className="sec_desc"><FormattedMessage id='page.home.summary.content' /></p>
            <a className="common_btn red_bg" href={'/about'}>
              <span><FormattedMessage id='page.home.summary.action' /></span>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className='ab_img1'>
              <img src={team1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutTwo
