import React, { useContext } from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import Logo from "./Assets/Logo.svg";
import { ContextAbdulazizbek } from '../Context/Context';
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsFillBasketFill } from "react-icons/bs";
function Navbar() {
    const {handleCart,handleLike} = useContext(ContextAbdulazizbek);
  return (
    <div className='NavbarDiv1'>
        <nav>
            <NavLink><img src={Logo} className='LogoNavbar' alt="" /></NavLink>
            <ul className='UL1'>
                <li className='LI1'>
                    <NavLink className="NavLinkNavbar" to={"/"}>Home</NavLink>
                </li>
                <li className='LI1'>
                    <NavLink className="NavLinkNavbar" to={"/Shop"}>Shop</NavLink>
                </li>
                <li className='LI1'>
                    <NavLink className="NavLinkNavbar" to={"/About"}>About</NavLink>
                </li>
                <li className='LI1'>
                    <NavLink className="NavLinkNavbar" to={"/Contact"}>Contact</NavLink>
                </li>
            </ul>
        </nav>
        <div>
        <AiOutlineUser className='UserIconNavbar1'/>
        <AiOutlineSearch className='UserIconNavbar2'/>
        <FcLike className='UserIconNavbar3'/>
        <span>{handleLike.length === 0 ? "" : handleLike.length}</span>
        <BsFillBasketFill className='UserIconNavbar4'/>
        </div>
    </div>
  )
}
export default Navbar;