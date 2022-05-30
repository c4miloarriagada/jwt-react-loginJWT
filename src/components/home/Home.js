import React, { useEffect, useState } from "react";
import privateRoutes from "../services/private-routes";


export const Home = () => {
  const [wines, setWines]= useState([]);
  
  useEffect(()=>{
    privateRoutes.getProducts().then(
      (response)=>{    
        setWines(response.data);      
      },
      (error)=>{
        console.log(error)
      }
    )
  },[])

  
return(
  <div>
    <h1> RUTA PUBLICA </h1>
    <h3>
    {wines.result?.map((e)=>(<div key = {e._id}>{e.name}</div>))}
    </h3>
  </div>
)






};
