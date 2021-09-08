import { useMachine } from "@xstate/react";
import { machine } from "./machine";

function App() {
  const [current, send] = useMachine(machine);

  return (
    <div className="App">
      <div className="lightbulb" data-brightness={current.value}></div>
      <div className="state">Machine state: <strong>{current.value}</strong></div>
      <button onClick={() => send('CYCLE')}>Cycle</button>
    </div>
  );
}

export default App;
