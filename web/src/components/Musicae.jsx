
import * as Tone from 'tone'
import { useState, useEffect } from 'react'
import { createChord, useFractal, SEVENFOUR } from './Fractalis'

export function Chordio({frequensis}) {
    console.log(frequensis)
  return (<button onClick={() =>{
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    const frequencies  = frequensis.forEach((f) => {
      synth.triggerAttackRelease(f, 1)
    })
    console.log(frequencies)
    console.log(frequensis)
  }}>{frequensis.join(" | ")}</button>)

}

export function Scalio({frequensis, temporis}) {
  return (<>
      <button onClick={() => {
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        const now = Tone.now()

        frequensis.forEach((f,i) => {
          synth.triggerAttackRelease(f, "8n", now + i*temporis);
        })
        //synth.triggerRelease(frequensis, now + temporis*frequensis.length);

      }}>scalae {frequensis[0]} ... {frequensis[frequensis.length-1]} </button><br/>
    </>)
}

export function ScalaeReductio({frequensis, temporis}) {
  return (<>
      <button onClick={() => {
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        const now = Tone.now()

        frequensis.forEach((f,i) => {
          synth.triggerAttack(f/i, now + temporis + i*temporis);
        })
        synth.triggerRelease(frequensis, now + temporis*frequensis.length);

      }}>scalae {frequensis[0]} ... {frequensis[frequensis.length-1]} </button><br/>
    </>)
}

