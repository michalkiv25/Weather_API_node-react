import React from 'react';

// import from project
import "./WeatherDetail.css";

const WeatherDetail = ({ selectedWeather }) => {
// object on the data does not exist
  if (!selectedWeather) { 
    console.log("!selectedWeather")
    return <div>Loading...</div>;
  }
  //Destructuring of obg
  const {country,localtime,name } = selectedWeather.location;
  const {temp_c,wind_kph,humidity,pressure_in } = selectedWeather.current;
  const {text} = selectedWeather.current.condition;
  
  //Destructuring of obg and alias
  const {time: time13, temp_c: temp13}=selectedWeather.forecast.forecastday[0].hour[13];
  const {time: time14, temp_c: temp14}=selectedWeather.forecast.forecastday[0].hour[14];
  const {time: time15, temp_c: temp15}=selectedWeather.forecast.forecastday[0].hour[15];
  const {time: time16, temp_c: temp16}=selectedWeather.forecast.forecastday[0].hour[16];
  const {time: time17, temp_c: temp17}=selectedWeather.forecast.forecastday[0].hour[17];

  //Conversion of date and time to hour only
  const hour13 = new Date(time13).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const hour14 = new Date(time14).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const hour15 = new Date(time15).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const hour16 = new Date(time16).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const hour17 = new Date(time17).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });


  return (
    <main className='side right'>
      <div className='containerSideRight'>
        <div className='containerSmallBox'>
          <div className='boxParameter'>

            <div className='titleBox'>
              <h5 className='font titleName'>{name}</h5>
              <h6 className='font'>{country}</h6>
              <p className='font dateWatch'>{localtime}</p>
            </div>
            <div>
              <p className='font degrees'>{temp_c} 
                <span>&deg;</span> 
              </p>
              <p className='font titleText'>{text}</p>
            </div>
          </div> 

          <table className='tableOne'>
            <thead>
              <tr>
                <th className='font'>precipitation</th>
                <th className='font'>humidity</th>
                <th className='font'>wind</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='font'>{Math.floor(pressure_in)} mm</td>
                <td className='font'>{humidity} %</td>
                <td className='font'>{wind_kph} km/h</td>
              </tr>
            </tbody>
          </table>

          <table className='tableTwo'>
            <thead>
              <tr>
                <th className='font'>{hour13}</th>
                <th className='font'>{hour14}</th>
                <th className='font'>{hour15}</th>
                <th className='font'>{hour16}</th>
                <th className='font'>{hour17}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='font'>{Math.floor(temp13)}&deg;</td>
                <td className='font'>{Math.floor(temp14)}&deg;</td>
                <td className='font'>{Math.floor(temp15)}&deg;</td>
                <td className='font'>{Math.floor(temp16)}&deg;</td>
                <td className='font'>{Math.floor(temp17)}&deg;</td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
    </main>
  );
};

export default WeatherDetail;