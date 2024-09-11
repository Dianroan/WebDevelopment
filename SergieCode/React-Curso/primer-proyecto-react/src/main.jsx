import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { MiComponente } from './MiComponente'
import './styles.css'
import { HooksApp } from './HooksApp'
//import { PropsComponent } from './PropsComponent'
//import { ContadorApp } from './ContadorApp'
//import { ListadoApp } from './ListadoApp'
//import { UsersApp } from './UsersApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
)
