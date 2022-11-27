import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import './Charts.css';

function CountryChart() {
  const countryData = useSelector((state) => state.data.chartDetails.countryVsUser);
  if (Object.keys(countryData).length === 0) return <></>;
  console.log(countryData);

  const options = {
    series: [
      {
        data: Object.values(countryData)
      }
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: Object.keys(countryData)
    }
  };

  return (
    <div className="countryChart">
      <Chart
        type="bar"
        width="100%"
        height={600}
        series={[
          {
            name: 'Country Users chart',
            data: Object.values(countryData)
          }
        ]}
        options={options}
      />
    </div>
  );
}

export default CountryChart;
