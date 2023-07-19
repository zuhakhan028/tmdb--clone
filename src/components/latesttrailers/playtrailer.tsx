import React, { useEffect } from "react";
import { useState } from "react";
import { requestOptions } from "../../module/todayContentModule";
interface props{
    id:any
}

function PlayTrailer(props:props):any{
    let[key,setKey]=useState<any>()
    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
        myHeaders.append("accept", "application/json");
        
        var requestOptions :requestOptions= {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch(`https://api.themoviedb.org/3/movie/${props.id}/videos?key=858e15de9492d5090a05cffb61809d40`, requestOptions)
          .then(response => response.json())
          .then(result => setKey(result))
          .catch(error => console.log('error', error));
      },[])
    

   if(key){
    return(
        <div>
 <iframe className="position-trailer-box"width="1080" height="607"src={`https://www.youtube.com/embed/${key.results[0].key}?autoplay=1`}></iframe>
        </div>
    )
   }

}
export default PlayTrailer
