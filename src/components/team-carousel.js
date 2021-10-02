import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '@/components/section-title'
import { Swiper, SwiperSlide } from 'swiper/react'
import TeamCard from '@/components/team-card'
import 'swiper/swiper-bundle.min.css'

// import team01 from '@/images/bg/m-team1.jpg'
// import team02 from '@/images/bg/m-team2.jpg'
import team03 from '@/images/bg/m-team3.jpg'
import team04 from '@/images/bg/m-team4.jpg'
import team05 from '@/images/bg/m-team5.jpg'

import SwiperCore, { Pagination } from 'swiper'

SwiperCore.use([Pagination])

const members = [
  {
    image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHalFy35fqimQ/profile-displayphoto-shrink_200_200/0/1632125622926?e=1638403200&v=beta&t=ivYu9Q7qFJW26hSD7vNN4Ja8x9GC4bINmQE6G3y1I4o',
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
    image: 'https://media-exp1.licdn.com/dms/image/C4E03AQG32vgpXo90Kg/profile-displayphoto-shrink_200_200/0/1633169095014?e=1638403200&v=beta&t=NGvnHKq1cghgkyGcQ_lURgBITANs9G4YMu_HAcWeqho',
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
