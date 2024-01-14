import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import First from '../components/index/first'
import Second from '../components/index/second'

import { isStorage } from '../helper/storage'

const Index = () => {

  const navigate = useNavigate()

  useEffect(() => {
    (() => {
      if(isStorage()) {
        navigate('/main')
      }
    })()
  }, [])
  
  return (
    <div className='container-index'>
      <First />
      <Second />
    </div>
  )
}

export default Index