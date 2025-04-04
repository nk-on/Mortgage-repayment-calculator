import './App.css'
import Container from './Container'
import CalculatorProvider from './CalculatorContext'
function App() {

  return (
    <>
     <CalculatorProvider>
        <Container />
     </CalculatorProvider>
    </>
  )
}

export default App
