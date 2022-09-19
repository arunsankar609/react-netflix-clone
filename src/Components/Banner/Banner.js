


import React, { useEffect,useState } from 'react'
import '../Banner/Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants.js'

function Banner() {

const [movie, setstate] = useState(); 
    
useEffect(() => { 
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[3]);
        setstate(response.data.results[5])
    })

}, []);

  return ( 
    <div  >
        
    <div  className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : " "})`}} >
        <div className='content'>
            <h1 className='title' > {movie ? movie.title:"" }</h1>
            <div className='banner_button'>
                <button className='buttons' >Play</button>
                <button className='buttons' >My List</button>

            </div>
            <h1 className='description' >{ movie ? movie.overview :""}</h1>

        </div>
 <div className="fade-bottom"></div>

    </div>
    </div>
  )
}

export default Banner