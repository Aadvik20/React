import AddToDO from "./components/addtodo";
import Navbar from "./components/Navbar";
import Todos from "./components/todos";


const App = () => {
  return (
    <main>
      <h1>TODO  Next + TypeScript</h1>
      <Navbar />
      <AddToDO />
      <Todos/>
    </main>
  )
}

export default App;