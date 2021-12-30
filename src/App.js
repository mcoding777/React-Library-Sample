import './App.css';
import MyBarChart from './MyBarChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

function App() {
  return (
    <>
      <header className="App">
        <h1>Hello, JS Chart</h1>
        <main>
          <MyBarChart />
          <br />
          <LineChart />
          <br />
          <BarChart />
          <br />
          <PieChart />
        </main>
      </header>
    </>
  );
}

export default App;
