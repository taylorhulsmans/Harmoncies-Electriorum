
import { useState, useEffect, useCallback } from 'react'
import { Link, Outlet  } from "react-router-dom";

export default function Mercator() {
  return (
    <>
      <h1>Gerardum Mercatorem</h1>
      <Link to="Ptolemei">Ptolemi</Link><br/>
      <Link to="AtlasMinor">Atlas Minor</Link><br/>
    </>)
}
