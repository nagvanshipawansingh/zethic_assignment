import React from 'react';
import Chart from 'react-apexcharts';
import './Charts.css';

function CarMakerChart() {
  return (
    <div className="carMakerChart">
      <Chart
        type="pie"
        width={1200}
        height={600}
        series={[65, 45, 54, 34, 67, 87]}
        options={{
          title: { text: 'Car models on the basis of their Car Maker', style: { fontSize: 20 } },

          noData: { text: 'Empty data', style: { fontSize: 20 } },

          labels: ['Hindi', 'Math', 'Science', 'Computer', 'English', 'History']
        }}
      />
    </div>
  );
}

export default CarMakerChart;
