// import "react-pro-sidebar/dist/css/style.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to="/admin" />}>Dashboard</MenuItem>
          <MenuItem component={<Link to="/admin/manage-users" />}>
            Manage User
          </MenuItem>
          <MenuItem component={<Link to="/admin/manage-quiz" />}>
            Manage Quiz
          </MenuItem>
        </Menu>
      </Sidebar>
      ;
    </>
  );
};
export default SideBar;
