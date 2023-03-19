import { SearchMovie } from './features/search';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Kino</h1>
      <div className="card">
        <SearchMovie />
      </div>
      <p className="read-the-docs">Copyrajt, orajt </p>
    </div>
  );
}

export default App;
