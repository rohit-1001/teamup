import React from 'react'
import { NavLink } from "react-router-dom";
import JoinButton from './JoinButton'

const Post = (props) => {
    return (
        // contains two colums one for data and other for accept/reject button
        <div className='flex flex-row justify-between p-3 pl-10 pr-10 bg-blue-200 w-full rounded-lg mb-5'>
            {/* data div */}
            <div>
                <NavLink to='/post' className='hover:underline font-light'><h1 className='text-xl font-semibold'>{props.title}</h1></NavLink>
                <div >
                Date {props.date} 
                </div>
                <div>
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