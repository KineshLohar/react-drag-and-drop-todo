import React, { useState } from 'react'

const DropArea = () => {
    const [dragging, setDragging] = useState(false);
    return (
        <section 
        onDragEnter={() => setDragging(true)}
        onDragLeave={() => setDragging(false)}
        className={` ${dragging ? 'w-full border-[1px] border-dotted rounded-md border-red-500 mx-auto p-4' : ' opacity-0' }`}>DropArea</section>
    )
}

export default DropArea