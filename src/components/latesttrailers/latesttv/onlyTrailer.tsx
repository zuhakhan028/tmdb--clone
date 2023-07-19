import React, { useEffect } from "react"
import { useState } from "react";
import { requestOptions } from "../../../module/todayContentModule";
import "./onlyTrailer.css"
import playbutton from "../../../assets/images/playbutton.svg"
import PlayTrailer from "../playtrailer";
interface props{
    data:any
}
function OnlyTrailer(props:props):any{
    
const [trailer, setTrailer]=useState<any>()
const [playButtonClicked, setplayButtonClicked]=useState(false)
useEffect(()=>{
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${props.data?.id}/videos?key=858e15de9492d5090a05cffb61809d40`, requestOptions)
  .then(response => response.json())
  .then(result => setTrailer(result))
  .catch(error => console.log('error', error));
},[])


if(trailer!=undefined){
  if(trailer.results?.length>0){
    return(
      <div className="only-trailer-div">
           <div  className="only-trailer" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${props.data.backdrop_path})`}} onClick={(e)=>{setplayButtonClicked(true)}}>
           <img  className="play-button"src={playbutton} alt="" onClick={(e)=>{setplayButtonClicked(true)}}/>
           </div>
          <h2 className="latest-trailer-movie-title">{props.data.title}</h2>
         {playButtonClicked && <PlayTrailer id={props.data.id}/>}
          
      </div>
      
  )
  }
  else{
    return(
   <div></div>
    )
  }

}
else{
  <div>
    hello
  </div>
}


   
}

export default OnlyTrailer