import React from 'react'

function NavBar({open,setOpen}) {
    return (
       <nav className="flex justify-between  items-center h-16 bg-gray-700 text-white relative shadow-sm shadow-lg shadow-md font-mono" role="navigation">
           <a href="/" className="pl-8">EGG</a>
           <div className="px-4 cursor-pointer md:hidden" onClick={()=>{ setOpen(!open)} }>
                <svg   className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
           </div>
           <div className="pr-8 md:block hidden">
               <a href="/" className="p-4">Home</a>
               <a href="/menu" className="p-4">Menu</a>
               <a href="/about" className="p-4">About</a>
               <a href="/contact" className="p-4">Contact</a>
           </div>
       </nav>
       
    )
}

export default NavBar
