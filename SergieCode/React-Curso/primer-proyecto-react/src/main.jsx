import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { MiComponente } from './MiComponente'
import './styles.css'
//import { PropsComponent } from './PropsComponent'
//import { ContadorApp } from './ContadorApp'
import { ListadoApp } from './ListadoApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListadoApp />
  </StrictMode>,
)
