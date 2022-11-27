import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import './Charts.css';

function CountryChart() {
  const countryData = useSelector((state) => state.data.chartDetails.countryVsUser);
  console.log(countryData);
  if (Object.keys(countryData).length === 0) return <></>;
  // console.log(Object.keys(countryData));
  const countries = Object.keys(countryData);
  console.log(countries);

  return (
    <div className="countryChart">
      <Chart
        type="bar"
        width="100%"
        height={600}
        series={[
          {
            name: 'Country Users chart',
            data: [2000, 4000, 6000, 8000, 9000, 12000, 13000, 15000, 18000, 35000, 7500]
          }
        ]}
        options={{
          title: {
            text: 'This chart is develope for Zethic assignment ',
            style: { fontSize: 20 }
          },

          xaxis: {
            categories: [
              'China',
              'Nepal',
              'U.K',
              'U.S.A',
              'Russia',
              'Afghanistan',
              'Bhutan',
              'Bangladesh',
              'Myanmar',
              'India ',
              'Sri Lanka '
            ],
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
