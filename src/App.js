import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Quote({quote}){
  return(
    <div className="frase">
     <h1>{quote.quote}</h1>
      <p>- {quote.author}</p>
    </div>
  )
}

function App(){

  const [quote, gettingQuote] = useState({})

  const gettingApi = async ()=>{
    const respuesta = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
  
    //setting state with api response
    gettingQuote(respuesta.data[0])
  }

  useEffect(()=>{
    gettingApi()
  }, [])

  // console.log(quote)

  return(
    <div className="contenedor">
      <Quote quote={quote}/>
      <button onClick={()=>{gettingApi()}}>Generar Quote</button>
    </div>
  )
}

export default App;