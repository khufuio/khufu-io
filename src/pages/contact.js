import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
// import ContactInfos from '@/components/contact-infos'
// import GoogleMap from '@/components/google-map'
import ContactForm from '@/components/contact-form'
import PageBanner from '@/components/page-banner'
import MenuContextProvider from '@/context/menu-context'
import HeaderTwo from '@/components/header-two'

import contactBg from '@/images/bg/m-contact.jpg'

const ContactPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Contact">
        <HeaderTwo />
        <PageBanner title="Contact Us" name="Contact" bg={contactBg} />
        <ContactForm />
        {/* <GoogleMap extraClass="contact-page" /> */}
        {/* <ContactInfos /> */}
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default ContactPage
