import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import './Charts.css';

function CarMakerChart() {
  const carManufacturer = useSelector((state) => state.data.chartDetails.carManufacturer);
  if (Object.keys(carManufacturer).length === 0) return <></>;
  console.log({ carManufacturer });

  return (
    <div className="carMakerChart">
      <Chart
        type="pie"
        width="100%"
        height={600}
        series={Object.values(carManufacturer)}
        options={{
          title: { text: 'Car models on the basis of their Car Maker', style: { fontSize: 20 } },

          noData: { text: 'Empty data', style: { fontSize: 20 } },

          labels: Object.keys(carManufacturer)
        }}
      />
    </div>
  );
}

export default CarMakerChart;
