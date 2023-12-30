'use client'

import {useState, useEffect, useRef} from 'react';
import Typed from 'typed.js';


export default function HoldIt() {
    const [url, setUrl] = useState('');// define the state
    useEffect(() => {
        // set the state
        setUrl(document.location.hostname);
    }); // only run it once!
    
          
          
    return (
        url
    )
}