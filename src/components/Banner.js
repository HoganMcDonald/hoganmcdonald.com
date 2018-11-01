import React, { Component } from 'react'

class Banner extends Component {
  render() {
    return (
      <h1 className="banner">
        Hey{' '}
        <span role="img" aria-label="Waving Emoji">
          👋
        </span>
        <br />
        My name Is Hogan.
        <br /> I work for{' '}
        <a href="https://foundrymakes.com" target="blank">
          Foundry
        </a>
        .<br /> I make Cool Websites for Cool People.
      </h1>
    )
  }
}

export default Banner
