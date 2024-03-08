import "./stylesheet/main.css";
import Display from "./components/Display";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <AddTodo />
      <Display />
    </div>
  );
}

export default App;
