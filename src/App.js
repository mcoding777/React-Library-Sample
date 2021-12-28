import './App.css';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';

function App() {
  return (
    <>
      <header className="App">
        <h1>Hello, JS Chart</h1>
        <main>
          <Chart1 />
          <br />
          <Chart2 />
          <br />
          <Chart3 />
        </main>
      </header>
    </>
  );
}

export default App;
