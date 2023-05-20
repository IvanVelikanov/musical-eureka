import './App.css'
import Greeter from './Greeter'
import Die from './Die'


function App() {
  return (
    <>
      <Greeter person="Bill" from="Ivan" />
      <Greeter person="Ted" from="Yana" />
      <Greeter />
      <Die numSides={20} />
      <Die />
      <Die numSides={12} />
    </>
  )
}

export default App
