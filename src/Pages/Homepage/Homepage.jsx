import Chart from "../../Components/Chart/Chart";
import Features from "../../Components/Features/Features";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
import { xAxisData } from "../../Datas";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="w-100 h-100 home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey={"Sale"} />
      <div className="home d-flex">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Homepage;
