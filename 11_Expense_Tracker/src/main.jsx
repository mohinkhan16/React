import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddExpense from '../Components/AddExpense.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AddExpense/>
  </StrictMode>,
)
