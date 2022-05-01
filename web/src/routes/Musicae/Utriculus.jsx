import * as Tone from 'tone'
import { useState, useEffect } from 'react'
import { createChord, useFractal, SEVENFOUR } from '../../components/Fractalis'
import { Chordio, Scalio } from '../../components/Musicae'

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

export default function Utriculus() {
  const [septimum, septio] = useState(false)
  //const [chord, setChord] = useState(fractal(createChord(SEVENFOUR)))
  const tones = [2800,3150, 3500, 11200/3, 3780,4200,14000/3,4900,44800/9, 5040, 5600]
  console.log(tones)
  console.log(tones, 'testTones')


  return (
    <div>
      <h3>Utriculus </h3>
      <h4>In Utriculibus modulatur cum septimae limitensis ad decium clavis.  2800</h4>
      <p>Hoc Utriculus proportionibus Diapason deciave</p>
      <Chordio frequensis={[2800, 2800]} />1:1<br />
      <Chordio frequensis={[3150, 2800]} />9:8<br />
      <Chordio frequensis={[3500, 2800]} />5:4<br />
      <Chordio frequensis={[11200/3, 2800]} />4:3<br />
      <Chordio frequensis={[3780, 2800]} />27:20<br />
      <Chordio frequensis={[4200, 2800]} />3:2<br />
      <Chordio frequensis={[14000/3, 2800]} />5:3<br />
      <Chordio frequensis={[4900, 2800]} />7:4<br />
      <Chordio frequensis={[44800/9, 2800]} />16:9<br />
      <Chordio frequensis={[5040, 2800]} />9:5<br />
      <Chordio frequensis={[5600, 2800]} />2:1<br />
      <Scalio frequensis={tones} temporis={0.5} />
      <p>Utriculus Clavaibus Diapason deciave</p>
      <Chordio frequensis={[2800]} />2800<br />
      <Chordio frequensis={[3150]} />3150<br />
      <Chordio frequensis={[3500]} />3500<br />
      <Chordio frequensis={[11200/3]} />11200/3<br />
      <Chordio frequensis={[3780]} />3780<br />
      <Chordio frequensis={[4200]} />4200<br />
      <Chordio frequensis={[14000/3]} />14000/3<br />
      <Chordio frequensis={[4900]} />4900<br />
      <Chordio frequensis={[44800/9]} />44800/9<br />
      <Chordio frequensis={[5040]} />5040<br />
      <Chordio frequensis={[5600]} />5600<br />
      <Scalio frequensis={tones} temporis={0.5} />


    </div>
  )
}
