import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import MenuContextProvider from '@/context/menu-context'
import Services from '@/components/service-card-5'
// import ServiceOffers from '@/components/services-offers'
import HeaderTwo from '@/components/header-two'
import CallToActionOne from '@/components/call-to-action-one'

import dedicatedBg from '@/images/bg/m-fullapp.jpg'

const services = [
  {
    title: 'Product thought',
    text: 'We help you in the reflection of your product by analyzing the needs of your customers',
    icon: '💡'
  },
  {
    title: 'UX/UI',
    text: 'We create wireframe and design based on the needs of future users',
    icon: '🎨'
  },
  {
    title: 'Development',
    text: 'We develop your product in a clean and maintainable way with the technologies most suited to it',
    icon: '💻'
  }
]

const services2 = [
  {
    title: 'CI/CD',
    text: 'We set up CI/CD solutions to facilitate the maintenance of your product',
    icon: '🔨'
  },
  {
    title: 'DevOps',
    text: 'We put in place the most robust, secure and suitable infrastructure for your product',
    icon: '🏢'
  }
]

const DedicatedResources = () => {
  return (

    <MenuContextProvider>
      <Layout PageTitle="Full App Development">
        <HeaderTwo />
        <PageBanner title="Full App Development" name="Services" bg={dedicatedBg} />
        <Services services={services} services2={services2} />
        {/* <ServiceOffers /> */}
        <CallToActionOne extraClassName="ready" />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default DedicatedResources
