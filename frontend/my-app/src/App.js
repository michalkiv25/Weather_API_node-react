import React, { useState,useEffect } from 'react';

// import from project
import './App.css';
import SearchBar from './components/searchbar/SearchBar';
import useWeather from './hook/useWeather';
import WeatherDetail from './components/weatherdetail/WeatherDetail';

function App() {
  const [selectedWeather, setSelectedWeather] = useState(null);//Obj with data
  const [weather, setSearch] = useWeather('London'); //Hook Context,Default value, 



  useEffect(() => {
    //Put the Obg data in New object
    setSelectedWeather(weather); 
  }, [weather]);

  return (
          <div className='container' >
            <div className='boxAll'>
                <SearchBar setSearch={setSearch} />
                <WeatherDetail selectedWeather={selectedWeather} />
            </div>
          </div>
  );
}

export default App;
