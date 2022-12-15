import React, { useEffect } from 'react'

import First from '../components/index/first'
import Second from '../components/index/second'

import { authProps } from '../types/auth.props'

const Index = ({ setIsIndex }: authProps) => {

  useEffect(() => {
    setIsIndex(true)
  }, [])
  

  return (
    <div className='container-index'>
      <First />
      <Second />
    </div>
  )
}

export default Index