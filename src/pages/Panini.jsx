import React, { useEffect, useState } from 'react'

// Resimler - Link
import panini from '../assets/cekscanner.png'
import CallUs from '../components/CallUs'

import partners from '../json/panini-partners.json'
import ozellikler from '../json/panini_ozellikler.json'

import axios from 'axios'




const Panini = () => {

    const [helpData, setHelpData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/panini')
          .then(response => {
            setHelpData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    
  return (
    <div className='bg-gray-100'>
    
        <div className='container mx-auto max-w-[1240px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img src={panini} alt="" className='max-w-[500px] max-h-[500px] mx-auto'/>
                    {/* <iframe class="w-full aspect-video loop" src={paninimp4}></iframe> */}
                </div>
                <div className='flex flex-col justify-start px-4'>
                    <p className='text-black text-4xl font-black py-8 mx-auto'>Panini Çek Tarayıcı</p>
                    <p className='text-black text-left text-lg'>
                        Yeni nesil çek okuyucu… My Vision X. İleri teknoloji ve maksimum performansın size sunduğu en ideal çek scanner çözümü…
                        Sahte MICR basılan çeklerde uyarı vererek bu durumlarda kullanıcıyı uyarır.
                        1 Ocak 2017 den itibaren yaygınlaşan olan karekodlu çekleri okuyabilir ve karekod içindeki bilgileri sisteme atar.
                        45 cm’e kadar alonjlu çekleri problemsiz tarayıp okuma özelliği vardır.
                        Cihazın içinde bulunan özel manyetik mürekkepli sinyal okuyucu sayesinde sahte çek tespitinde yardımcı olur.
                    </p>
                </div>
            </div>
            <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 justify-center'>
                {ozellikler.map(item => (
                        <div className=" max-w-sm p-6 bg-white rounded-lg shadow-xl hover:bg-gray-100">
                            <div className='flex items-center justify-start gap-x-8 pb-4'>
                                <img src={item.resim} alt="" className='h-16 w-16'/>
                                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{item.baslik}</h5>
                            </div>
                            <p className='font-normal text-gray-900'>{item.text}</p>
                        </div>
                    ))}
            </div>
            </div>
        </div>

        <CallUs />


        <iframe 
            src="https://www.youtube.com/embed/OylUlocw9Aw" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            className='mx-auto w-[450pxpx] h-[600px] my-8 md:container md:mx-auto' 
            title='video'>   
        </iframe>


        {/* BAZI REFERANSLARIMIZ */}

        <section class="bg-gray-100 py-20 lg:py-[120px]">
            <div class="container mx-auto">
            <h3 className='text-black font-bold mx-auto flex justify-center text-4xl mb-4'>Bazı Referanslarımız <br/></h3>
                <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div class="flex flex-wrap items-center justify-center h-full w-full">
                        {partners.map(item => (
                            <div className='mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]'>
                                <img src={item.resim} alt="" className='hover:ring outline-1 rounded duration-200'/>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </section>

        {/* FAQ */}

        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Soru & Cevap</h2>
                <div class="grid pt-8 text-left border-t border-gray-200 md:gap-4 dark:border-gray-700 md:grid-cols-2">
                    {helpData.map(item => (
                        <div>
                            <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>{item.soru}</h3>
                            <p className='text-gray-500 dark:text-gray-400'>{item.cevap}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

 
    </div>
  )
}

export default Panini