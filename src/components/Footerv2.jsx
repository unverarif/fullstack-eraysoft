import React from 'react'

export const Footerv2 = () => {
  return (
    <div className='bottom-0'>
      
      <div className=" bg-white dark:bg-gray-900 w-full mt-2">
          <div className="container mx-auto md:p-6 p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.eraysoft.com.tr/" className="hover:underline">Eraysoft Bilişim 2018</a>. Tüm hakları saklıdır.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                  <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="/" className="mr-4 hover:underline md:mr-6">Licensing</a>
              </li>
              <li>
                  <a href="/" className="hover:underline">Contact</a>
              </li>
          </ul>
          </div>
      </div>

    </div>
  )
}
