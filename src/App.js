import './App.css';
import MyBarChart from './MyBarChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import RadarChart from './RadarChart';


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
          <br />
          <DoughnutChart />
          <br />
          <RadarChart />
        </main>
      </header>
    </>
  );
}

export default App;
