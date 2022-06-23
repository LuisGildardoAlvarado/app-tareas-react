import './App.css';
import TDLogo from './components/TDLogo';
// import Task from './components/Tasks';
// import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="task-app">
      <TDLogo/>

      <div className="tasks-principal-list">
        <h1>Mis Tareas</h1>
      </div>
    </div>
  );
}

export default App;
