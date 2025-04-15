import React from 'react';
import Link from '../Link';

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
 






const DaisyFooter = () => {
    return (
        <footer>
           <ul className='flex flex-row gap-5 justify-center align-middle  py-10 text-gray-500'>
             {
                navLinks.map(footerData=> <Link footerData={footerData}/>)
             }
           </ul>
            
        </footer>
    );
};

export default DaisyFooter;