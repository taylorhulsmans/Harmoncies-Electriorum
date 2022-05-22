import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import About from './routes/About'

import Pyramidis from './routes/Pyramidis/Pyramidis'

import Musicae from './routes/Musicae/Musicae'
import Chordae from './routes/Musicae/Chordae'
import Septimae from './routes/Musicae/Septimae'
import Cellae from './routes/Musicae/Cellae'
import Wildbergicarum from './routes/Musicae/Wildbergicarum'
import Cubitus from './routes/Musicae/Cubitus'
import Ptolemicarum from './routes/Musicae/Ptolemicarum'
import Utriculus from './routes/Musicae/Utriculus'
import Undecimae from './routes/Musicae/Undecimae'
import LinguaeLatinae from './routes/LinguaeLatinae/LinguaeLatinae'
import Keppleri from './routes/LinguaeLatinae/Keppleri'
import Gauss from './routes/LinguaeLatinae/Gauss'
import JoannePoleno from './routes/LinguaeLatinae/JoannePoleno'

import Geometriae from './routes/Geometriae/Geometriae'
import IoannisDee from './routes/Geometriae/IoannisDee'
import FranciscoFlussateCandalla from './routes/Geometriae/FranciscoFlussateCandalla'
import VorticibusRodin from './routes/Geometriae/VorticibusRodin'

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path ="/about" element={<About />} />
        <Route path ="/Pyramidis" element={<Pyramidis />} />
        <Route path ="/Musicae" element={<Musicae />}>
          <Route path="Chordae" element={<Chordae />}>
            <Route path="Septimae" element={<Septimae />} />
            <Route path="Undecimae" element={<Undecimae />} />
            <Route path="Cubitus" element={<Cubitus />} />
            <Route path="Wildbergicarum" element={<Wildbergicarum />} />
            <Route path="Cellae" element={<Cellae />} />
            <Route path="Ptolemicarum" element={<Ptolemicarum />} />
            <Route path="Utriculus" element={<Utriculus />} />
          </Route>
        </Route>
        <Route path ="/Linguae-Latinae" element={<LinguaeLatinae />}>
          <Route path="Keppleri" element={<Keppleri />} />
          <Route path="Gauss" element={<Gauss />} />
          <Route path="Joanne-Poleno" element={<JoannePoleno />} />
        </Route>
        <Route path ="/Geometriae" element={<Geometriae />}>
          <Route path="Ioannis-Dee" element={<IoannisDee />} />
          <Route path="Francisco-Flussate-Candalla" element={<FranciscoFlussateCandalla />} />
          <Route path="Vorticibus-Rodin" element={<VorticibusRodin />} />

        </Route>

      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
