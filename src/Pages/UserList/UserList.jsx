import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { userRows } from "../../Datas";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./UserList.css";

const UserList = () => {
  const [userDatas, setUserDatas] = useState(userRows);
  const userDelete = (userID) => {
    setUserDatas(userDatas.filter((user) => user.id != userID));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/users/${params.row.id}`}>
            <div className="userListUser d-flex align-items-center">
              <img
                src={params.row.avatar}
                className="userListImg object-fit-cover me-2"
              />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: "200",
    },
    {
      field: "status",
      headerName: "Status",
      width: "120",
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: "160",
    },
    {
      field: "action",
      headerName: "Action",
      width: "150",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="text-danger cursor-pointer"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userListParent">
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { pageSize: 4, page: 0 },
          },
        }}
        sx={{
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
        }}
      />
    </div>
  );
};

export default UserList;
