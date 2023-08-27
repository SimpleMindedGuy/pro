
import React, { useEffect, useState } from 'react';

import { getFirestore, } from 'firebase/firestore';

import {firebase,DataBase} from '../utils/FirebaseInit'
import { onValue, ref } from 'firebase/database';

import BG from "../assets/Image/BG.jpg";

const DB = getFirestore(firebase)





function DashBoard() {
  
  const [Weather, setWeather] = useState({
    Temperature: 0,
    Humidity: 0 ,
    Pressure: "" ,
  })
  useEffect(() => {
    
    (async ()=>{
  
      console.log("data ")
      await onValue(ref(DataBase),function (snapshot) {


        const data = snapshot.val();

        if(data == null)
        {
          return;
        }
        console.log("this is real time data");
        console.log(data);

        console.log(data.Weather);

        
        if (Weather.Humidity != data.Weather.Humidity || Weather.Pressure != data.Weather.Pressure || Weather.Temperature != data.Weather.Temperature)
        {
          setWeather(()=>{
            return ({
              Temperature: data.Weather.Temperature,
              Humidity: data.Weather.Humidity,
              Pressure: data.Weather.Pressure ,
            })
          })
        }
        

      });
      
    })();
    

    
    
    
    return () => {

    }
  }, [Weather])
  
  
  return (
    
    <>
        <h1>Smart Weather System</h1>
        { Weather ? 
          <section className='Today' style={{backgroundImage: `url('${BG}')` }}>
            <div className='Weather-Info'>
            <img src='https://www.svgrepo.com/show/407540/sun.svg'/>

            
            <div> 
              { Weather.Temperature ? <h4>{Weather.Temperature}C</h4> : <p>"nope"</p>}
              <h3>الحرارة</h3>
            </div>

            <div>
              { Weather.Pressure ? <h4>{Weather.Pressure} pa</h4> : <p>"nope"</p>} 
              <h3>الضغط الجوي</h3>
            </div>
  
            <h3 className='FK'> و تكون الحالة الجوية 
              {
                Weather.Temperature >= 40 ? <> حار جدا </> 
                : Weather.Temperature >= 35 ? <> حار </> 
                : Weather.Temperature >= 30 ? <> معتدل صيفي </> 
                : <> معتدل ربيعي </>
              } 
              في جميع مناطق المملكة </h3>
          </div>
          </section>

          : 
          <h1> No weather information</h1>
        }



    </>

  )
}

export default DashBoard
