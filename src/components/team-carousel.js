import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '@/components/section-title'
import { Swiper, SwiperSlide } from 'swiper/react'
import TeamCard from '@/components/team-card'
import 'swiper/swiper-bundle.min.css'

import team01 from '@/images/bg/m-team1.jpg'
import team02 from '@/images/bg/m-team2.jpg'
import team03 from '@/images/bg/m-team3.jpg'

import SwiperCore, { Pagination } from 'swiper'

SwiperCore.use([Pagination])

const members = [
  {
    image: team01,
    name: 'Adrien De Coster',
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
    name: 'Clémentine Mailloux',
    designation: 'Chief Sales Offices',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/cmailloux/'
      }
    ]
  },
  {
    image: team03,
    name: 'Florent Marne',
    designation: 'Full Stack Developer',
    socials: [
    ]
  }
]

const TeamCarousel = () => {
  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '#team-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 5,
        slidesPerGroup: 5
      }
    }
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
      <Swiper className="team_slider" {...carouselOptions}>
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <TeamCard data={member} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" id="team-carousel-pagination"></div>
      </Swiper>
    </section>
  )
}

export default TeamCarousel
