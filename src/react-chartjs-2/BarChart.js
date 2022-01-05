import styled from 'styled-components';
import { Chart } from 'react-chartjs-2'

// chart.js로 만든 막대 차트

function BarChart() {

    const data = {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [
        {
          type: 'bar',
          label: '릴리즈되는 한국 컨텐츠 수',
          borderColor: 'white',
          borderWidth: 5,
          backgroundColor: '#BDBDBD',
          data: [700, 600, 807, 432, 234, 453],
        },
      ],
    };
  
    return (
        <BarChartDiv>
            <Chart type="bar" data={data} />
        </BarChartDiv>
    )
  }

export default BarChart;

const BarChartDiv = styled.div`
  width: 600px;
  height: 300px;

  padding: 30px;
  margin: 100px auto;

  background-color: white;
`;