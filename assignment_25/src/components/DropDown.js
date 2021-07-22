import React from 'react'

function DropDown() {
    return (
        <div  className="grid grid-rows-4 text-center items-center bg-yellow-500">
               <a href="/" className="p-4">Home</a>
               <a href="/menu" className="p-4">Menu</a>
               <a href="/about" className="p-4">About</a>
               <a href="/contact" className="p-4">Contact</a>
            
        </div>
    )
}

export default DropDown
