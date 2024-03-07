import React from 'react'
import ReactDOM from 'react-dom/client'
import { PropsAndTypes } from './Components/PropsAndTypes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PropsAndTypes value='hola'/>
  </React.StrictMode>,
)
