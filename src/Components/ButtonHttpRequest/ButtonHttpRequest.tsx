import React, { useState } from 'react';
import axios from 'axios';
import { showSnack } from 'src/Services/Snackbar.service';

function ButtonHttpRequest() {

      const [data, setData] = useState('')

      const handleClick = async () => {
            try {
                  const response = await axios.get('https://quotes.rest/qod', {
                        headers: {
                              'Content-Type': 'application/json'
                        }
                  })
                  
                  setData(response?.data?.contents?.quotes[0]?.quote)
                  showSnack("El servicio de Quotes respondio OK")
            } catch (error) {
                  console.log(error)
            }


      }

      return (
            <div className="container">
                  <h2>Quote of the day</h2>
                  <button onClick={handleClick}>Get Quotes</button>
                  <hr />
                  <div>
                        {data ?? null}
                  </div>
            </div>
      );
}

export default ButtonHttpRequest;