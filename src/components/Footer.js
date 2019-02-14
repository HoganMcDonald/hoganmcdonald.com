import React from 'react'
import styled, { withTheme } from 'styled-components'
import { SocialIcon } from 'react-social-icons'

const FooterBackground = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.fg};
  padding: 2rem;
`

const socials = [
  'https://github.com/HoganMcDonald',
  'https://linkedin.com/in/hogan-mcdonald/',
  'https://dev.to/hogan',
]

const Footer = props => (
  <FooterBackground>
    {socials.map((url, i) => (
      <SocialIcon
        key={i}
        url={url}
        fgColor={props.theme.colors.lightGrey}
        bgColor={props.theme.colors.fg}
        target="_blank"
      />
    ))}
  </FooterBackground>
)

export default withTheme(Footer)
