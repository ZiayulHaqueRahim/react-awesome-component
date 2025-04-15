import React, { useState } from 'react';
import { Logs, X } from 'lucide-react';


const Daisynav = () => {
    const navLinks = [
         {
          id: 1,
          name: "Home",
          path: "/"
        },
         {
          id: 2,
          name: "About Us",
          path: "/about"
        },
         {
          id: 3,
          name: "Services",
          path: "/services"
        },
        {
          id: 4,
          name: "Blog",
          path: "/blog"
        },
         {
          id: 5,
          name: "Contact",
          path: "/contact"
        }
    ];
      
    // toggle button for smaller device in icon
    const [open,setOpen]=useState(false);
    // dynamic link & reusable
    const links = navLinks.map((navData)=>
        <li><a href={navData.path}>{navData.name}</a></li>)
    return (
        

            // custom nav

       <nav>
 
            <ul className='flex flex-row gap-5 text-center items-center   mx-auto md:container justify-around py-3 '>
               <span className='flex flex-row  gap-3' onClick={()=>{setOpen(!open)}} >
                     {/* // icon from lucide react   toggle*/}
                    {open ?  <Logs className='md:hidden'/> : <X className='md:hidden' /> } 
                    <ul className='md:hidden absolute bg-gray-50 top-10'>
                    </ul>
                    <h3>My Navbar</h3>
               </span>

                <ul className='md:flex md:flex-row gap-5 text-center items-center   mx-auto hidden md:block justify-around py-3 '>
                        {
                        (links)  
                        }
                </ul>

                <h3>Sign in</h3>

            </ul>
       </nav>
  
    );
};

export default Daisynav;