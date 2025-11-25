import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUsers } from "../../../service/ApiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
import { getUsersWithPagination } from "../../../service/ApiService";
import { set } from "lodash";
const ManageUser = () => {
  const LIMIT_USER = 1;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [dataUpdate, setDataUpdate] = useState({});
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fetchListUsersWithPagination(1);
  }, []);
  const fetchListUsersWithPagination = async (page) => {
    let res = await getUsersWithPagination(page, LIMIT_USER);
    if (res.EC === 0) {
      console.log("check res:", res.DT);
      setListUser(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnView = (userId) => {
    if (listUser && listUser.length > 0 && userId) {
      setUserDetail(listUser.find((item) => item.id === userId));
    }
    setShowModalViewUser(true);
  };

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setUserDetail(user);
  };
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-secondary"
            onClick={() => setShowModalCreateUser(true)}
          >
            Add New User
          </button>
        </div>
        <div className="table-user-container">
          <TableUserPaginate
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUsersWithPagination={fetchListUsersWithPagination}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <ModalCreateUser
        showModalCreateUser={showModalCreateUser}
        setShowModalCreateUser={setShowModalCreateUser}
        fetchListUsersWithPagination={fetchListUsersWithPagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ModalUpdateUser
        showModalUpdateUser={showModalUpdateUser}
        setShowModalUpdateUser={setShowModalUpdateUser}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        fetchListUsersWithPagination={fetchListUsersWithPagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ModalViewUser
        showModalViewUser={showModalViewUser}
        setShowModalViewUser={setShowModalViewUser}
        userDetail={userDetail}
      />
      <ModalDeleteUser
        showModalDeleteUser={showModalDeleteUser}
        setShowModalDeleteUser={setShowModalDeleteUser}
        userDetail={userDetail}
        fetchListUsersWithPagination={fetchListUsersWithPagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ManageUser;
