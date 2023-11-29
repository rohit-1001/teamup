import React, {useState, useEffect} from 'react'
import MyRequest from '../components/MyRequest'
import axios, {all} from 'axios'
import { toast } from "react-toastify";

export default function MyRequestsPage (props) {
    const [posts, setPosts] = useState([]);
    
    const allposts = async () => {
        try {
            const res = await axios.get("/myrequests");
            console.log(res.data.posts)
            setPosts(res.data.posts);
            console.log(posts)
        } catch (error) {
            console.log(error);
            if (error.response) {
                toast.error(error.response.data.error);
              } else {
                toast.error("Some error occured");
              }
        }
    }
    // useEffect(() => {
    //     allposts();
    // }, [])



    return (
        // main div

        <div>
            <div className='relative items-start flex-col ml-10 mr-10'>
                <h1 className='pt-24 text-3xl text-blue-900 font-extrabold mb-4 underline'>My Requests!</h1>
                {/* <div style={{
                   display: "grid",
                   gridTemplateColumns: "repeat(4, 1fr)",
                   gridGap: "50px"
                }}> */}
            {
                posts.map((post) => {
                    return(

                        <MyRequest
                            post={{post, role:props.details.role}}
                        />
                        )
                    })
            }
                    {/* </div> */}
            </div>
        </div>
    )
}
