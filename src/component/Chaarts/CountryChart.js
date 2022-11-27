import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import './Charts.css';

function CountryChart() {
  const countryData = useSelector((state) => state.data.chartDetails.countryVsUser);
  if (Object.keys(countryData).length === 0) return <></>;
  console.log(countryData);

  return (
    <div className="countryChart">
      <Chart
        type="bar"
        width="50%"
        height={600}
        series={[
          {
            name: 'Country Users chart',
            data: Object.values(countryData)
          }
        ]}
        options={{
          title: {
            text: 'User vs Country Bar Chart',
            style: { fontSize: 20 }
          },

          xaxis: {
            categories: Object.keys(countryData),
            title: {
              text: 'Bar chart according to which country users belong',
              offsetX: 0,
              offsetY: 90,
              style: {
                color: '#008FFB',
                fontSize: '16px'
              }
            }
          },

          yaxis: [
            {
              axisTicks: {
                show: true
              },
              axisBorder: {
                show: true,
                color: '#008FFB'
              },
              labels: {
                style: {
                  colors: '#008FFB',
                  fontSize: '12px'
                }
              },
              title: {
                text: 'Income (thousand crores)',
                style: {
                  color: '#008FFB',
                  fontSize: '16px'
                }
              }
            }
          ]
        }}></Chart>
    </div>
  );
}

export default CountryChart;
