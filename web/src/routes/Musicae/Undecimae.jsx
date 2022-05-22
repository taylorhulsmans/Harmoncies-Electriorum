import * as Tone from 'tone'
import { useState, useEffect } from 'react'
import { Chordio, Scalio } from '../../components/Tone/Musicae'

export default function Undecimus() {
  const [unity, setUnity] = useState(2*3*5*7*11) //2310
  const note = (numerator, denominator) => {
    return [((numerator * unity) / denominator), unity]

  }

  

  return (
    <div>
      <h3>Undecimae </h3>
      <h4>1155 (1 3 5 7 11)</h4>
      <p></p>
      <Chordio frequensis={note(1,1)} />1:1<br />
      <Chordio frequensis={note(12,11)} />12:11<br />
      <Chordio frequensis={note(11,10)} />11:10<br />
      <Chordio frequensis={note(10,9)} />10:9<br />
      <Chordio frequensis={note(9,8)} />9:8<br />
      <Chordio frequensis={note(8,7)} />8:7<br />
      <Chordio frequensis={note(7,6)} />7:6<br />
      <Chordio frequensis={note(6,5)} />6:5<br />
      <Chordio frequensis={note(11,9)} />11:9<br />
      <Chordio frequensis={note(5,4)} />5:4<br />
      <Chordio frequensis={note(14,11)} />14:11<br />
      <Chordio frequensis={note(9,7)} />9:7<br />
      <Chordio frequensis={note(4,3)} />4:3<br />
      <Chordio frequensis={note(11,8)} />11:8<br />
      <Chordio frequensis={note(7,5)} />7:5<br />
      <Chordio frequensis={note(10,7)} />10:7<br />
      <Chordio frequensis={note(16,11)} />16:11<br />
      <Chordio frequensis={note(3,2)} />3:2<br />
      <Chordio frequensis={note(14,9)} />14:9<br />
      <Chordio frequensis={note(11,7)} />11:7<br />
      <Chordio frequensis={note(8,5)} />8:5<br />
      <Chordio frequensis={note(18,11)} />18:11<br />
      <Chordio frequensis={note(5,3)} />5:3<br />
      <Chordio frequensis={note(12,7)} />12:7<br />
      <Chordio frequensis={note(7,4)} />7:4<br />
      <Chordio frequensis={note(16,9)} />16:9<br />
      <Chordio frequensis={note(9,5)} />9:5<br />
      <Chordio frequensis={note(20,11)} />20:11<br />
      <Chordio frequensis={note(11,6)} />11:6<br />



    </div>
  )
}
