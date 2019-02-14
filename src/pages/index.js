import React from 'react'

import Background from '../components/Background'
import Footer from '../components/Footer'
import { Banner } from '../sections/Banner'
import { AboutMe } from '../sections/AboutMe'
import './index.css'

const IndexPage = () => (
  <Background>
    <Banner />
    <AboutMe />
    <Footer />
  </Background>
)

export default IndexPage
