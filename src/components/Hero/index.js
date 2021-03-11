import React from 'react';
import Logo from '../Logo';
import Card from '../UI/Card';
import './styles.css';

const Hero=(props)=>{
    return(
        <div>
            <Card>
                <Logo/>
            </Card>
        </div>
    );
}

export default Hero;
