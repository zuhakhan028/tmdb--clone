import  React from "react";
import { requestOptions } from "../../../module/todayContentModule";
import { useState } from "react";
import MovieCard from "../../discover/moviecard/movieCard";

function Streaming(){

    const [streamingData, setStreamingData]=useState<any>()
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.themoviedb.org/3/tv/popular", requestOptions)
  .then(response => response.json())
  .then(result => setStreamingData(result))

if(streamingData){
  
        return(
            
         
           <div>
<MovieCard data={streamingData}/>

           </div>
            
        )
   
}else{
    return(
        <div>
none
        </div>
    )
}


}

export default Streaming;