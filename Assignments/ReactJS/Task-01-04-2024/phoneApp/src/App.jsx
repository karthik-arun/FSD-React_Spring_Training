import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import CarouselComponent from './components/CarouselComponent'
import NavbarComponent from './components/NavbarComponent'
import GridComponent from './components/GridComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <HeaderComponent/>
       <CarouselComponent/>
       <GridComponent/>
       <FooterComponent/>
    </div>
    
  )
}

export default App
