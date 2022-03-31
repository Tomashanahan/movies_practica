import React, { useEffect } from 'react'
import './movie.css'
import useFetch from '../Hooks/useFetch'

function Movie({input}) {
    const [movie,setMovie] = React.useState('')

   let info = useFetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2f661bbc&s=${input}`)

    useEffect(()=>{
        // setMovie('')
        if(input !== ''){
            info?.Search?.map((pelicula,i) => {
                setMovie(x => [...x,<div key={i} className="movie"> <img src={pelicula.Poster} alt={pelicula.Poster}/> <h4>{pelicula.Title}</h4> </div>])
            })
        } else{
            setMovie(<h3>Buque una pelicula o serie...</h3>)
        }
        return () => setMovie('')
    },[info])
    
  return (
    <div className='cards'>
        <div className="card">
            {movie}
        </div>
    </div>
  )
}

export default Movie