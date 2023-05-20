import Chart from "../../Components/Chart/Chart"
import Features from "../../Components/Features/Features"
import { xAxisData } from "../../Datas";
import "./Homepage.css"


const Homepage = () => {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey={"Sale"} />
    </div>
  )
}

export default Homepage