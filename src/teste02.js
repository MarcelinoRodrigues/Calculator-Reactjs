import React,{useState} from 'react';

export default Props =>{
    const[Contador,setContador] = useState(0)
    return(
        <div>
            <p>Numero:{Contador}</p>
            <button onClick={() => setContador(Contador + 100)}>inc</button>
            <button onClick={() => setContador(Contador - 100)}>Dec</button>
        </div>
    )
}