
import { useState, useEffect, useCallback } from 'react'
import { Link, Outlet  } from "react-router-dom";

export default function Waldseemuller() {
  return (
    <>
      <h1>Cartographica</h1>
      <Link to="Reis">Piri Reis</Link>
      <Link to="Mercator">Gerardus Mercator</Link>
      <Link to="Waldseemuller">Martinus Ilacomilus</Link>
      <Link to="Ortelius">Abrahami Orteli</Link>
      <Link to="Mauro">Frau Mauro</Link>
      <Link to="Urbano">Monte Urbano</Link>
      <Link to="Ricci">Matteo Ricci</Link>
      <Link to="Vaugondy">Diderot & Vaugondy</Link>
    </>)
}
