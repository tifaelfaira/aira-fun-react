import React from 'react'
import ReactDOM from 'react-dom/client'
import HotelManagement from './HotelManagement'
import './index.css' // Pakai satu titik saja karena filenya satu folder

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HotelManagement />
  </React.StrictMode>
)