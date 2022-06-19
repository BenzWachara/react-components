import React from "react";
import { Link } from 'react-router-dom'
import {BiMenuAltRight} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'
import {useState,useEffect} from 'react'

function Mobilenav(){

    const [openmenu, setOpenmenu] = useState(false);

    const menuOpen = <BiMenuAltRight className="icon-bi-menu" size="50px" 
    onClick={()=>setOpenmenu(!openmenu)}/>
    
    const closeIcon = <CgClose className="icon-bi-menu" size="50px" 
    onClick={()=>setOpenmenu(!openmenu)}/>

    useEffect(()=>{
        //close dropdown when on click event 
        const closeDropdown =(e)=>{
            if(e.path[0].tagName !== 'svg'){
                setOpenmenu(false);
            }
        };
        
        //close dropdown when on click other body 
        document.body.addEventListener('click',closeDropdown);
        return ()=> document.body.removeEventListener('click',closeDropdown);
    },[]);

    return(
        <div className="navbar-item-mobile" >
            
            {openmenu ? closeIcon : menuOpen}
            {openmenu && 
            <nav className="dropdown-menu-nav" onClick={()=> setOpenmenu(false)}>
            <ul className="ul-menu">
                <li className="li-menu">
                    <Link to="/popupimage">Pokemon API</Link>
                </li>
                <li className="li-menu">
                    <Link to="/slide">Slide</Link>
                </li>
                <li className="li-menu">
                    <Link to="/clubcard">Animation Card</Link>
                </li>
                <li className="li-menu">
                    <Link to="/webdesign">Web Design</Link>
                </li>
            </ul>
        </nav>}
    </div>
    );
}

export default Mobilenav;