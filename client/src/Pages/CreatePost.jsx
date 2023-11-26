import React, { useState } from 'react'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
} from "@nextui-org/react";

const CreatePost = () => {

    const tags =[
        { key: "Hackathon", value: "Hackathon" },
        { key: "Tech", value: "Tech" },
        { key: "Project", value: "Project" },
        { key: "Sports", value: "Sports" },
        { key: "Machine Learning", value: "Machine Learning" },
        { key: "Artificial Intelligence", value: "Artificial Intelligence" },
        { key: "Blockchain", value: "Blockchain" }
      ];
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Domain"]));
    const [selectedDomain, setSelectedDomain] = useState('Domain')


    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        // main div
        <div className='pt-24 pl-10 pr-10 w-full h-full'>
            <h1 className='text-3xl text-blue-900 font-bold mb-4 underline'>Create Post</h1>

            <div className='flex flex-row justify-center'>

                <div className='flex flex-col items-center justify-center border-2 border-dashed border-black h-full w-1/3 ml-5 p-5'>
                    <div className='text-l text-blue-900 font-bold mb-4 underline'>Upload Poster</div>
                    <input type='file' className='pl-2 mt-5' />
                </div>


                <div className='w-1/3 ml-5'>
                    <input
                        className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4 "
                        type="text"
                        id="title"
                        placeholder="Title"

                    />

                    <input
                        className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
                        type="text"
                        id="description"
                        placeholder="Description"

                    />

                    <Dropdown>
                        <DropdownTrigger  className='flex justify-start h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4'>
                            <Button
                                variant="bordered"
                            >
                                {selectedDomain}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Action event example"
                            onAction={(key) => setSelectedDomain(key)}
                            className='z-10 flex justify-start border-black rounded-md items-start'
                        >

                            {
                                tags.map((item)=>{
                                    return(
                                        <DropdownItem key={item.key} className='text-md mb-2 justify-start bg-white border rounded-md w-full border-black'>{item.value}</DropdownItem>
                                    )
                                })
                            }
                        </DropdownMenu>
                    </Dropdown>

                    <input
                        className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
                        type="number"
                        id="size"
                        placeholder="Team Size"

                    />

                    <textarea
                        placeholder='Enter Complete Details'
                        className="rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
                        rows={5}
                        cols={68}
                    />
                </div>

            </div>

        </div>
    )
}

export default CreatePost