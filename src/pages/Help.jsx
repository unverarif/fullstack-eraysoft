import React, { useEffect, useState } from 'react';
import axios from 'axios';



export const Help = () => {

    const [helpData, setHelpData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/help')
          .then(response => {
            setHelpData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    const [success, setSuccess] = useState(false);

    
    const handleClose = () => {
        setSuccess(false);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const data = {};
            helpData.forEach(item => {
                data[item.value] = e.target[item.value].value;
            });
            axios.post('http://localhost:3000/help', data)
                .then((response) => {
                    console.log(response.data);
                    setSuccess(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

  return (
    <div className=" bg-gray-200 bottom-0 flex flex-col min-h-screen">
        <form
            className="container mx-auto justify-center my-14 flex-grow"
            onSubmit={handleSubmit}
        >
            {helpData.map((item) => (
            <div className="relative z-0 w-full mb-6 group" key={item.id}>
                <label
                htmlFor={item.value}
                className="block mb-2 text-sm font-medium text-black"
                >
                {item.name}
                </label>
                <textarea
                name={item.value}
                rows="1"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder=""
                ></textarea>
            </div>
            ))}
            <button
            type="submit"
            className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value="Send"
            >
            Gönder
            </button>

            {success && (
            <div className="success-message py-4 pr-4 bg-gray-100 ">
                <p>Mesajınız başarıyla gönderilmiştir.</p>
                <button onClick={handleClose} className="p-2 bg-gray-200">
                Kapat
                </button>
            </div>
            )}
        </form>
    </div>

  )
}
