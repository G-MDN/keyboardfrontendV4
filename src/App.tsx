import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'

import './App.css'

function App() {
  return (
    <div className="layout">
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
