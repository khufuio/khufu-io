import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '@/components/section-title'

import meetingBg from '@/images/bg/m-meeting.jpg'

const FeatureTabOne = () => {
  return (
    <section className="commonSection chooseUs">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={{
              title: 'Why We Created Khufu',
              subTitle: 'Summary About Us',
              text: ''
            }} />
          </Col>
        </Row>
        <div id="tabs">
          <div className="tab-content">
            <div className="tab-pane fade show active animated fadeIn">
              <Row>
                <Col lg={7}>
                  <div className="wh_choose">
                    <p>{"The creation of Khufu came from a simple observation. Companies want to digitize their processes or need to develop projects. But they don't have the time, the inclination or the need to create and manage a complete technical team directly in-house."}</p>
                    <p>{'Khufu therefore develops your application with you, whether for mobile, internet or desktop. We can also offer you dedicated technical resources, whether for the day or for a longer period.'}</p>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className="chose_img">
                    <img src={meetingBg} alt="khufu_aboutus" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeatureTabOne
