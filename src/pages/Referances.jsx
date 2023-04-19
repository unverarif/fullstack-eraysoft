import React from 'react'

// Json
import turizm from '../json/turizm.json'
import banka from '../json/banka.json'
import kurumsal from '../json/kurumsal.json'



const Referances = () => {
  return (
    <div className='bg-gray-50'>
    
        <div className='bg-gray-50'>
            <h1 className='mx-auto text-center font-black text-4xl text-black p-8'>İş Ortaklarımız</h1>
            <h3 className='mx-auto text-center font-black text-3xl text-gray-900 pt-8 pb-2'>Turizm</h3>
            <hr className='container w-24 h-1 mx-auto bg-gray-700 border-0'/>
            <p className='mx-auto text-center text-gray-800 p-4'>Plustek TR550 Plus Pasaport ve Kimlik okuma sistemi kullanan 5 yıldızlı otel sayısı 400’e ulaştı. Güveniniz için teşekkür ederiz.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-10 mx-auto bg-gray-50 container'>
                {turizm.map((item,i) => (
                    <div className='m-4 mx-auto flex flex-col justify-center items-center h-[200px] w-[200px] rounded shadow-xl bg-white hover:bg-gray-300 duration-200'>
                        <img src={item.url} alt="" className='w-[150px] mb-4 rounded-xl'/>
                        {/* <h3 className='text-black text-base text-center font-medium italic'>{item.name}</h3> */}
                    </div>
                ))}
            </div>
            
            <div className='mt-20'>
                <h3 className='mx-auto text-center font-black text-3xl text-gray-900 pt-8 pb-2'>Bankacılık & Finans</h3>
                <hr className='container w-24 h-1 mx-auto bg-gray-700 border-0'/>
                <p className='mx-auto text-center text-gray-800 p-4'>Türkiye’nin en önemli Bankaları ve Faktoring Firmaları çek işlem süreçlerini Eraysoft Bilişime emanet etti.</p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-10 mx-auto bg-gray-50 container'>
                    {banka.map((item,i) => (
                    <div className='m-4 mx-auto flex flex-col justify-center items-center h-[200px] w-[200px] rounded shadow-xl bg-white hover:bg-gray-300 duration-200'>
                         <img src={item.url} alt="" className='w-[150px] mb-4 rounded-xl'/>
                        {/* <h3 className='text-black text-base text-center font-medium italic'>{item.name}</h3> */}
                    </div>
                    ))}
                </div>
            </div>

            <div className='mt-20'>
                <h3 className='mx-auto text-center font-black text-3xl text-gray-900 pt-8 pb-2'>Kurumsal</h3>
                <hr className='container w-24 h-1 mx-auto bg-gray-700 border-0'/>
                <p className='mx-auto text-center text-gray-800 p-4'>Toplu ödemeler,çek tarama sistemleri ve dijital arşiv sistemlerimiz ile ilgili 1500’ün üzerinde firma ve 5000 kullanıcıya hizmet vermekteyiz.</p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-10 mx-auto bg-gray-50 container'>
                    {kurumsal.map((item,i) => (
                    <div className='m-4 mx-auto flex flex-col justify-center items-center h-[200px] w-[200px] rounded shadow-xl bg-white hover:bg-gray-300 duration-200'>
                         <img src={item.url} alt="" className='w-[150px] mb-4 rounded-xl'/>
                        {/* <h3 className='text-black text-base text-center font-medium italic'>{item.name}</h3> */}
                    </div>
                    ))}
                </div>
            </div>
        </div> 

            
    </div>
  )
}

export default Referances