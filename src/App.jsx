import { useContext } from "react"
import { CounterProvider, CounterContext } from "./Reducer"


const Counter = () => {

  const { state, dispatch } = useContext(CounterContext)

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  )
}

function App() {

  return (

    <div>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  )
}


export default App
