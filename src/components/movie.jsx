import React from 'react'
import './movie.css'
// "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"

function Movie({input}) {
    // console.log(input)
    const [movie,setMovie] = React.useState('')

    React.useEffect(()=>{
        setMovie('')

        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2f661bbc&s=${input}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            data.Search.map((pelicula,i) => {
                setMovie(x => [...x,<div key={i} className="movie"> <img src={pelicula.Poster} alt={pelicula.Poster}/> <h4>{pelicula.Title}</h4> </div>])
                // setMovie([<div key={i} className="movie"> <img src={pelicula.Poster} alt={pelicula.Poster}/> <h4>{pelicula.Title}</h4> </div>])
            })
        })
        .catch((e)=>{
            setMovie(<h3>404 No encontrado 🥲</h3>)
        })
    },[input])
    
    
  return (
    <div className='cards'>
        <div className="card">
            {movie}
        </div>
    </div>
  )
}

export default Movie