import React from 'react';

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
      


    return (
        

            // custom nav

       <nav>
 
            <ul className='flex flex-row gap-5 text-center items-center  mx-auto md:container justify-around py-3 '>
                {
                    navLinks.map((navData)=>
                    <li><a href={navData.path}>{navData.name}</a></li>
                )
                }

            </ul>
       </nav>
  
    );
};

export default Daisynav;