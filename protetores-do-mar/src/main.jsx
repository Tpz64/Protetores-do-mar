import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/style.css'
import Home from './Paginas/Home.jsx'
import SobreNos from './Paginas/SobreNos.jsx'
import MarHoje from './Paginas/MarHoje.jsx'
import Cadastro from './Paginas/Cadastro.jsx'
import LoginPdo from './Paginas/LoginPdo.jsx'
import Parceiros from './Paginas/Parceiros.jsx'
import Contato from './Paginas/Contato.jsx'
import PageNotFound from './Paginas/PageNotFound.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import PaginaLogada from './Paginas/PaginaLogada.jsx'

//criando as rotas

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index:true, element:<Home/>},
      {path:'sobre', element:<SobreNos/>},
      {path:'mar', element:<MarHoje/>},
      {path:'cadastro', element:<Cadastro/>},
      {path:'login',element:<LoginPdo/>},
      {path:'parceiros',element:<Parceiros/>},
      {path:'contato', element:<Contato/>},
      {path:'*',element:<PageNotFound/>}
    ]

}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)



/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)*/
