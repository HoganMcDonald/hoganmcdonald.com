import React from 'react'
import styled from 'styled-components'

import profile from '../static/profile.jpeg'
import { Container } from '../styles'

const AboutMeSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`

const SectionContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 6rem;
  grid-row-gap: 3rem;
`

const Info = styled.div`
  width: 100%;
  align-self: center;
  justify-self: center;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  text-indent: 2rem;
`

const SkillList = styled.ul`
  columns: 2;
  color: ${({ theme }) => theme.colors.lightGrey};
`

const Skill = styled.li``

const Profile = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 4px;
  align-self: center;
  justify-self: center;
`

export const AboutMe = props => (
  <AboutMeSection>
    <SectionContainer>
      <Info>
        <Title>About Me:</Title>
        <Description>
          I'm a software developer based in beautiful, sunny Minneapolis, MN. I
          spend most days making internet. I build beautiful, accessible user
          interfaces, and reliable, well architected Rails and Node back ends.
        </Description>
        <Description>
          When I'm not coding I enjoy cooking, biking, and hanging with my dog,
          Petey. I recieved my coding education from Prime Academy in MPLS, and
          a Theology and Leadership Development education from North Central
          University.
        </Description>

        <Description style={{ textIndent: 0 }}>
          My experience includes:
        </Description>
        <SkillList>
          <Skill>JavaScript</Skill>
          <Skill>Ruby on Rails</Skill>
          <Skill>React</Skill>
          <Skill>Vue</Skill>
          <Skill>Node</Skill>
          <Skill>Gatsby</Skill>
          <Skill>Styled Components</Skill>
          <Skill>Accessibility</Skill>
        </SkillList>
      </Info>
      <Profile src={profile} alt="selfie of Hogan McDonald" />
    </SectionContainer>
  </AboutMeSection>
)
