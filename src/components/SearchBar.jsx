
import React, { useState } from "react";

export default function SearchBar(props) {




const [id, setId] = useState("")

const handleChange = (evento) => {

   console.log("si se cumplio el cambio", evento.target.value);
   setId(evento.target.value);
}

   return (
      <div>
          <input type='search' placeholder="Agrega Un Personaje" onChange={handleChange} value={id} />
         <button onClick={() => {props.onSearch(id)}}>Agregar</button> 
      </div>
   );
}
