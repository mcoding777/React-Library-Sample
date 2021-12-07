import './App.css';

function App() {

  function Chart1() {
    return (
      <div className="chart1">
          <div style={{height: 100}}><span>능력<br/>발휘</span></div>
          <div style={{height: 100}}><span>자율성</span></div>
          <div style={{height: 100}}><span>보수</span></div>
          <div style={{height: 100}}><span>안정성</span></div>
          <div style={{height: 100}}><span>사회적<br/>인정</span></div>
          <div style={{height: 100}}><span>사회<br/>봉사</span></div>
          <div style={{height: 100}}><span>자기<br/>계발</span></div>
          <div style={{height: 100}}><span>창의성</span></div>
      </div>
    )
  }
  
  return (
    <>
      <header className="App">
        <h1>Hello, JS Chart</h1>
      </header>
      <main>
        <Chart1 />
      </main>
    </>
  );
}

export default App;
