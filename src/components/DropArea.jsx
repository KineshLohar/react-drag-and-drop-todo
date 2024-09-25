import React, { useState } from 'react'

const DropArea = ({onDrop}) => {
    const [dragging, setDragging] = useState(false);
    return (
        <section
            onDragEnter={() => setDragging(true)}
            onDragLeave={() => setDragging(false)}
            onDrop={() => {
                onDrop();
                setDragging(false);
            }}
            onDragOver={(e) => e.preventDefault()}
            className={` ${dragging ? 'w-full border-[1px] border-dotted rounded-md border-red-500 mx-auto p-4 min-h-[100px]' : ' opacity-0'}`}
        >
            DropArea
        </section>
    )
}

export default DropArea