import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'


function App() {
  return (
    <>
      <ListPicker values={[1, 2, 3]} />
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
