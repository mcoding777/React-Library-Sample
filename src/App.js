import './App.css';
import MyBarChart from './MyBarChart';
import LineChart from './react-chartjs-2/LineChart';
import BarChart from './react-chartjs-2/BarChart';
import PieChart from './react-chartjs-2/PieChart';
import DoughnutChart from './react-chartjs-2/DoughnutChart';
import RadarChart from './react-chartjs-2/RadarChart';
import CenterSlider from './react-slick/CenterSlider';
import BasicTable from './MUI/BasicTable';
import CustomTable from './MUI/CustomTable';

function App() {
  return (
    <>
      <header className="App">
        <h1>Hello, React Library</h1>
        <main>
          <MyBarChart />
          <LineChart />
          <BarChart />
          <PieChart />
          <DoughnutChart />
          <RadarChart />
          <CenterSlider />
          <BasicTable />
          <CustomTable />
        </main>
      </header>
    </>
  );
}

export default App;
