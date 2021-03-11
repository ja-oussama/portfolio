
import React from 'react';
import './styles.css' ;

const Logo=(props)=>{
    return(
        <div className='Logo'>
           <img src={require('../../assets/images/Logo.png')} alt=""  width="150" height="150"/> 
        </div>
    );
}

export default Logo;
