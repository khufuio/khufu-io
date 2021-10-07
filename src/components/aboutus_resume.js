import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '@/components/section-title'

import meetingBg from '@/images/bg/m-meeting.jpg'

import { FormattedMessage } from 'react-intl'

const FeatureTabOne = () => {
  return (
    <section className="commonSection chooseUs">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={{
              title: <FormattedMessage id='page.about.story.title' />,
              subTitle: <FormattedMessage id='page.about.story.subtitle' />,
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
                    <p><FormattedMessage id='page.about.story.content1' /></p>
                    <p><FormattedMessage id='page.about.story.content2' /></p>
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
