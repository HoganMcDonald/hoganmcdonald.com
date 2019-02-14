import React from 'react'
import styled from 'styled-components'

import { Container } from '../styles'

const BannerSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`

const MyNameIs = styled.h4`
  color: ${({ theme }) => theme.colors.accent};
  margin: 0;
  margin-bottom: 1rem;
`

const Name = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`

const Tag = styled.h1`
  color: ${({ theme }) => theme.colors.grey};
  margin: 0;
  margin-bottom: 3rem;
`

const GetInTouch = styled.a`
  padding: 1rem;
  border: solid 1px ${({ theme }) => theme.colors.seafoam};
  color: ${({ theme }) => theme.colors.seafoam};
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.seafoam};
    color: ${({ theme }) => theme.colors.bg};
  }
`

export const Banner = props => (
  <BannerSection>
    <Container>
      <MyNameIs>
        Hey{' '}
        <span role="img" aria-label="hand waving emoji">
          👋
        </span>{' '}
        my name is
      </MyNameIs>
      <Name>Hogan McDonald.</Name>
      <Tag>I make Cool Websites for Cool People.</Tag>
      <GetInTouch href="mailto:hogan.developer@gmail.com?subject=Hey! Let's build something together. 💻">
        Get In Touch
      </GetInTouch>
    </Container>
  </BannerSection>
)
