import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar position-sticky">
      <div className="sidebarWraper text-muted">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DASHBORD</h3>
          <ul className="sidebarList">
            
            <Link to={"/"}>
            <li className="sidebarListItem activate">
              <LineStyleIcon />
              <span className="ms-1">Home</span>
            </li>
            </Link>
            <Link to={"/analytics"}>
            <li className="sidebarListItem">
              <TimelineIcon />
              <span className="ms-1">Analytics</span>
            </li>
            </Link>
            <Link to={"/sales"}>
            <li className="sidebarListItem">
              <TrendingUpIcon />
              <span className="ms-1">Sales</span>
            </li>
            </Link>
            
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to={"/users"}>
            <li className="sidebarListItem">
              <PermIdentityIcon />
              <span className="ms-1">User</span>
            </li>
            </Link>
            <Link to={"/newUser"}>
            <li className="sidebarListItem">
              <PermIdentityIcon />
              <span className="ms-1">New User</span>
            </li>
            </Link>
            <Link to={"/products"}>
            <li className="sidebarListItem">
              <StorefrontIcon />
              <span className="ms-1">Products</span>
            </li>
            </Link>
            <Link to={"/transactions"}>
            <li className="sidebarListItem">
              <AttachMoneyIcon />
              <span className="ms-1">Transactions</span>
            </li>
            </Link>
            <Link to={"/reports"}>
            <li className="sidebarListItem">
              <BarChartIcon />
              <span className="ms-1">Reports</span>
            </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <Link to={"/Mail"}>
            <li className="sidebarListItem">
              <MailOutlineIcon />
              <span className="ms-1">Mail</span>
            </li>
            </Link>
            <Link to={"/feedback"}>
            <li className="sidebarListItem">
              <DynamicFeedIcon />
              <span className="ms-1">Feedback</span>
            </li>
            </Link>
            <Link to={"/messages"}>
            <li className="sidebarListItem">
              <StorefrontIcon />
              <span className="ms-1">Messages</span>
            </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <Link to={"/manage"}>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon />
              <span className="ms-1">Manage</span>
            </li>
            </Link>
            <Link to={"/analytics"}>
            <li className="sidebarListItem">
              <WorkOutlineIcon />
              <span className="ms-1">Analytics</span>
            </li>
            </Link>
            <Link to={"/reports"}>
            <li className="sidebarListItem">
              <ReportGmailerrorredIcon />
              <span className="ms-1">Reports</span>
            </li>
            </Link>
            
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
