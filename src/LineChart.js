import 'chart.js/auto'
import { Line } from 'react-chartjs-2'

// chart.js로 만든 라인 차트
// 다른 차트와 다르게 import 'chart.js/auto'를 빼면 오류가 발생한다

function LineChart() {

    const data = {
      labels: ['2017', '2018', '2019', '2020', '2021(9월까지)'],
      datasets: [
        {
          type: 'line',
          label: '영화관 관객수',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2,
          data: [219876227, 216385269, 226678777, 59524093, 59540088],
          tension: 0.5, // 선을 얼마나 부드럽게 할 것인가
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
          // datalabels: {
          //   display: false,
          // },
          legend: { // 범례 스타일링
            labels: {
              usePointStyle: true,  // 라벨 아이콘을 도형과 동일하게 할 것인가?
              },
          }
        }
      };
  
    return (
        <div className='LineChart_Container'>
            <Line data={data} options={options} />
        </div>
    )
  }

export default LineChart;