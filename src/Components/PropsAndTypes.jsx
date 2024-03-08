import {useState} from 'react'; //absolutamente todos los hooks llevan use inclusive los personalizados

import {PropTypes} from 'prop-types';

export const PropsAndTypes = ({value}) => {
  //useState(0) toma un argumento inicial del estado
  //eso quiere decir que couter iniciará con el valor 0
  //el primer valor es la variable que contendrá el estado actual 
  //el segundo valor es una funcion para actualizar el estado
  const [counter, setCounter] = useState(value);

  const handleAdd = ()=>{
    setCounter(counter + 1);
    //existe otra manera de cambiar el counter sin nesidad de implicar directamente la variable
    //setCounter((e) => e+1);
    //
  }
  const handleDecrement = ()=>{
    setCounter(counter - 1);
  }
  const hanldeReset = () =>{
    setCounter(value);
  }

  return (
    <>
    <h1>App de Props y Types</h1>
    <p>{counter}</p>

    <button onClick={handleAdd}>+1</button> {/* estos son eventos de click de react que reciben como parametro una funcion*/}
    <button onClick={handleDecrement}>-1</button>
    <button onClick={hanldeReset}>Reset</button>
    </> 
  )
}

PropsAndTypes.propTypes = {
    value: PropTypes.number.isRequired
}
