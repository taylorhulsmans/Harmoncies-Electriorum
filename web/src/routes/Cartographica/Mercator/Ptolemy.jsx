
import { useState, useEffect, useCallback } from 'react'
import { Link, Outlet  } from "react-router-dom";

export default function Ptolemy() {
  return (
    <>
      <h1></h1>
      <Link to="Ptolemei"> Ptolemaei Alexandrini Geographiae Libri Octo</Link><br/>
      <Link to="AtlasMinor">Atlas Minor</Link><br/>
    </>)
}
