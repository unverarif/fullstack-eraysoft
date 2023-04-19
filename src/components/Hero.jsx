import React from 'react'
import Typed from 'react-typed';
import { FcCheckmark } from "react-icons/fc";
import { NavLink } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className='bg-[#1A2238]'>
      <div className='container flex justify-center items-center mx-auto text-[#FFFAFB] tracking-wide bg-[#1A2238] h-[800px] content-center'>
          <div className='text-center flex-col'>
              <Typed className='text-7xl font-black text-[#FF6A3D] m-4' strings={['Kimlik', 'Pasaport', 'Çek']} typeSpeed={100} backSpeed={100} loop />
              <h1 className='text-6xl py-4 font-bold m-4'>tarama, okuma sistemleri.</h1>
              <h3 className='text-2xl font-medium flex items-baseline justify-center my-1' > <FcCheckmark size={25} className='mr-2'/> Her işletmenin ihtiyacına göre farklı çözüm</h3>
              <h3 className='text-2xl font-medium flex items-baseline justify-center my-1' > <FcCheckmark size={25} className='mr-2'/> KVKK, KBS uyumlu</h3>
              <h3 className='text-2xl font-medium flex items-baseline justify-center my-1' > <FcCheckmark size={25} className='mr-2'/> 1 saniye altında tarama hızı</h3>
              <h3 className='text-2xl font-medium flex items-baseline justify-center my-1' > <FcCheckmark size={25} className='mr-2'/> Tüm otelcilik uygulamaları ile entegre</h3>
              <NavLink to={"/my-app/iletisim"}><button className='rounded px-9 py-3 font-semibold text-white bg-[#FF6A3D] tracking-wider hover:bg-[#ff440a] duration-200 hover:scale-105 mt-6'>Detaylı Bilgi</button></NavLink>
          </div>
        </div>
      </div>
    
  )
}
