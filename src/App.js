import './App.css';
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
