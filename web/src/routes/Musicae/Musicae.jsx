import { Link, Outlet  } from "react-router-dom";

export default function Musicae() {
  return (
    <div>
      <h1>Musicae</h1>
      <Link to="Chordae">Chordae</Link>
      <Outlet />

    </div>
  )
}
