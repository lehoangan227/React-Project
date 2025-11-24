import { useState } from "react";
import AddNewUser from "./AddNewUser";
import "./ManageUser.scss";
const ManageUser = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(true)}
          >
            Add New User
          </button>
        </div>
        <div className="table-user-container">table users</div>
      </div>
      <AddNewUser show={showModal} setShow={setShowModal} />
    </div>
  );
};

export default ManageUser;
