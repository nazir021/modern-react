import './App.css';
import pokemonData from './mockData/pokemon.json'
import TableRow from './components/TableRow'
import TableHead from './components/TableHead';

const App = () => {
  return (
    <div className="App">
      <div>
        <h1 className="title">Pokemon Search</h1>
        <table width="100%">
          <thead>
            <TableHead />
          </thead>
          <tbody>
            {pokemonData?.map((pokemon, index) => (
              <TableRow key={index} pokemon={pokemon} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
