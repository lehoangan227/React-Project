import Sidebar from "./SideBar";
import "./Admin.scss";
import { Outlet } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar />
      </div>
      <div className="admin-content">
        <div className="admin-header"></div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Admin;
