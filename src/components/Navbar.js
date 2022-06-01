import React, { useState } from "react";

const Navbar = () => {
  let links = [
    {name:'Home',link:'/'},
    {name:'Seo Services',link:'/'},
    {name:'Paid Marketing',link:'/'},
    {name:'Content Marketing',link:'/'},
    {name:'Website Design & Developement',link:'/'}
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed">
      <div className="md:flex items-center justify-center bg-white py-4 md:px-10 px-7">
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor:pointer md:hidden ">
        <ion-icon name={open?'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open?'top-20':'top-[-500]'} md:opacity-100 opacity-0`}>
          {
            links.map(link=>(
            <li className="md:ml-8 text-xl md:my-0 my-7" key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>))
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
