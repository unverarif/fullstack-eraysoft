import React from 'react'
import { MdAddIcCall } from 'react-icons/md'

const CallUs = () => {
  return (
    <div className='w-full h-[160px] bg-gray-900 text-white'>
        <div className='container mx-auto items-center flex flex-col justify-between py-4'>
            <h1 className='text-3xl font-extrabold text-center items-center md:text-4xl sm:text-2xl'>Bilgi almak için lütfen arayınız <br/></h1>
            <h5 className='text-4xl font-extrabold py-4 flex tracking-wider lg:text-6xl sm:text-3xl'> <MdAddIcCall className='mr-4'/> 0(212) 278 01 56/57</h5>

        </div>
    </div>
  )
}

export default CallUs