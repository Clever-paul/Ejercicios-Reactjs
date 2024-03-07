import {PropTypes} from 'prop-types'

export const PropsAndTypes = ({value}) => {
  return (
    <>
    <h1>App de Props y Types</h1>
    <p>{value}</p>

    <button onClick={() => console.log('precionaste un click')}>+1</button> {/* estos son eventos de click de react que reciben como parametro una funcion*/}
    </> 
  )
}

PropsAndTypes.propTypes = {
    value: PropTypes.number.isRequired
}
