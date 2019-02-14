import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { TypographyStyle, GoogleFont } from 'react-typography'

import { theme } from '../styles/theme'
import typography from '../styles/typography'
import favicon from '../images/favicon.png'

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.bg};
`

class Background extends Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Helmet
          title={'Hogan McDonald'}
          meta={[
            {
              name: 'description',
              content: 'I make great sites for great people.',
            },
            {
              name: 'keywords',
              content:
                'developer, react, ruby, gatsby, web developer, software, freelance',
            },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <html style={{ backgroundColor: 'purple' }} lang="en" />
        </Helmet>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <ThemeProvider theme={theme}>
          <Main>{children}</Main>
        </ThemeProvider>
      </>
    )
  }
}

Background.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Background
