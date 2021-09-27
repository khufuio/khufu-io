import React from 'react'

import team1 from '@/images/bg/m-team-2.jpg'
import team2 from '@/images/bg/m-team-1.jpg'

const AboutOne = () => {
  return (
    <section className="commonSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <h4 className="sub_title">Get To Know Us</h4>
            <h2 className="sec_title">BUILD A BETTER AND COMPLETE APP WITH KHUFU AGENCY</h2>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="agency_img1">
              <img src={team1} alt="khufu_team_1" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="agency_img2">
              <img src={team2} alt="khufu_team_2" />
            </div>
            <div className="compay_date">
              <h5>Working for customers since</h5>
              <h2>2015</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutOne
