import BarChart from './components/BarChart';
import { useState } from 'react';
import { UserData } from './Data';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import DataEntryForm from './components/DataEntryForm';
import GptPrompt from './components/GptPrompt';
import Navbar from './components/Navbar';

function App() {
  const [chartType, setChartType] = useState("line")
  const [chartData, setChartData] = useState([UserData,{
    lineName:'Users Gained',
    yName:'Users',
    xName:'Year'
    }])
  const [graphIt, setGraphIt] = useState({
    labels:chartData[0].map((data) => data.year),
    datasets: [{
      label: chartData[1].lineName,
      data:chartData[0].map((data) => data.userGain),
    }]
  })

  function displayChart() {
    const options = {
      plugins: {
        title: {
            display: true,
            text: chartData[1].graphTitle
        },
      },
      responsive: true,
      maintainAspectRatio:false,
      scales: {
        y: {
          title: {
            display: true,
            text: chartData[1].yName
          }
        },
        x: {
          title: {
            display: true,
            text: chartData[1].xName
          }
        }
      } 
    }

    let graph = ""
      switch (chartType) {
        case 'line': 
          graph =  <LineChart chartData={graphIt} options={options}/>
          break;
        case 'bar': 
          graph =  <BarChart chartData={graphIt} />
          break;  
        case 'pie': 
          graph =  <PieChart chartData={graphIt} />
          break;  
        default:
          console.log("default case")
      }
      return graph
  }

  function collectData(dataPoints,label) {
    setChartData([dataPoints.map(data => {
      console.log(data.y, data.x)
      return (
        {
          id:data.id,
          [label.yName]: data.y,
          [label.xName]: data.x,
        }
      )
    }),label])
    console.log(chartData)
    setGraphIt({
      labels:chartData[0].map((data) => Number(data[label.xName])),
      datasets: [{
        label: `${label.lineName}`,
        data:chartData[0].map((data) => Number(data[label.yName])),
      }]
    })
  }

  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer">
        <DataEntryForm collectData={collectData} displayChart={setChartType} chartType= {chartType}/>
        {displayChart()}
        <GptPrompt data={chartData} chart={displayChart()}/>
      </div>
    </div>
  );
}

export default App;
