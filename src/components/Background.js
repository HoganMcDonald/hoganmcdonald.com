import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import favicon from '../images/favicon.png'

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
          <html lang="en" />
        </Helmet>
        <main>{children}</main>
      </>
    )
  }
}

Background.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Background
