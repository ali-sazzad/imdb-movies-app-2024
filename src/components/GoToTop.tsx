'use client';

import React, {useState} from 'react'; 
import {RiArrowUpCircleFill} from '@remixicon/react'; 
import { Button } from './Style';
  
const GoToTop = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <Button> 
     <RiArrowUpCircleFill 
     color='red'
     size={90}
     onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}} /> 
    </Button> 
  ); 
} 
  
export default GoToTop; 