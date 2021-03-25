import styled from 'styled-components';

import Layout from '../components/Layout';
import { colors } from '../styles/colors';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import FeaturedBlogs from '../components/FeaturedBlogs';
import Head from 'next/head';

import { getAllBlogPage } from '../lib/api';

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`;

const Blog = props => {
  const blogPage = props.allPosts.allBlog_pages.edges[0].node;
  const Seo = blogPage.body[1].primary;

  return (
    <Layout>
      <Head>
        {/* General */}
        <title>{Seo.site_name}</title>
        <meta name="description" content={Seo.description} />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={'kahilnayton'} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={Seo.url} key="ogurl" />
        <meta
          property="og:image"
          content={Seo.preview_image.url}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={Seo.site_name}
          key="ogsitename"
        />
        <meta property="og:title" content={Seo.title} key="ogtitle" />
        <meta
          property="og:description"
          content={Seo.description}
          key="ogdesc"
        />
      </Head>
      <Wrapper>
        <Hero
          heading={blogPage.heading}
          text=''
          background={blogPage.body[0].primary.background_image}
          variant="blogPage"
        />
        <FeaturedBlogs
          blogs={blogPage.blog_list}
          variant="blogPage"
          blog_heading={blogPage.blog_heading}
        />
        <ContactForm />
      </Wrapper>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllBlogPage(previewData);

  return {
    props: { preview, allPosts },
  };
}
