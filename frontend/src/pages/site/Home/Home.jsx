import React from 'react'
import Section1 from '../../../components/site/Section/Section1'
import Section2 from '../../../components/site/Section/Section2'
import Section3 from '../../../components/site/Section/Section3'
import Card from '../../../components/site/Card/Card'
import Section4 from '../../../components/site/Section/Section4'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Section1 />
      <Section2 />
      <Section3 />
      <Card />
      <Section4 />
    </div>
  )
}

export default Home