import React, { useState } from 'react'

const CreateProfile = () => {

    return (
        <div className='pt-24 pl-10 pr-10 w-full h-full'>
            <h1 className='text-3xl text-blue-900 font-bold mb-4 underline ml-10'>Create Profile</h1>

            <div className='flex flex-row justify-center'>

                <div className='flex flex-col items-center justify-center border-2 border-dashed border-black ml-5 p-5 w-35 h-30 rounded-full'>
                    <div className='text-lg text-blue-900 font-bold mb-4 underline'>Upload Profile Photo</div>
                    <input type='file' className='pl-2 mt-5'/>
                </div>


                <div className='w-1/3 ml-5'>
                    <input
                        className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4 "
                        type="text"
                        id="name"
                        placeholder="Name"

                    />

                    <input
                        className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
                        type="email"
                        id="email"
                        placeholder="email"

                    />

                    <input
                        className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
                        type="number"
                        id="phone"
                        placeholder="Phone Number"

                    />

                    <input
                        className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
                        type="password"
                        id="password"
                        placeholder="Password"

                    />

                    <input
                        className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
                        type="password"
                        id="password"
                        placeholder="Confirm Password"

                    />

                    <input
                        className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
                        type="number"
                        id="age"
                        placeholder="Age"

                    />

                    <input
                        className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
                        type="text"
                        id="location"
                        placeholder="Enter City"

                    />


                </div>

            </div>

        </div>
    )
}

export default CreateProfile