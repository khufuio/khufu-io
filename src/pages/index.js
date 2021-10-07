import React from 'react'
import Layout from '@/components/layout'
import FooterContactBanner from '@/components/footer-contact-banner'
import Footer from '@/components/footer'
import BlogHome from '@/components/blog-home'
import ClientCarouselOne from '@/components/client-carousel-one'
import TeamCarousel from '@/components/team-carousel'
import FunfactOne from '@/components/funfact-one'
import ServiceTwo from '@/components/service-two'
import AboutTwo from '@/components/about-two'
import HeaderTwo from '@/components/header-two'
import MenuContextProvider from '@/context/menu-context'
import SliderOne from '@/components/slider-one'

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home">
        <HeaderTwo />
        <SliderOne />
        <ServiceTwo />
        <AboutTwo />
        <FunfactOne />
        <TeamCarousel />
        <ClientCarouselOne />
        <BlogHome />
        <FooterContactBanner extraClassName="ready" />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default HomeOne
