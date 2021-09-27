import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import team1 from '@/images/bg/m-team-1.jpg'

const AboutTwo = () => {
  return (
    <section className="commonSection ab_agency">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="PR_79">
            <h4 className="sub_title">WELCOME TO SMART KHUFU WEB AGENCY</h4>
            <h2 className="sec_title MB_45">BUILD A BETTER AND COMPLETE APP WITH KHUFU AGENCY</h2>
            <p className="sec_desc">Khufu therefore develops your application with you, whether for mobile, internet or desktop. We can also offer you dedicated technical resources, whether for the day or for a longer period.</p>
            <a className="common_btn red_bg" href={'/about'}>
              <span>Learn More</span>
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
