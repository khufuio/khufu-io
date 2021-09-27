import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import ProtfolioDetails from '@/components/protfolio-details'
import MenuContextProvider from '@/context/menu-context'
import HeaderTwo from '@/components/header-two'

import signboxBg from '@/images/bg/m-signbox.png'
import signbox1Bg from '@/images/bg/m-signbox1.jpg'
import signbox2Bg from '@/images/bg/m-signbox2.jpg'

const details = {
  gallery: [{ image: signbox1Bg }, { image: signbox2Bg }],
  title: 'SignBox',
  text: "An app that centralize all your electronically signed documents on a single interface, you can access to your electronic signatures and analyzed your electronic signatures data's 🗂 📝 👨‍⚖️",
  date: '8 Aug, 2020',
  socials: [
    {
      name: 'SiteWeb',
      url: 'https://signbox.io'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/68566545/'
    }
  ]
}

const PortfolioDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Customer Signbox">
        <HeaderTwo />
        <PageBanner title="Customer" name="SignBox" bg={signboxBg} />
        <ProtfolioDetails details={details} />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default PortfolioDetailsPage
