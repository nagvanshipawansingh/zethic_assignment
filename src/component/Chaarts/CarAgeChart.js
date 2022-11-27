import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import './Charts.css';

function CarAgeChart() {
  const carAge = useSelector((state) => state.data.chartDetails.carAge);
  if (Object.keys(carAge).length === 0) return <></>;
  console.log({ carAge });

  return (
    <div className="carAgeChart">
      <Chart
        type="pie"
        width="100%"
        height={600}
        series={Object.values(carAge)}
        options={{
          title: { text: 'Chart on the basis of  cars age', style: { fontSize: 20 } },
          noData: { text: 'Empty data', style: { fontSize: 20 } },
          labels: Object.keys(carAge).map((age) => `${age} years`)
        }}></Chart>
    </div>
  );
}

export default CarAgeChart;
