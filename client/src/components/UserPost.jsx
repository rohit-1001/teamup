import React from 'react'
import { NavLink } from "react-router-dom";
import JoinButton from './JoinButton'
import Image from '../assets/event1.jpg'

const UserPost = (props) => {
    return (
        // contains two colums one for data and other for accept/reject button
        <div className='flex flex-row justify-between p-3 pl-10 pr-10 w-full shadow
        rounded-lg mb-3 text-l font-semibold '>
            {/* data div */}
            <div className='flex flex-row'>
                <img src={Image} width={50} height={25} className='border rounded' />

                <NavLink to='/post' className='text-xl font-bold text-blue-800 ml-5 no-underline hover:underline'>{props.title}</NavLink>
            </div>
        </div>
    )
}

export default UserPost;