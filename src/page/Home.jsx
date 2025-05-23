import React from 'react'
import Card from '../components/sheard/Card'
import Dashboard from '../components/Dashboard'
import Cards from '../components/Cards'
import NestedModal from '../components/md'
import Md from '../components/md'

function Home() {
  return (
    <section>
     <Dashboard/>
     <Cards/>
     <Md/>
    </section>
  )
}

export default Home
