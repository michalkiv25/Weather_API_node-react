import React, { useState,useEffect } from 'react';

//import from project
import validate from './validate';
import "./SearchBar.css";
import { toast } from 'react-toastify';//notification
import 'react-toastify/dist/ReactToastify.css';//notification


toast.configure() //notification error form input

const SearchBar = ({ setSearch }) => {

  const [valueUser, setValueUser] = useState('');// value from user about city
  const [errors, setErrors] = useState(null); //validate


  const onSubmit = (event) => { // click on button
    event.preventDefault(); //Prevents page refresh

    const tmp_error = validate(valueUser);//error
    setErrors(tmp_error)
    if(!tmp_error){ //Check error
      setSearch(valueUser);
      setValueUser("")
    }else{
      toast.error(tmp_error) //notification-display error
    }
  };

  

  return (
          <main className='side left'>
              <header>
                <h1 className='titleApp'>Use our weater app <br></br> to see the weater <br></br> around the world</h1>
              </header>
                  <form onSubmit={onSubmit} >
                    <div>
                      <label className="lebelCity" htmlFor ="city">city name</label>
                      <div className='formstyle'>
                        <input
                          id="city"
                          name="city"
                          className='inputCity'
                          type="text"
                          value={valueUser}
                          onChange={(event) => setValueUser(event.target.value)}
                        />
                        <button className='submitCheck' type='submit' >submit</button>
                      </div>
                    </div>
                  </form>
          </main>
  );
};

export default SearchBar;
