import { useState, useEffect, useCallback } from 'react'
import { Link, Outlet  } from "react-router-dom";

export default function Cartographica() {
  return (
    <>
      <h1>Cartographica</h1>
      <Link to="Reis">Piri Reis</Link><br/>
      <Link to="Mercator">Gerardi Mercatoris</Link><br/>
      <Link to="Waldseemuller">Martinus Ilacomilus</Link><br/>
      <Link to="Ortelius">Abrahami Orteli</Link><br/>
      <Link to="Mauro">Frau Mauro</Link><br/>
      <Link to="Urbano">Monte Urbano</Link><br/>
      <Link to="Ricci">Matteo Ricci</Link><br/>
      <Link to="Vaugondy">Diderot & Vaugondy</Link><br/>
      <Outlet />
    </>)
}
