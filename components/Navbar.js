import React, {useEffect, useState}  from "react";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

function Navbar() {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transarent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >=90){
                setColor('white')
                setTextColor('black')
            }else{
                setColor('transparent')
                setTextColor('white')
            }
        }

        window.addEventListener('scroll', changeColor)
    }, [])

  return (
    <div style={{background : `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240x] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" >
          <h1 style={{color : `${textColor}`}} className="font-bold text-4xl">CAR HUB</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-3">
            <Link href="/">Home</Link>
          </li>
          <li className="p-3">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-3">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-3">
            <Link href="/contact">Contact</Link>
          </li >
        </ul>

        {/* MOBILE BUTTON */}
        <div onClick={handleNav} className="block sm:hidden z-10">
           { nav ? <AiOutlineClose size={20} style={{color : `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color : `${textColor}`}}  />}

        </div >
        {/* MOBILE MENU */}
        <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
        <ul>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/work">Work</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
