import React from 'react'
import { NavLink } from "react-router-dom";
import JoinButton from './JoinButton'

const Post = (props) => {
    return (
        // contains two colums one for data and other for accept/reject button
        <div className='flex flex-row justify-between p-3 pl-10 pr-10 w-full shadow
        rounded-lg mb-3 text-l font-semibold '>
            {/* data div */}
            <div>
                <NavLink to='/post' className='text-2xl font-bold text-blue-800'>{props.title}</NavLink>
                <div className='text-blue-600 text-lg'>
                Date {props.date} 
                </div>
                <div className='text-blue-600 text-lg'>
                Team Size : {props.size}
                </div>
            </div>
            {/* accept/reject div */}
            <div className='flex align-middle items-center'>
                <JoinButton/>
            </div>

        </div>
    )
}

export default Post;