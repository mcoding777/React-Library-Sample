import { Chart } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';

// chart.js로 만든 도넛 차트
// pie 차트는 chart로 사용하면 라벨이 이상하게 나온다

Chart.register(ChartDataLabels);
// 모든 차트에 적용되는거라 다른 차트에도 labels이 나옴... 살려줘

function Chart4() {

    const data = {
      labels: ['Action', 'Drama', 'Comedy', 'Crime', 'etc'],
      datasets: [
        {
          label: "장르 분포도",
          borderColor: 'white',
          borderWidth: 1,
          backgroundColor: ["red", "orange", "yellow", "green", "blue"],
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
                    padding: 30, // 범례 사이 간격 : 상하는 조절할 수 없다!
                    usePointStyle: true,
                },
            },
        },
    }
  
    return (
        <div className='chart4Container'>
            <Pie type="bar" data={data} options={options} />
        </div>
    )
  }

export default Chart4;