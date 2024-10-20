import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { MiComponente } from './MiComponente'
import './styles.css'
//import { HooksApp } from './HooksApp'
import { App } from './App'
//import { PropsComponent } from './PropsComponent'
//import { ContadorApp } from './ContadorApp'
//import { ListadoApp } from './ListadoApp'
//import { UsersApp } from './UsersApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>,
  </BrowserRouter>
)
