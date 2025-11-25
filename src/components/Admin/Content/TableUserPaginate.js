import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
const TableUserPaginate = (props) => {
  const {
    listUser,
    handleClickBtnView,
    pageCount,
    fetchListUsersWithPagination,
  } = props;
  const handlePageClick = (event) => {
    console.log(`User requested page number ${event.selected}`);
    fetchListUsersWithPagination(+event.selected + 1);
    props.setCurrentPage(+event.selected + 1);
  };

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        handleClickBtnView(item.id);
                      }}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => {
                        props.handleClickBtnUpdate(item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        props.handleClickBtnDelete(item);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listUser.length === 0 && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel="< Prev"
        nextLabel="Next >"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        // eslint-disable-next-line no-unused-vars
        hrefBuilder={(page, pageCount, selected) =>
          page >= 1 && page <= pageCount ? `/page/${page}` : "#"
        }
        hrefAllControls
        forcePage={props.currentPage - 1}
        onClick={(clickEvent) => {
          console.log("onClick", clickEvent);
          // Return false to prevent standard page change,
          // return false; // --> Will do nothing.
          // return a number to choose the next page,
          // return 4; --> Will go to page 5 (index 4)
          // return nothing (undefined) to let standard behavior take place.
        }}
      />
    </>
  );
};
export default TableUserPaginate;
