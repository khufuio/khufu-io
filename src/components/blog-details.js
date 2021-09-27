import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BlogSidebar from '@/components/blog-sidebar'
import SinglePostCard from '@/components/single-post-card'

import blogImage1 from '@/images/bg/m-blog1.jpg'
import blogImage2 from '@/images/bg/m-blog2.jpg'
import blogImage3 from '@/images/bg/m-blog3.jpg'
import blogImage4 from '@/images/bg/m-blog4.jpg'

const articles = [
  {
    title: 'basic rules of running web agency business',
    date: '27 sept',
    url: '/blog/article4',
    image: blogImage4
  },
  {
    title: 'Become the best sale marketer',
    date: '20 sept',
    url: '/blog/article3',
    image: blogImage3
  },
  {
    title: 'Introducing latest mopaly features',
    date: '13 sept',
    url: '/blog/article2',
    image: blogImage2
  },
  {
    title: 'a deep understanding of our audience',
    date: '5 sept',
    url: '/blog/article1',
    image: blogImage1
  }
]

const BlogDetails = ({ location }) => {
  const pathname = location.pathname

  const articleI = parseInt(pathname.split('article')[1]) - 1

  return (
    <section className="commonSection blogDetails">
      <Container>
        <Row>
          <Col lg={8}>
            <SinglePostCard articles={articles} articleI={articleI} />
          </Col>
          <Col lg={4} className="sidebar">
            <BlogSidebar articles={articles} articleI={articleI} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogDetails
