import React from 'react';
import { Link } from 'react-router-dom';
import './Frnd.css'

const Frnd = (props) => {
const{id, name, email, phone, company}=props.frnds
    console.log(props.frnds.name)
    const url=`/frnd/${id}`
    return (
        <div className='frnds'>
            <h2>Name:{name}</h2>
            <h2>Phone:{phone}</h2>
            <h2>email:{email}</h2>
            <h2>cpmpnay name:{company.name}</h2>
         <Link to={url}> vesit me</Link>
        
        </div>
    );
};

export default Frnd;