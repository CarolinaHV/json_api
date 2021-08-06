import React, {useState} from 'react';
import jsonData from '../assets/data.json'

const prueba = () => {
    console.log(jsonData);

    return (
        <div>
            {
                jsonData.data.map((persona, index)=> {
                    return (<h1 key={index}> { `${index} - ${persona.name}`}</h1>);
                    //remplazar h1 por componente card
                })
            }
            hello
        </div>
    )
}

export default prueba;
