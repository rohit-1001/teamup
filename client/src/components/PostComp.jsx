import React from 'react'
import { NavLink } from "react-router-dom";
import JoinButton from './JoinButton'
import Image from '../assets/event1.jpg'


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
                <JoinButton />
            </div>

        </div>
    )
}

export default Post;





















































































// import React, {useState} from 'react'
// import { NavLink } from "react-router-dom";
// import JoinButton from './JoinButton'
// import Image from '../assets/event1.jpg'
// import { Modal } from 'react-bootstrap';
// import Post1 from '../Pages/Post';


// const Post = (props) => {
//     const [openModal, setOpenModal] = useState(false);
//     const handleOpenModal = async () => {
//         setOpenModal(true);
//       };
    
//       const handleCloseModal = () => {
//         setOpenModal(false);
//       };
//     return (
//         // contains two colums one for data and other for accept/reject button
//         <div className='flex flex-row justify-between p-3 pl-10 pr-10 w-full shadow
//         rounded-lg mb-3 text-l font-semibold '>
//             {/* data div */}
//             <div>

//                 <div className='text-2xl font-bold text-blue-800' onClick={handleOpenModal()}>
//                     Title {props.details.posts[0].post.title}
//                 </div>
//                 <div className='text-blue-600 text-lg'>
//                     Date {props.details.posts[0].post.date}
//                 </div>
//                 <div className='text-blue-600 text-lg'>
//                     Team Size : {props.details.posts[0].post.teamsize}
//                 </div>
//             </div>
//             {/* accept/reject div */}
//             <div className='flex align-middle items-center'>
//                 <JoinButton />
//             </div>
//             <Modal open={openModal} onClose={handleCloseModal}>
//                 <Post1 details={props.details.posts[0]} />
//             </Modal>

//         </div>
//     )
// }

// export default Post;

