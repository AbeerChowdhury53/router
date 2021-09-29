import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Frienddetails = () => {
    const {friendId} =useParams()
    console.log(friendId)
    const url= `https://jsonplaceholder.typicode.com/users/${friendId}`;
const [frnddetail , setFrienddetail]=useState({})
    useEffect(()=>{
       fetch(url)
       .then(res => res.json())
       .then(data => setFrienddetail(data))
    },[]);
    const {name,phone }=frnddetail
    return (

     
        <div>
            <h2>Name:{name}</h2>
            <h2>Phone:{phone}</h2>
        </div>
    );
};

export default Frienddetails;