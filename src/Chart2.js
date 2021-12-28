import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

// chart.js로 만든 라인 차트

function Chart2() {

    const data = {
      labels: ['2017', '2018', '2019', '2020', '2021(9월까지)'],
      datasets: [
        {
          type: 'line',
          label: '영화관 관객수',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2,
          data: [219876227, 216385269, 226678777, 59524093, 59540088],
          tension: 0.5,
          yAxisID: 'y0', // 축 id
        },
        {
          type: 'line',
          label: 'OTT 구독자수',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          data: [11692.71, 15794.34, 20156.45, 24996.06, 21988.53],
          tension: 0.5,
          yAxisID: 'y1',
        },
      ],
    };
    
    const options = {
      scales: { // 축 스타일링
          y0: {   // 축 id별로 스타일링 객체로 넣기
              id: 'y0',
              type: 'linear',
              display: true,
              position: 'left',
              grid: { // 축 기준이 되는 grid 스타일링
                  borderColor: "rgb(54, 162, 235)",
                }
          },
          y1: {
              id: 'y1',
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                  borderColor: "rgb(255, 99, 132)",
                }
          },
      },
      plugins: {
          legend: { // 범례 스타일링
            labels: {
              usePointStyle: true,
              // 범례 도형 모양과 관련된 속성으로, false일 경우엔 기본 직사각형 도형으로 표시됩니다.
              },
          }
      }
  };
  
    return (
        <div className='chart2Container'>
            <Chart type="line" data={data} options={options} />
        </div>
    )
  }

export default Chart2;