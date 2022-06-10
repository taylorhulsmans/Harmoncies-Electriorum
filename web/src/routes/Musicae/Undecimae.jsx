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
      <h4>2310 (1 2 3 5 7 11)</h4>
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
      <br/>
      <h3>Tonalities (using 2310 hz base tone )</h3>
      <Chordio frequensis={[2640, 2970, 3300, 3630, 3960, unity]}/><br/>
      <Chordio frequensis={[3080, 3465, 3850, 4235, unity, 2695]}/><br/>
      <Chordio frequensis={[3360, 3780, 4200, unity, 2520, 2940]}/><br/>
      <Chordio frequensis={[3696, 4158, unity, 2541, 2772, 3234]}/><br/>
      <Chordio frequensis={[4106.6667, unity, 2566.6667, 2823.3334, 3080, 3593.3334]}/><br/>
      <Chordio frequensis={[unity, 2598.75, 2887.5, 3176.25, 3465, 4042.5]}/><br/>
      <br />
      <Chordio frequensis={[2640, 3080, 3360, 3696, 4106.6667, unity]}/><br/>
      <Chordio frequensis={[2970, 3465, 3780, 4158, unity, 2598.75]}/><br/>
      <Chordio frequensis={[3300, 3850, 4200, unity, 2566.6667, 2887.5]}/><br/>
      <Chordio frequensis={[3630, 4235, unity, 2541, 2823.3334, 3176.25]}/><br/>
      <Chordio frequensis={[3960, unity, 2520, 2772, 3080, 3465]}/><br/>
      <Chordio frequensis={[unity, 2695, 2940, 3234, 3593.3334, 4042.5]}/><br/>


    </div>
  )
}
