import React from "react"
import Chart from "react-apexcharts"
import { useStyles } from "./style"

const chartOptions = {
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "90%",
      endingShape: "rounded"
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  }
}
const Graph = ({ data, themeStatus }) => {
  const classes = useStyles()

  const state = {
    options: {
      ...chartOptions,
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        labels: {
          show: true
        }
      }
    },
    series: [
      {
        name: "submissions",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }

  return (
    <div className='app'>
      <div className='row'>
        <div className='mixed-chart'>
          <Chart
            options={state.options}
            series={state.series}
            type='bar'
            width='100%'
            height='200px'
          />
        </div>
      </div>
    </div>
  )
}

export default Graph
