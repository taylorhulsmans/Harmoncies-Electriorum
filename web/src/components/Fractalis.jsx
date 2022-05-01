import { useState, useEffect, useCallback } from 'react'
/* ex
 {
  tones: {
    current: 160,
    next: 280,
  },
  ratio: 7/4,
  iterator: {
    current: 0,
    end: 34
  }
 }

  or

  const tones =  {
    current: 160,
    next: 280
  }
  const iterator = {
    current: 0,
    end: 34
  }
  M
  const ratio = 7/4

*/

export const SEVENFOUR = {
  tones: {
    current: 160,
    next: 280,
  },
  ratio: 7/4,
  iterator: {
    end: 8,
  }
}

export const createScale = (config) => {
  config.iterator.current = 0
  config.octaveReducer = {
    ipsActive: false,
    perFrequency: 1
  }

}

export const createChord = (config) => {
  config.iterator.start = 1 
  config.iterator.current = 0

  return config
}

export const useFractal = (params) => {
  const [vars, setVars] = useState(createChord(params))
  const [tones, setTones] = useState([])

  const fetchTones = useCallback(() => {
    const tones = []
    while (vars.iterator.current <= vars.iterator.end) {
      tones.push(vars.tones.current)
      const x = vars.tones.next * (vars.ratio)
      vars.tones.current = vars.tones.next
      vars.tones.next = x
      console.log(vars.iterator.current)
      vars.iterator.current++
    }
    setTones(tones)
  }, [vars])

  useEffect(() => {
    fetchTones()
  }, [vars])

  return { fetchTones, tones}

}
/*
export function fractal(vars) {
  console.log('returnvalues init: ', vars.returnValues)
  console.log('hello: ', vars.iterator.current)
  console.log('tones.current: ', vars.tones.current )
  
  if (vars.iterator.current >= vars.iterator.end) {
      console.log('this')
      return vars.returnValues
  } else {
    const x = vars.tones.next * (vars.ratio)
    vars.returnValues.push(vars.tones.current)
    vars.tones.current = vars.tones.next
    vars.tones.next = x
    console.log(vars.iterator.current)
    vars.iterator.current++
    console.log(vars.iterator.current)
    return fractal(vars)
  }
}
*/
