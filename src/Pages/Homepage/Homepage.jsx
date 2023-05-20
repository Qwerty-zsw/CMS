import Chart from "../../Components/Chart/Chart";
import Features from "../../Components/Features/Features";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
import { xAxisData } from "../../Datas";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey={"Sale"} />
      <div className="home">
        <WidgetSm />
      </div>
    </div>
  );
};

export default Homepage;
