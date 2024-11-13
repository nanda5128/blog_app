import React, { Children } from 'react'
import Navbar from './Navbar'

const Main = ({Child}) => {
  return (
    <div>
        <Navbar/>
        {Child}
    </div>
  )
}

export default Main