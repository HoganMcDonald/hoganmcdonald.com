import React from 'react'

import Background from '../components/Background'
import { Banner } from '../sections/Banner'
import { AboutMe } from '../sections/AboutMe'
import './index.css'

const IndexPage = () => (
  <Background>
    <Banner />
    <AboutMe />
  </Background>
)

export default IndexPage
