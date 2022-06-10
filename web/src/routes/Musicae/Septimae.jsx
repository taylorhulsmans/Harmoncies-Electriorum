import * as Tone from 'tone'
import { useState, useEffect } from 'react'
import { createChord, useFractal, SEVENFOUR } from '../../components/Tone/Fractalis'

import { Chordio, Scalio } from '../../components/Tone/Musicae'

export default function Septimae() {
  const [septimum, septio] = useState(false)
  //const [chord, setChord] = useState(fractal(createChord(SEVENFOUR)))
  const { tones } =  useFractal(SEVENFOUR)
  console.log(tones, 'testTones')


  return (
    <div>
      <h3>7/4</h3>
      <Chordio frequensis={tones} /><br/>
      <p>Test</p>
      <Chordio frequensis={[160]} /><br />
      <Chordio frequensis={[160, 280]} /><br />
      <Chordio frequensis={[160, 280, 490]} /><br />
      <Chordio frequensis={[160, 280, 490, 857.5]} /><br />
      <Chordio frequensis={[160, 280, 490, 857.5, 1500.63]} /><br />
      <Chordio frequensis={[160, 280, 490, 857.5, 1500.63, 2626.09]} /><br />
      <Chordio frequensis={[160, 280, 490, 857.5, 1500.63, 2626.09, 4595.66]} /><br />
      <Scalio frequensis={tones} temporis={0.5} />
      <button onClick={() => {
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        const now = Tone.now()
        synth.triggerAttack(91.429, now);
        synth.triggerAttack(160, now + 0.5);
        synth.triggerAttack(280, now + 1);
        synth.triggerAttack(490, now + 1.5);
        synth.triggerAttack(857.5, now + 2.0);
        synth.triggerAttack(1500.63, now + 2.5);
        synth.triggerAttack(2626.09, now + 3.0);
        synth.triggerAttack(4595.66, now + 3.5);
        
        synth.triggerRelease([91.429, 160,280,490, 857.5, 1500.63, 2626.09, 4595.66], now + 5.0);

      }}>scalae septem in quattuor, octavii temporio </button><br/>
      <button onClick={() => {
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        const now = Tone.now()
        synth.triggerAttack(91.429/2, now);
        synth.triggerAttack(160/2, now + 0.5);
        synth.triggerAttack(280/2, now + 1);
        synth.triggerAttack(490/2, now + 1.5);
        synth.triggerAttack(857.5/2, now + 2.0);
        synth.triggerAttack(1500.63/2, now + 2.5);
        synth.triggerAttack(2626.09/2, now + 3.0);
        synth.triggerAttack(4595.66/2, now + 3.5);
        
        synth.triggerRelease([91.429/2, 160/2,280/2,490/2, 857.5/2, 1500.63/2, 2626.09/2, 4595.66/2], now + 5.0);
      }}>scalae septem in quattuor, octavii temporio, diapason divisio</button>
      <button onClick={() => {
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        const now = Tone.now()
        synth.triggerAttack(91.429/2, now);
        synth.triggerAttack(160/2, now + 0.5);
        synth.triggerAttack(280/2, now + 1);
        synth.triggerAttack(490/2, now + 1.5);
        synth.triggerAttack(857.5/2, now + 2.0);
        synth.triggerAttack(1500.63/2, now + 2.5);
        synth.triggerAttack(2626.09/2, now + 3.0);
        synth.triggerAttack(4595.66/2, now + 3.5);
        
        synth.triggerRelease([91.429/2, 160/2,280/2,490/2, 857.5/2, 1500.63/2, 2626.09/2, 4595.66/2], now + 5.0);
      }}>scalae septem in quattuor, dioctavii temporio, diapason divisio</button>

      <h3>7/3</h3>
    </div>
  )
}
