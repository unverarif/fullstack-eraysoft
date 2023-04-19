import React from 'react'
import { NavLink } from 'react-router-dom';

// Resimler
import passscanner from '../assets/passscanner.png';
import idscanner from '../assets/idscanner.png';
import cekscanner from '../assets/cekscanner.png';


export const Cards = () => {
  return (
    <div className='bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 container mt-12 mx-auto h-full rounded-xl bg-gray-100 hover:bg-gray-200 duration-200'>
        <img src={passscanner} alt="" className='py-8 justify-center object-cover max-h-[400px] justify-self-center'/>
        <div className='flex flex-col justify-between place-content-start'>
          <h1 className='m-4 text-black  text-3xl font-extrabold'>Pasaport Tarayıcı, Okuyucu</h1>
          <p className='text-gray-900 mx-4 text-lg'>
          Pasaport Tarayıcı cihazı 1 sn. içerisinde pasaport ve kimliklerin yüksek çözünürlükte ve renkli olarak taranması sağlar.
          Pasaport Tarayıcı ürünlerimiz son teknoloji imaj sensörleri ve soğuk katot teknolojisi ile donatılmıştır.
          Isınma ve bekleme süresi olmadan tam 1 sn. içerisinde tarama işlemini gerçekleştirerek işletmenize büyük bir hız kazandırmaktadır.
          Plustek Türkiye Distribütörü olarak tüm ürünlerin satış ve sonrası desteği Eraysoft tarafından sağlanır.
          </p>
          <NavLink to={"/my-app/idscanner"}><button className='bg-black text-white m-4 p-4 px-8 rounded-lg hover:scale-105 duration-150 flex justify-start'>Detaylı Bilgi</button></NavLink>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 container mt-12 mx-auto h-full rounded-xl bg-gray-100 hover:bg-gray-200 duration-200'>
        <img src={idscanner} alt="" className='py-8 justify-center object-cover max-h-[400px] justify-self-center'/>
        <div className='flex flex-col justify-between place-content-start'>
          <h1 className='m-4 text-black  text-3xl font-extrabold'>Kimlik Tarayıcı, Okuyucu</h1>
          <p className='text-gray-900 mx-4 text-lg'>
          Kimlik Tarayıcı özel bir tarama teknolojisi ile en hızlı ve kaliteli scan işlemini gerçekleştirir.
          Flatbed ve ADF seçenekleri olan Kimlik Tarayıcı işletmenizin ihtiyacına yönelik olarak tasarlanmıştır.
          Kompakt yapısı ile masanızda minimum alanı işgal etmektedir.
          Eski veya yeni kimlik, eski veya yeni ehliyet olarak tüm dokümanları tarayabilirsiniz.
          </p>
          <NavLink to={"/my-app/idscanner"}><button className='bg-black text-white m-4 p-4 px-8 rounded-lg hover:scale-105 duration-150 flex justify-start'>Detaylı Bilgi</button></NavLink>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 container mt-12 mx-auto h-full rounded-xl bg-gray-100 hover:bg-gray-200 duration-200'>
        <img src={cekscanner} alt="" className='py-8 justify-center object-cover max-h-[400px] justify-self-center'/>
        <div className='flex flex-col justify-between place-content-start'>
          <h1 className='m-4 text-black  text-3xl font-extrabold'>Çek Tarayıcı, Okuyucu</h1>
          <p className='text-gray-900 mx-4 text-lg'>
          Çek Tarayıcı otomatik besleyici ünitesi sayesinde dakikada 50-100 adet çeki yüksek çözünürlükte ve yüksek kalitede taramasını yapar.
          300 DPI renkli tarama esnasında tarama hızı hiçbir şekilde düşmez. Çek Tarayıcı kaliteli üretimi ile uzun yıllar işletmelerin ihtiyaçlarını gidermektedir.
          Merkez Bankasının belirlediği dijital takas teknik verilerini tam olarak karşılamaktadır.
          </p>
          <NavLink to={"/my-app/panini"}><button className='bg-black text-white m-4 p-4 px-8 rounded-lg hover:scale-105 duration-150 flex justify-start'>Detaylı Bilgi</button></NavLink>
        </div>
      </div>

    

      
    </div>
  )
}