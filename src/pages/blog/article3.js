import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import BlogDetails from '@/components/blog-details'
import MenuContextProvider from '@/context/menu-context'
import SearchContextProvider from '@/context/search-context'
import HeaderTwo from '@/components/header-two'

import blogImage3 from '@/images/bg/m-blog3.jpg'

const BlogSinglePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog Details Page">
          <HeaderTwo />
          <PageBanner title="page.article.header.title" name="page.article.header.subtitle" bg={blogImage3} />
          <BlogDetails />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default BlogSinglePage
