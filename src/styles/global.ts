import { createGlobalStyle } from 'styled-components'
import { colors, dimensions } from '.'

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.orange100};
    scroll-behavior: smooth;
  }
  
  html,
  body,
  #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  body {
    background-color: #fff;
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    overflow-x: hidden;
    line-height: 1.5;
    color: ${colors.grey900};
    -webkit-font-smoothing: antialiased;

    &.is-locked {
      overflow: hidden;
    }

    @media(max-width: ${dimensions.mobileDown}px) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: ${colors.yellow};
      }
    }
  }

  
  @media(min-width: ${dimensions.tabletLandscapeUp}px) {
    body.is-locked {
      overflow: initial;
    }
  }
`
