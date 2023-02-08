import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

import dimensions from '../../styles/dimensions'
import { Inner, Wrap } from '../../styles/structure'
import { colors } from '../../styles/colors'
import gradients from '../../styles/gradients'
import z from '../../styles/base'
import CloudComponent from '../_ui/CloudComponent'
import { CloudBackground } from '../_ui/icons'

// import Image from 'next/image'

type HeroProps = {
  variant: string
  heading: string
  text: string
  background?: Record<string, string>
}

export const Hero = ({ variant, heading, text, background }: HeroProps) => {
  return (
    <HeroContainer className={`${variant ? `Hero--${variant}` : ''}`}>
      <HeroInner>
        <HeroBackground>
          {background ? (
            <img src={background.url} alt="Hero background image" />
          ) : (
            <CloudBackground />
          )}
        </HeroBackground>
        <CloudComponent direction="right" distance="2rem" />
        <HeroWrap>
          {variant !== 'projectPage' && (
            <HeroContent>
              TODO: Fix rich text
              {/* {heading && <RichText render={heading} />} */}
              {text && <p className="is-large">{text}</p>}
            </HeroContent>
          )}
        </HeroWrap>
      </HeroInner>
    </HeroContainer>
  )
}

const imgStyle = {
  position: 'absolute',
  filter: 'grayscale(1)',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

const gatsbyImageContainer = {
  position: 'absolute',
  width: '100vw',
  height: '100%',
  top: 0,
  left: 0,
}

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  * {
    color: #fff;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: ${gradients.purpleRedCircle}; */
    background: ${colors.blue};
    mix-blend-mode: multiply;
    transition: transform 0.12s ease-in-out;
    z-index: ${z.content};
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    & + * {
      margin-top: 8rem;
    }
  }
`

const HeroInner = styled(Inner)`
  padding-top: 10rem;
  padding-bottom: 5.6rem;
  height: 54rem;
  margin: 0;
  transition: 0.2s;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    padding-top: 8.8rem;
    padding-bottom: 8.8rem;
    height: 66rem;
    transition: 0.2s;
  }
`

const HeroBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;

  img,
  svg {
    position: absolute;
    filter: grayscale(1);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    /* width: calc(100% - 8rem); */
    /* left: 4rem; */
  }
`

const HeroWrap = styled(Wrap)`
  display: flex;
  align-items: flex-end;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    min-height: 31.2rem;
    padding: 0 7.77vw;

    .Hero--homepage & {
      /* min-height: 47rem; */
    }
  }

  @media (min-width: 1152px) {
    padding: 0 10.4rem;
    max-width: 128rem;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: ${z.modal};
  max-width: 85rem;
  text-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.18);
  padding: 1.6rem;

  h1 {
    color: ${colors.lightPurple};
    font-size: 6rem;
    font-weight: 800;
    font-family: 'Zallord';

    @media (min-width: ${dimensions.tabletLandscapeUp}px) {
      font-size: 12rem;
    }
  }

  p {
    margin-top: 3.2rem;
    color: ${colors.lightPurple};
    /* font-family: 'Zallord'; */
    font-size: 2.8rem;
  }

  span {
    > span {
      color: #fff;
    }

    & + * {
      margin-top: 0.8rem;
    }
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    p {
      margin-top: 1.6rem;
    }
  }
`