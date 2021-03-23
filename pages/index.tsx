import styled from 'styled-components';

import Layout from '../components/Layout';
import colors from '../styles/colors';
import {
  acrossScreen,
  bottomToTop,
  bottomToTopSlow,
} from '../styles/animations';
import About from '../components/About';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import FeaturedBlogs from '../components/FeaturedBlogs';
import FeaturedProjects from '../components/FeaturedProjects';
import ParallaxComponent from '../components/ParallaxComponent';
// import plane from '../images/plane.png';
// import planeRight from '../images/planeRight.png';
// import cloud from '../images/cloudOne.png';
// import Boeing from '../images/boeing.png';
// import BalloonImage from '../images/balloon.png';

// import Image from 'next/image';

import { getAllHomepage } from '../lib/api';
// import Slide from 'react-reveal/Slide';
import Bio from '../components/Bio';
// import Reveal from 'react-reveal/Reveal';

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`;

const PlaneWrapper = styled.div`
  display: block;
  position: relative;
  height: 112rem;
  width: 100%;
  overflow: hidden;
  margin-bottom: -100rem;
  div {
    width: 100%;
  }
`;

const Plane = styled.img`
  position: absolute;
  animation-name: ${acrossScreen};
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Balloon = styled.img`
  height: 18rem;
  left: 40%;
  position: absolute;
  animation-name: ${bottomToTop};
  animation-duration: 25s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &.small {
    height: 6rem;
    animation-duration: 60s;
    animation-name: ${bottomToTopSlow};
    overflow: hidden;
  }
`;

const IndexPage = props => {
  console.log('hello');
  const home = props.allHomepage.allHomes.edges[0].node;

  return (
    <Layout>
      <Wrapper>
        <Hero
          heading={home.heading}
          text={home.body[0].primary.hero_title[0].text}
          background={home.body[0].primary.background_image}
          variant="homepage"
        />

        <PlaneWrapper>
          <Plane src='../public/boeing.png' alt="Boeing plane" />
        </PlaneWrapper>

        <Balloon src='../public/balloon.png' alt="Balloon"/>
        <Balloon src='../public/balloon.png' alt="Balloon"/>

        <Bio
          heading={home.bio.heading}
          content={home.bio.content}
          profilePic={home.bio.profile_pic}
          video={home.bio.video}
        />

        <FeaturedBlogs
          blogs={home.blog_list}
          variant="homepage"
          blog_heading={home.blog_heading}
        />

        {/* <ParallaxComponent direction="right" variant="plane" plane={plane} /> */}

        <FeaturedProjects
          projects={home.project_list}
          variant="homepage"
          project_heading={'Projects'}
        />

        {/* <ParallaxComponent
          direction="left"
          variant="plane"
          planeRight={planeRight}
        /> */}

        {/* <ParallaxComponent variant="cloud" cloud={cloud} /> */}

        <About />

        <ContactForm />
      </Wrapper>
    </Layout>
  );
};
export default IndexPage;

export async function getStaticProps({ preview = false, previewData }) {
  const allHomepage = await getAllHomepage(previewData);

  return {
    props: { preview, allHomepage },
  };
}