import React, {useState} from 'react';
import jsonData from '../assets/data.json';
import Card from '../components/Card'

const CardList = () => {
   // console.log(jsonData);
    return (
        <div>
            {
                jsonData.data.map((persona, index)=> {
                    return (
                        <Card key={index} data={persona} />
                    );
                    //remplazar h1 por componente card
                })
            }
        </div>
    )
}

export default CardList;
