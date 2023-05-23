import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'

function App() {
  return (
    <>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      {/* <ListPicker values={[1, 2, 3]} /> */}
      {/* <Greeter person="Bill" from="Ivan" />
      <Greeter person="Ted" from="Yana" />
      <Greeter />
      <Die numSides={20} />
      <Die />
      <Die numSides={12} /> */}
    </>
  )
}

export default App
