import React, { useEffect, useRef, useState } from 'react'
import list from "../json/list.json";
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios'

const Navbar = () => {
    const [navbarData, setNavbarData] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownContent, setDropdownContent] = useState([]);
    // const [isOpen, setIsOpen] = useState(false);
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
      };
      const dropdownRef = useRef();

      useEffect(() => {
        axios.get('http://localhost:3000/')
          .then(response => {
            setNavbarData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    
      // Ürünler menüsüne tıklanınca dropdown içeriğini göster
      const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
        setDropdownContent(list); // list.json dosyasındaki içeriği dropdownContent state'ine aktar
      };

      // Dropdown dışında bir yere tıklayınca menünün kapanması için
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }
    
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);


    
  return (
    <nav className='bg-white py-2 text-black'>
        <div className='container mx-auto h-20 flex items-center justify-between text-[#000000] tracking-wide bg-white rounded-2xl p-3 shadow-2xl shadow-inherit placeholder-opacity-90 flex-shrink-0'>
            <NavLink href="#" to={"/"}>  <h1 className='text-2xl font-black p-2 md:flex hidden'> ERAYSOFT. </h1> </NavLink>
            {/* <nav className='hidden md:flex'>
                <ul className='flex items-center gap-x-8 font-sm text-base pr-2 '>

                    <li className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2'>
                        <NavLink href="#" to='/'>Ana Sayfa</NavLink>
                    </li>

                    <li className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2' >
                        <NavLink href="#" className='flex' to={"/about"}>Hakkımızda  </NavLink>
                    </li>

                    <div className='justify-items-center'>
                        <li className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2'>
                            <NavLink href="#" className='flex' onClick={() => setIsOpen((prev) => !prev)}>Ürünler  </NavLink>
                        </li>

                            
                            {isOpen && <div className='bg-gray-200 absolute top-20 max-w-20 flex flex-col items-start rounded-lg p-4 gap-y-2'>
                
                            {list.map((item,i) => (
                                <div className='hover:bg-blue-200 rounded-lg w-full flex py-2 hover:cursor-pointer duration-75 hover:border-b-2'>
                                <NavLink to={item.to}> {item.name} </NavLink>
                                </div>
                            ))}
                        
                            </div>}
                    </div>

                    <li className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2'>
                        <NavLink href="#" to='/referances'>Referanslarımız</NavLink>
                    </li>

                    <li className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2'>
                        <NavLink href="#" to={"/help"}>Yardım</NavLink>
                    </li>
                </ul>
            </nav> */}

            <nav className='container mx-auto h-20 items-center justify-center text-[#000000] tracking-wide bg-white rounded-2xl p-3 hidden md:flex'>
                <ul className='flex items-center gap-x-8 font-sm text-base pr-2'>
                    {navbarData.map(item => (
                    <li key={item.nav_id} className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2'>
                        <NavLink to={item.nav_link}>
                        {item.nav_name}
                        </NavLink>
                        {/* Ürünler menüsüne tıklandığında handleDropdownClick fonksiyonunu çalıştır */}
                        {item.nav_name === 'Ürünler' && (
                        <span onClick={handleDropdownClick}>▼</span>
                        )}
                    </li>
                    ))}
                </ul>

                {/* Dropdown menüyü göstermek için showDropdown state'i kontrol ediliyor */}
                {showDropdown && (
                    <div className="bg-gray-200 absolute top-20 max-w-20 flex flex-col items-start rounded-lg p-4 gap-y-2" ref={dropdownRef}>
                    <ul>
                        {dropdownContent.map(item => (
                        <li key={item.id} className='hover:bg-blue-200 rounded-lg w-full flex py-2 hover:cursor-pointer duration-75 hover:border-b-2'>
                            <NavLink to={item.to}>{item.name}</NavLink>
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
            </nav>

            {/* MOBİL MENU */}
            <div className='flex justify-between items-center h-24 max-w-[1240px] right-0 fixed px-4 md:hidden'>
                <div onClick={handleNav} className='block md:hidden '>
                    {nav ? <AiOutlineClose size={20} className=''/> : <AiOutlineMenu size={20}  className=''/>}
                </div>
                <ul className={nav ? 'list-disc fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-200 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold m-4'>ERAYSOFT</h1>
                    <NavLink to={"/my-app"}             className="p-4 border-b block ">Ana Sayfa                 </NavLink>
                    <NavLink to={"/about"}       className="p-4 border-b block">Hakkımızda                </NavLink>
                    <NavLink                            className="p-4 border-b block">Ürünler                   </NavLink>
                    <NavLink to={"/panini"}      className="p-4 pl-10 border-b block">Çek Okuyucu               </NavLink>
                    <NavLink to={"/idscsanner"}  className="p-4 pl-10 border-b block">Kimlik & Pasaport Okuyucu </NavLink>
                    <NavLink to={"/referances"}  className="p-4 border-b block">Referanslarımız           </NavLink>
                    <NavLink to={"/help"}        className="p-4 border-b block">Yardım                    </NavLink>
                    <NavLink to={"/iletisim"}    className="p-4 border-b block">İletişim                  </NavLink>
                </ul>
            </div>
            
            <div>
                <NavLink to="/iletisim" className=" hidden md:flex px-6 py-4 bg-[#1A2238] text-base font-medium rounded-lg text-white hover:bg-[#0e1624] duration-200 transition">
                    İletişim
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar