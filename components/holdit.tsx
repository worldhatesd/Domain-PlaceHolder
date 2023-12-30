'use client'

import {useState, useEffect, useRef} from 'react';
import Typed from 'typed.js';


export default function HoldIt() {
    const [url, setUrl] = useState('');// define the state
    useEffect(() => {
        // set the state
        setUrl(document.location.hostname);
    }); // only run it once!
    const typer = useRef(null);
    useEffect(() => {
        
        const typed = new Typed(typer.current, {
          strings: [`${url}`],
          startDelay: 300,
          typeSpeed: 75,
          backSpeed: 100,
          backDelay: 100,
          loop: false,
          
          
    
        });
    
        return () => {
          typed.destroy();
        };
        }, [url]); 
          
    return (
        <span ref={typer}></span>
    )
}