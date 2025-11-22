import AddNewUser from "./AddNewUser";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div>
          <AddNewUser />
        </div>
        <div>table users</div>
      </div>
    </div>
  );
};

export default ManageUser;
