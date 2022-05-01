import { useState, useEffect, useCallback } from 'react'
import * as Tone from 'tone'

export function useSampler() {
  const [sampler, setSampler] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchSampler = useCallback(() => {
    return new Tone.Sampler(
      440,
      {
        onload: () => {
          setIsLoaded(true)
          console.log('onload triggered')
        }
      }
    ).toMaster();

  }, [sampler])
  
  if (!isLoaded && !sampler) {
    setSampler(fetchSampler())
  }
  return { sampler, fetchSampler, isLoaded }
}
export default function ToneButton({tone, nominis:name}) {
  console.log('tone', tone)
  console.log('name', name)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isActive) {
      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      console.log(synth)
      Tone.Transport.start()
      const toneLoop = new Tone.Loop(time => {
        synth.triggerAttackRelease(tone, "1m", time)
      }, "1n").start(0)
    } else {
      Tone.Transport.stop()
      console.log('attempting stop')
    }
  }, [isActive])


  return (
    <>
      <button onClick={() => {
        console.log(Tone.Transport)
        setIsActive(!isActive)
      }}><h3>{isActive ? 'stop':tone}</h3>
      </button>
    </>
  )
}
