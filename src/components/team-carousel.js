import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '@/components/section-title'
import TeamCard from '@/components/team-card'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import team01 from '@/images/bg/m-team1.jpg'
import team02 from '@/images/bg/m-team2.jpg'
import team03 from '@/images/bg/m-team3.jpg'
import team04 from '@/images/bg/m-team4.jpg'
import team05 from '@/images/bg/m-team5.jpg'

const members = [
  {
    image: team01,
    name: 'Adrien',
    designation: 'Chief Executive Officer',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/adriendecoster/'
      }
    ]
  },
  {
    image: team02,
    name: 'Clémentine',
    designation: 'Chief Sales Officer',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/cmailloux/'
      }
    ]
  },
  {
    image: team03,
    name: 'Florent',
    designation: 'Full Stack Developer',
    socials: [
    ]
  },
  {
    image: team04,
    name: 'Axel',
    designation: 'Full Stack Developer',
    socials: [
    ]
  },
  {
    image: team05,
    name: 'David',
    designation: 'Full Stack Developer',
    socials: [
    ]
  }
]

const TeamCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  }

  return (
    <section className="commonSection team">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={{
              title: 'expert people',
              subTitle: 'meet the team',
              text:
                'We are committed to providing our customers with exceptional service \n while offering our employees the best training.'
            }} />
          </Col>
        </Row>
      </Container>
      <Slider {...settings}>
        {members.map((member, index) => (
          <TeamCard key={index} data={member} />
        ))}
      </Slider>
    </section>
  )
}

export default TeamCarousel
