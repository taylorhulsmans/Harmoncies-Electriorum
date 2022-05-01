import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components'
const Nav = styled.nav`
  border-bottom: solid 1px;
  padding-bottom: 1rem;
`
export default function App() {
  return (
    <div>

      <p>Tayloris Hulsmanis</p>
      <h1>Harmonices Electriorum</h1>
      <h2>Expositio harmoniae geometricae</h2>
      <Nav>Contenta</Nav>
      <h5>Sectio Nulla. <span>English Description</span></h5>
      <h4>Sectio Prima. Pyramidis Incipio, Inspecta keppleribus proportiones incidi, expressio theoriea totalibus</h4>
      <h4>Sectio Secuda. Enchridij Musiciae, verum in auditu, chordae commensuratae quae septimum et undecimus divisio.   </h4>
      <h4>Sectio Tertia.  Linguae Latinae, lectio liberii trivium et quadrivium antiquitiari, electriorum applicatur. </h4>
      <h4>Sectio Quarta. Geometrica Antiquitariorum, electriorum applicatio. </h4>
      <Nav>
        <Link to="/about">about</Link> |{" "}
        <Link to="/Pyramidis">Pyramidis</Link> |{" "}
        <Link to="/Musicae">Musicae</Link> |{" "}
        <Link to="/Linguae-Latinae">Linguae Latinae</Link> |{" "}
        <Link to="/Geometriae">Geometriae</Link> |{" "}
      </Nav>
      <Outlet />
    </div>
  );
}
