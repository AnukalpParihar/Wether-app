import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "axios";
import Footer from "./component/footer";

function App() {
const apiKey ="481f46ea0e53afb7249f7c69c94dcc03"
const [InputCity, setInputCity] = useState("")
const [Data, setData] = useState({})

const getWetherDetails = (cityName) => {
  if(!cityName) return
  const apiURL ="https://api.openweathermap.org/data/2.5/weather?q=" +cityName + "&appid=" + apiKey
  axios.get(apiURL).then((res) => {
    console.log("response",res.data)
    setData(res.data)

  }).catch((err) => {
    console.log("err",err)
  })
}
const handleChangeInput = (e) =>{
  console.log("value",e.target.value);
  setInputCity(e.target.value)
}
const handleSearch =()=>{
  // alert("clicked")
  getWetherDetails(InputCity)
}




  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Anukalp's Weather app</h1>
        <div className="footer">
          <footer/>
          </div>

     <div className="d-grid gap-3 col-4  mt-4">
        <input type="text" className=" form-control" 
        value={InputCity}
        onChange={handleChangeInput}/>
        <button className="btn btn-primary" 
        onClick={handleSearch}
        type="button">Search</button>
      </div>
      </div>   
{Object.keys(Data).length> 0 &&
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">
          <div className="weathericon">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiC80PakQGRvaGEC1Dko0etCyzlilRmaKFVR84-hvkg&s"></img>

          <h5 className="weatherCity">
            {Data?.name} </h5>
          <h6 className="weatherTemp"> {((Data?.main?.temp)-273.15).toFixed(2)}°C </h6>
          </div>

        </div>
      </div>
      }
    </div>
    
   
  );
 
  }

export default App;
