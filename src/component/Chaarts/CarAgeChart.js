import React from 'react';
import Chart from 'react-apexcharts';
import './Charts.css';

function CarAgeChart() {
  return (
    <div className="carAgeChart">
      <Chart
        type="pie"
        width={1200}
        height={600}
        series={[65, 45, 54, 34, 67, 87]}
        options={{
          title: { text: 'Chart on the basis of  cars age', style: { fontSize: 20 } },

          noData: { text: 'Empty data', style: { fontSize: 20 } },

          labels: ['Hindi', 'Math', 'Science', 'Computer', 'English', 'History']
        }}
      ></Chart>
    </div>
  );
}

export default CarAgeChart;
