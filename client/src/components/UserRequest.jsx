import React from 'react'
import { NavLink } from "react-router-dom";
import Image from '../assets/yash.jpg'


const UserRequest = (props) => {
    return (
        // contains two colums one for data and other for accept/reject button
        <div className='mt-4 p-4 shadow flex flex-row'>
            <img src={Image} width={25} height={25} className='border rounded'/>
            <NavLink to='/post' className='text-lg font-bold text-blue-800 ml-5 no-underline hover:underline'>{props.title}</NavLink>
        </div>
        
    )
}

export default UserRequest;