import React from "react";
import Post from "../components/PostComp";

export default function AllPosts() {
    return (
        <div>
            {/* <Header /> */}
            <div className='relative items-start flex-col ml-10 mr-10'>
                <h1 className='pt-24 text-3xl text-blue-900 font-extrabold mb-4 underline'>Upcoming Events!</h1>

                <Post
                    title={"Barclays Data-Stellar Hackathon"}
                    date={"3 Dec 23"}
                    size={3}
                />

                <Post
                    title={"Machine Learning Project"}
                    date={"3 Dec 23"}
                    size={3}
                />

                <Post
                    title={"Blockchain Hackathon"}
                    date={"3 Dec 23"}
                    size={3}
                />

                <Post
                    title={"Cricket Match"}
                    date={"3 Dec 23"}
                    size={5}
                />

                <Post
                    title={"Data Science Hackathon"}
                    date={"3 Dec 23"}
                    size={3}
                />

                <Post
                    title={"Data Science Hackathon"}
                    date={"3 Dec 23"}
                    size={3}
                />

                <Post
                    title={"Data Science Hackathon"}
                    date={"3 Dec 23"}
                    size={3}
                />

            </div>

        </div>
    )
}