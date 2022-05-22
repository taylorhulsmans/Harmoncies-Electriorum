import {SceneWithSpinningBoxes} from '../../components/3d/Boxes'
import { useState, useEffect, useRef  } from 'react'
export default function IoannisDee() {
  //const [scrollTop, setScrollTop] = useState(document.body.scrollTop)
  const innerRef = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll)
  }, [])
  const handleOnScroll = (e) => {
    console.log('hi')
  }
  return (
    <div>
      <SceneWithSpinningBoxes />
    </div>
    )
}
