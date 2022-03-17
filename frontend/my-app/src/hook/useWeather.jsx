import { useState, useEffect } from 'react';
import axios from "axios"; //Request for api

const useWeather = (defaultSearchValue) => {
  const [weather, setWeather] = useState(null);//The object of the data

  useEffect(() => {
    search(defaultSearchValue);
  }, [defaultSearchValue]);

  const search = async (search) => { //Call to server-side api Accept the data
    try{
        const URL= `http://localhost:3000/weather/${search}`;
        const data = await axios.get(URL);
        if(!data || data.data.mes.error ) return
        setWeather(data.data.mes)
    }
    catch(err){
        throw err
    }
  }

  return [weather, search];
}


export default useWeather;
