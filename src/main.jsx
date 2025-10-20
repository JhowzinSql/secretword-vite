import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
import './index.css'

=======
import './index.css' // Importando nossos estilos globais 🎨

// 1. Encontramos o palco <div id="root">
// 2. Comandamos o React a renderizar nosso componente principal <App /> lá dentro!
>>>>>>> 6ce2b44553b61bd5dee6a4a4cd6377f00dfc792b
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
