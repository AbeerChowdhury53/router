import React, { useEffect, useState } from 'react';
import Frnd from './Frnd/Frnd';
import './Friend.css'

const Friend = () => {
const [frnd , setFrnd]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFrnd(data))
    },[])
    return (
        <div>
            <h2>This is my friend Component</h2>
         <div className="friend">
         {
               frnd.map( frnds => <Frnd 
                key={frnds.id}
                frnds={frnds} ></Frnd>)
           }
         </div>
        </div>
    );
};

export default Friend;