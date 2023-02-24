import React from 'react'
import Header from './Header/Header'
import Imagentext from './Maincontent/Imagentext'
import Image from './Maincontent/Image'
import Content from './Maincontent/Content'
import Cards from './Maincontent/Cards'
import Choose from './Maincontent/Choose'
import Services from './Maincontent/Services'
import Mailncertification from './Maincontent/Mailncertification'
import WorkProcess from './Maincontent/WorkProcess'
import Articles from './Maincontent/Articles'
import ClientSection from './Maincontent/ClientSection'

const Home = () => {
  return (
    <>
    <Header />
    <Imagentext />
    <Image />
    <Content />
    <Cards />
    <Choose />
    <Services />
    <Mailncertification />
    <WorkProcess />
    <Articles />
    <ClientSection />
    </>
  )
}

export default Home;