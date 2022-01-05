import { Radar } from 'react-chartjs-2'
import styled from 'styled-components';

// chart.js로 만든 레이더 차트

function RadarChart() {

    const data = {
      labels: ['SCORE', 'AWARD', 'GLOBAL', 'POPULARITY'],
      datasets: [
        {
          label: '종합지표',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          data: [5, 4, 3, 5],
        },
      ],
    };

    const options = {
        maintainAspectRatio: false, // 가로 세로 비율 고정을 어떻게 할 것인가?
        scales: {
            r: { // 좌표값
              beginAtZero: true, // 0부터 시작할까?
              max: 5,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    }
  
    return (
        <RadarChartDiv>
            <Radar data={data} options={options} />
        </RadarChartDiv>
    )
  }

export default RadarChart;

const RadarChartDiv = styled.div`
  width: 500px;
  height: 300px;

  padding: 30px;
  margin: 100px auto;

  background-color: white;
`;