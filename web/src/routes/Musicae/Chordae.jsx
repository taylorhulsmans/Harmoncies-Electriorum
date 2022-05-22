import { useState, useEffect, useCallback } from 'react'
import { Link, Outlet  } from "react-router-dom";
import * as Tone from 'tone'

export default function Chordae() {
  const [ chordum, chordio ] = useState(false)

  return (
    <div>
      <h1>Chordae</h1>
      <p>Chordus Charismae sunt hic noxus nottisimae, ad modus, septimissa harmonicum limitensis, regio harmoniae ptolemicarum,  rex et regina Cellae harmonicarum descriptio, Wildbergericarum expositio geometrica harmonica confabricor & ad regius cubitus sit inter ordus harmonicarum musicae.
        Pyramdion ratio, 
        Ratio Pyramidion. numeris primus exemplare kepleri harmonicum conjugatorio explicitor, 280 divisi factoro 2^3 5 7 & ad ipsius 440 2^3 5 11</p>


      <h2>Chordio</h2>
      <button onClick={async () => {
        await Tone.start()
        chordio(!chordum)
        }}>{chordum ? "a causae renovare" : 'Habilito Harmonicarum' }
      </button><br/>
      <Link to="Septimae">Septimae</Link><br/>
      <Link to="Undecimae">Undecimae</Link><br/>
      <Link to="Ptolemicarum">Ptolemicarum</Link><br/>
      <Link to="Cellae">Cellae</Link><br/>
      <Link to="Wildbergicarum">Wildbergicarum</Link><br/>
      <Link to="Cubitus">regius cubitus</Link><br/>
      <Link to="Utriculus">Utriculus</Link><br/>
      <br/>
      <Outlet />

      </div>
          )
          }
