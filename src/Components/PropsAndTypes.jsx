import {PropTypes} from 'prop-types'

export const PropsAndTypes = ({value}) => {
  return (
    <>
    <h1>App de Props y Types</h1>
    <p>{value}</p>
    </> 
  )
}

PropsAndTypes.propTypes = {
    value: PropTypes.number.isRequired
}
