import React from 'react'
import ReactDOM from 'react-dom/client'
import { PropsAndTypes } from './Components/PropsAndTypes'
import './styles.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PropsAndTypes value={10}/>
  </React.StrictMode>,
)
