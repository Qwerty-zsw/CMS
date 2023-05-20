import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "../../Datas";
import "./WidgetSm.css";

const WidgetSm = () => {
  return (
    <div className="WidgetSm">
      <span className="WidgetSmTitle">Title</span>
      <ul className="WidgetSmList">
      {newMembers.map((item) => (
        <li key={item.id} className="WidgetSmListItem w-100 d-flex justify-content-between align-items-center">
          <img className="WidgetSmPic" src={item.img} />
            <div className="WidgetSmUser d-flex flex-column">
              <span className="newName">{item.username}</span>
              <span className="newTitle">{item.title}</span>
            </div>
            <button className="WidgetSmBtn d-flex align-items-center justify-content-center border-0">
              <VisibilityIcon className="fs-6" />
            </button>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
