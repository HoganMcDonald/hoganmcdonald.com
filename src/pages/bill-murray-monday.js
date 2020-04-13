import React from 'react'
import styled from 'styled-components'

import Background from '../components/Background'
import Footer from '../components/Footer'
import { Container } from '../styles'
import './index.css'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`

const Instructions = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
`

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
`

const Steps = styled.ul`
  color: ${({ theme }) => theme.colors.lightGrey};
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.accent};
`

const Step = styled.li``

const BillPage = () => (
  <Background>
    <Section>
      <Container>
        <Title>Bill Murray Monday</Title>
        <br />
        <Instructions>
          It's too bad we can't replace all images on the web with pictures of
          Bill Murray... unless?
        </Instructions>
        <SubTitle>How to install:</SubTitle>
        <Steps>
          <Step>
            Download{' '}
            <Link
              href="https://hogankoreacloudfrontdist.s3.ap-northeast-2.amazonaws.com/bmm.zip"
              download
            >
              this folder
            </Link>
            .
          </Step>
          <Step>Unzip the bmm.zip folder by double clicking it.</Step>
          <Step>
            Navigate to{' '}
            <Link href="chrome://extensions/" about="_blank">
              chrome://extensions/
            </Link>{' '}
            in Google Chrome
          </Step>
          <Step>
            Make sure "Developer Mode" is turned on in the top right corner.
          </Step>
          <Step>
            Drag the unzipped folder onto the chrome window and release when it
            says "drop to install"
          </Step>
          <Step>
            You should see a new Bill Murray icon in your toolbar. Navigate to
            any website and click to use it.
          </Step>
          <Step>
            Uninstall by returning to{' '}
            <Link href="chrome://extensions/" about="_blank">
              chrome://extensions/
            </Link>
            and clicking "remove".
          </Step>
        </Steps>
      </Container>
    </Section>
    <Footer />
  </Background>
)

export default BillPage
