import './App.css'
import Greeter from './Greeter'
import Die from './Die'


function App() {
  return (
    <>
      <Greeter person="Bill" from="Ivan" />
      <Greeter person="Ted" from="Yana" />
      <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={12} />
    </>
  )
}

export default App
