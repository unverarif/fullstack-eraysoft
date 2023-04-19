import React, { useEffect, useState } from 'react'

// Resimler
import sertifika from '../assets/sertifika.png'

// Json Dosyaları
import aboutus from '../json/aboutus.json'
import axios from 'axios';

// Componentler
import { Footerv2 } from "../components/Footerv2";

export const About = () => {

  const [helpData, setHelpData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/about')
          .then(response => {
            setHelpData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);




  return (
    <div className='bg-gray-100 h-screen w-full min-h-screen flex flex-col'>

        <div className='max-h-[1240px] container mx-auto text-center m-8 text-black font-base flex-grow'>
            <h1 className='text-4xl font-bold m-8 tracking-wide'>Hakkımızda</h1>
            {helpData.map(item => (
              <div key={item.id}>
                <h2 className='m-8 text-3xl tracking-wide'>{item.title}</h2>
                <p className='text-left opacity-85'>{item.metin}</p>
              </div>
            ))}
            <img src={sertifika} alt=""  className='h-[128px] flex mx-auto my-8'/>
        </div>

      <div className='bg-gray-100'>
      <h1 className='mx-auto text-center font-black text-4xl text-black m-8'>İş Ortaklarımız</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto bg-gray-100 container justify-center items-center">
        {aboutus.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center w-[300px] h-[300px] p-4 border-2 rounded shadow-xl bg-gray-200 hover:bg-gray-300">
              <img src={item.url} alt="" className="w-[200px] mb-4" />
              <h3 className="text-xl font-bold italic text-center text-black">{item.name}</h3>
              <h5 className="text-base italic mt-2 text-gray-700">{item.job}</h5>
          </div>
        ))}
      </div>

    </div>


        

  <Footerv2 />
  </div>
  )
}
