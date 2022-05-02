import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
import { Country, State, City }  from 'country-state-city';
// console.log(Country.getAllCountries())
// console.log(State.getAllStates())
// console.log(City.getAllCyties())

function Countrystatecity() {
    const [country, setCountry]= useState([]);
    const [countryid, setCountryid]=useState('');
    const [state, setState]= useState([]);
    const [stateid, setStateid]= useState('');
    const [city, setCity]= useState([]);

     useEffect( ()=>{
         const getcountry= async()=>{
           
            const rescon= Country.getAllCountries();
            console.log(Country.getAllCountries())
             setCountry(await rescon);
         }
         getcountry();
     },[]);

     const handlecountry=(event)=>{
         const getcountryid= event.target.value;
         setCountryid(getcountryid);
     }

     useEffect( ()=>{
     const getstate= async()=>{
        
         const resst= State.getStatesOfCountry(countryid)
         console.log(resst);
         setState(await resst);
     }
    getstate();
     },[countryid]);

     const handlestate=(event)=>{
        const getstateid= event.target.value;
        setStateid(getstateid);
    }

useEffect( ()=>{
    const getcity= async()=>{   
       
        const rcity= City.getCitiesOfCountry(countryid)
        setCity(await rcity);
    }
getcity();
},[stateid]);
         
   return (
    <React.Fragment>
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="mt-4 mb-4 fw-bold">
              Select Country, State and City{" "}
            </h2>

            <form className="row g-3">

               <div className="col-md-3">
                <label  className="form-label">Country </label>
                <select name="country" className="form-control p-2"  onChange={(e)=>handlecountry(e)} >
                  <option value="">--Select Country--</option>
                  {
                 country.map( (el, index)=>(
                  <option key={index} value={el.isoCode}>{el.name } </option>
                 ))
                  }
                </select>
              </div>

              <div className="col-md-3">
                <label  className="form-label">State/Region</label>
                <select className="form-select" name="state"  onChange={(e)=>handlestate(e)}>
                  <option value="">--Select State/Region--</option>
                  {
                    state.map( (getst, index)=>(
                     <option key={index} value={getst.name}>{getst.name } </option>
                    )) 
                  }                  
                </select>
              </div>

              <div className="col-md-3">
                <label  className="form-label">City</label>
                <select className="form-select" name="city">
                  <option value="">--Select City--</option>
                  {
                      city.map( (gcity, index)=>(
                      <option key={index} value={gcity.name}> { gcity.name} </option>
                      ))
                  }                 
                </select>
              </div>
              
              <div className="col-md-3">                
                <button type="button" className="btn btn-primary mt-4">Submit</button>
              </div>
            
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Countrystatecity;