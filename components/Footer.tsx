import React from 'react'
import styled from 'styled-components'

import gradients from '../styles/gradients'
import SocialBar from '../components/SocialBar'

const FooterWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`

const FooterContainer = styled.footer`
  display: flex;
  margin: auto;
  padding-left: 2.3rem;
  height: 6rem;
  align-items: center;
  justify-content: flex-start;
  background: ${gradients.redPurpleCircle};
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialBar />
      </FooterContainer>
    </FooterWrapper>
  )
}
