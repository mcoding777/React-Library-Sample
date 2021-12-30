import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';

// chart.js로 만든 도넛 차트

// chartjs-plugin-datalabels 플러그인
// Chart.register(ChartDataLabels); => 글로벌 플러그인 (같은 페이지의 모든 차트에 적용됨)
// 차트 속성에 plugins={[ChartDataLabels] 추가 => 개별 플러그인

function DoughnutChart() {

    const data = {
      labels: ['Action', 'Drama', 'Comedy', 'Crime', 'etc'],
      datasets: [
        {
          label: "장르 분포도",
          borderColor: 'white',
          borderWidth: 1,
          backgroundColor: [
              "#fd536d",
              "#ff8957",
              "#eed054",
              "#cbd84a",
              "#00c182",
            ],
          data: [25, 20, 25, 15, 15],
        },
      ],
    };

    const options = {
        maintainAspectRatio: false, // 가로 세로 비율 고정을 어떻게 할 것인가?
        plugins: {
            datalabels: {
                backgroundColor: "black",
                borderRadius: 5,
                padding: 10,
                color: 'white',
                textAlign: 'center',
                formatter: (value, ctx) => {
                    let index = ctx.dataIndex;
                    let label = ctx.chart.data.labels[index];
                    return label + '\n' + value + '%';
                },
              },
            legend: {
                position: 'right',
                labels: {
                    font: {
                        size: 20,
                    },
                    padding: 30, // 범례 사이 간격 : 상하는 조절할 수 없다!
                    usePointStyle: true,
                },
            },
        }
    }
  
    return (
        <div className='DoughnutChart_Container'>
            <Doughnut 
                data={data} 
                options={options} 
                plugins={[ChartDataLabels]} 
            />
        </div>
    )
  }

export default DoughnutChart;