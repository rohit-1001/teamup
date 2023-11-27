import React, {useEffect, useState} from 'react'
import { NavLink } from "react-router-dom";
import Image from '../assets/yash.jpg'
import Image1 from '../assets/rohit.jpg'
import axios from 'axios'

const UserRequest = (props) => {

    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
            const email = props.details.email;
            const res = await axios.post('/getuser',{email}, {
                withCredentials: true,
            });
            console.log("res.data.user : ", res.data)
            setUser(res.data);
            console.log("user : ", user)
        };
        getUser();
    }, [])
    return (
        <>
        {props.details.id===1 ? <div className='mt-4 p-4 shadow flex flex-row'>
            <img src={Image} width={25} height={25} className='border rounded'/>
            <NavLink to='/post' className='text-lg font-bold text-blue-800 ml-5 no-underline hover:underline'>{user.name}</NavLink>
        </div> : ""},
        {props.details.id===2 ? <div className='mt-4 p-4 shadow flex flex-row'>
            <img src={Image1} width={25} height={25} className='border rounded'/>
            <NavLink to='/post' className='text-lg font-bold text-blue-800 ml-5 no-underline hover:underline'>{user.name}</NavLink>
        </div> : ""}
        </>
    )
}

export default UserRequest;