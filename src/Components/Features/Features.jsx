import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Features.css";

const Features = () => {
  return (
    <div className="w-100 d-flex justify-content-between">
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,000</span>
          <span className="featureRate">
            -11.4 <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <div>
            <span className="featureDesc">Compared to last month</span>
          </div>
      </div>
      
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,000</span>
          <span className="featureRate">
            -11.4 <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <div>
            <span className="featureDesc">Compared to last month</span>
          </div>
      </div>

      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,000</span>
          <span className="featureRate">
            -11.4 <ArrowUpwardIcon className="featureIcon" />
          </span>
        </div>
        <div>
            <span className="featureDesc">Compared to last month</span>
          </div>
      </div>

    </div>
  );
};

export default Features;
