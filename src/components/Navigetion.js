import React from "react";
import { Link } from 'react-router-dom'

function Navigetion(props){
    return(
            <li>
                <Link to={props.tolink}>{props.item}</Link>
            </li>
            
    );
}

export default Navigetion;