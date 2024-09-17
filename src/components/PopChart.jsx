import { useState } from 'react';
import Chart from 'react-apexcharts';

const PopChart = () => {
  const [options, setOptions] = useState({
    chart: {
      background: '#f4f4f4',
      foreColor: '#333',
    },
    xaxis: {
      categories: [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Philadelphia',
        'Phoenix',
        'San Antonio',
      ],
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    fill: {
      colors: ['#f44336'],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Largest US Cities Population',
      align: 'center',
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: '25px',
      },
    },
  });
  const [series] = useState([
    {
      name: 'Population',
      data: [22343, 134349, 328734, 223048, 238042, 234879, 203474],
    },
  ]);

  const handleHorizontal = () => {
    setOptions({
      ...options,
      plotOptions: {
        ...options.plotOptions,
        bar: {
          ...options.plotOptions.bar,
          horizontal: !options.plotOptions.bar.horizontal,
        },
      },
    });
  };

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={'450'}
        width={'100%'}
      />
      <button onClick={handleHorizontal}>Change View</button>
    </>
  );
};
export default PopChart;
