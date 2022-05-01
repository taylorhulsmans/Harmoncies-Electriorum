import { useState, useEffect, useCallback } from 'react'
import { Link, Outlet  } from "react-router-dom";

export default function Geometriae() {
  const [ chordum, chordio ] = useState(false)

  return (
    <div>
      <h1>Geometriae</h1>
      <Link to="Vorticibus-Rodin">Vorticibus Rodin</Link><br/>
      <Link to="Ioannis-Dee">Ionnis Dee</Link><br/>
      <Link to="Francisco-Flussate-Candalla">Francisco Flussate Candalla</Link><br/>
      <br/>
      <Outlet />

      </div>
          )
          }
