import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import AboutOne from '@/components/about-one'
import CallToActionOne from '@/components/call-to-action-one'
import TeamCarousel from '@/components/team-carousel'
// import TestimonialsOneCarousel from '@/components/testimonials-carousel'
// import FeatureTabOne from '@/components/feature-tab-1'
import AboutResume from '@/components/aboutus_resume'
import HeaderTwo from '@/components/header-two'
import MenuContextProvider from '@/context/menu-context'

import officeBg from '@/images/bg/m-office.jpg'

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="About Us">
        <HeaderTwo />
        <PageBanner title="About Us" name="About" bg={officeBg} />
        <AboutOne />
        {/* <TestimonialsOneCarousel /> */}
        <AboutResume />
        <TeamCarousel />
        {/* <FeatureTabOne /> */}
        <CallToActionOne extraClassName="ready" />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default AboutPage
