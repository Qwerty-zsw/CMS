import "./Navbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  return (
    <div className="MainNav w-100 position-fixed top-0 ">
        <div className="NavWrapper h-100 d-flex justify-content-between align-items-center">
            <div className="LeftSide">
                <span className="logo fw-bold fs-3 align-items-center" style={{color:"darkblue"}}>CMS</span>
            </div>

            <div className="RightSide d-flex align-items-center">
                <div className="icon me-3 position-relative">
                    <NotificationsNoneIcon />
                    <span className="iconNotif position-absolute bg-danger d-flex justify-content-center align-items-center rounded-circle">2</span>
                </div>
                <div className="icon me-3 position-relative">
                    <LanguageIcon />
                    <span className="iconNotif position-absolute bg-danger d-flex justify-content-center align-items-center rounded-circle">2</span>
                </div>
                <div className="icon me-3 position-relative">
                    <SettingsIcon />
                </div>

                <div className="profilePic">
                    <img style={{borderRadius:"50%"}} className="w-100 h-100" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="#" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar