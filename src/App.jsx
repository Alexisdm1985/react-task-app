import { TaskContentProvider } from "./context/taskContent"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {
  return (
    <main>
      <TaskContentProvider>
        <TaskForm/>
        <TaskList/>
      </TaskContentProvider>
    </main>
  )

};

export default App
