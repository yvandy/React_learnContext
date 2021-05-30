import React from 'react';
import {fname} from '../main_file';

const CompC = () =>{
    return(
        <>
        <fname.Consumer>
            {(firstName)=>{
                return <h1> My name is {firstName} </h1>
            }}  
            
        </fname.Consumer>
        </>
    )
}

export default CompC;