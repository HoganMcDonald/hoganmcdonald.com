import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import Typography from 'typography'
import { TypographyStyle, GoogleFont } from 'react-typography'

import { theme } from '../styles/theme'
import favicon from '../images/favicon.png'

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.bg};
`

class Background extends Component {
  state = {
    type: { ...theme.type },
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateType)
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.updateType)
  }

  updateType = () => {
    if (window.matchMedia('(max-width: 1000px)').matches) {
      this.setState({
        type: {
          ...this.state.type,
          scaleRatio: 2.6,
        },
      })
    } else {
      this.setState({
        type: {
          ...this.state.type,
          scaleRatio: theme.type.scaleRatio,
        },
      })
    }
  }

  render() {
    const { children } = this.props
    const { type } = this.state

    const typography = new Typography(type)
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
