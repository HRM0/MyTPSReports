import BarChart from './components/BarChart';
import { useState } from 'react';
import { UserData } from './Data';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import DataEntryForm from './components/DataEntryForm';

function App() {
  const [chartType, setChartType] = useState("line")
  const [chartData, setChartData] = useState(UserData)
  const [graphIt, setGraphIt] = useState({
    labels:chartData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data:chartData.map((data) => data.userGain),
    }]
  })

  function displayChart() {
    let graph = ""
      switch (chartType) {
        case 'line': 
          graph =  <LineChart chartData={graphIt} />
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

  function collectData(dataPoints) {
    setChartData(dataPoints)
    setGraphIt({
      labels:chartData.map((data) => Number(data.year)),
      datasets: [{
        label: "Users Gained",
        data:chartData.map((data) => Number(data.userGain)),
      }]
    })
    console.log(dataPoints)
  }

  return (
    <div className="App">
      <DataEntryForm collectData={collectData}/>
      {displayChart()}
      {/* <BarChart chartData={userData} />
      <LineChart chartData={userData} />
      <PieChart chartData={userData} /> */}
    </div>
  );
}

export default App;
