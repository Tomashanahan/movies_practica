import React from 'react'
import { useRef } from 'react'
import './search_bar.css'

function Search_bar({setInput}) {
  const input_value = useRef()
  
  function buscar_pelicula(e) {
    setInput(input_value.current.value)
  }
  
  return (
    <div className='serch_bar'>
      <input type="text" ref={input_value}/>
      <button onClick={buscar_pelicula}>Buscar</button>
    </div>
  )
}

export default Search_bar
