import { useState, useEffect, useCallback  } from 'react';
import { Link, Outlet  } from "react-router-dom";
import axios from 'axios';
import Keppleri from './Keppleri'
export default function LinguaeLatinae() {
	return (<>
    <div>
      <h3>De electrorum instrumenta super Linguae Latinae </h3>
    </div>
    <p>De Linguae Latinae Electronicus</p>
      <Link to="Keppleri">Johannis Keppleri</Link><br/>
      <Link to="Joanne-Poleno">Ionnis Poleni S.D (Giovanni Poleni)</Link><br/>
      <Link to="Gauss">Auctore D. Carolo Friderico Gauss</Link><br/>

    <Outlet />
    
    </>)

}
