import React from 'react';
import RichText from '../components/RichText';
import styled from '@emotion/styled';
import dimensions from '../styles/dimensions';
import { Inner, Wrap } from '../styles/structure';
import { Rubric } from '../styles/typography';
import colors from 'styles/colors';
import gradients from 'styles/gradients';
import z from 'styles/base'
import CloudComponent from './CloudComponent';

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 4rem;

  * {
    color: #fff;
  }

  & + * {
    margin-top: 5.6rem;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${gradients.redPurpleCircle};
    mix-blend-mode: multiply;
    transition: transform 0.12s ease-in-out;
    z-index: ${z.content};
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    & + * {
      margin-top: 8rem;
    }
  }
`;

const HeroInner = styled(Inner)`
  padding-top: 5.6rem;
  padding-bottom: 5.6rem;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    padding-top: 8.8rem;
    padding-bottom: 8.8rem;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-bottom: 4.8rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    width: calc(100% - 8rem);
    left: 4rem;
  }
`;

const HeroWrap = styled(Wrap)`
  display: flex;
  align-items: flex-end;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    min-height: 31.2rem;
    padding: 0 7.77vw;

    .Hero--homepage & {
      min-height: 47rem;
    }
  }

  @media (min-width: 1152px) {
    padding: 0 10.4rem;
    max-width: 128rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: ${z.modal};
  max-width: 85rem;
  text-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.18);
  padding: 1.6rem;


  p {
    margin-top: 3.2rem;
    color: ${colors.red};
  }
  h1 {
    color: ${colors.red};
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
`;

const Hero = ({
  heading,
  text,
  background,
  variant,
  foreground,
  content,
  rubric,
}) => {
  return (
    <HeroContainer className={`${variant ? `Hero--${variant}` : ''}`}>
      <HeroInner>
        {background && (
          <HeroBackground>
            <img src={background.url} alt={background.alt} />
          </HeroBackground>
        )}
        <CloudComponent direction="right" distance="2rem" />
        <HeroWrap>
          {variant !== 'projectPage' && (
            <HeroContent>
              {heading && <RichText render={heading} />}

              {text && <p className="is-large">{text}</p>}
            </HeroContent>
          )}
        </HeroWrap>
      </HeroInner>
    </HeroContainer>
  );
};

export default Hero;
