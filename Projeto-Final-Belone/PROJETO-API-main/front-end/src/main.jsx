import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import NewPost from './routes/NewPost.jsx';
import Login from './routes/Login.jsx';
import CriarConta from './routes/CriarConta.jsx';
import Home from './routes/Home.jsx';
import Dicas from './routes/Dicas.jsx';
import Investidores from './routes/Investidores.jsx';
import Investimentos from './routes/Investimentos.jsx';

// Criação do navegador de rotas
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/cadastro",
        element: <NewPost/>
      },
      {
        path: "/criar_conta",
        element: <CriarConta/>
      },
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/Dicas",
        element: <Dicas/>
      },
      {
        path: "/Investidores",
        element: <Investidores/>
      },
      {
        path: "/Investimentos",
        element: <Investimentos/>
      },
    ],
  }
]);

// Renderização do aplicativo React na página HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);