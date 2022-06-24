import './App.css';
import TasksList from './components/TasksList';
import TDLogo from './components/TDLogo';

function App() {
  return (
    <div className="task-app">
      <TDLogo/>

      <div className="tasks-principal-list">
        <h1>Mis Tareas</h1>
        <TasksList/>
      </div>
    </div>
  );
}

export default App;
