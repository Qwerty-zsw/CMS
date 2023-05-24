import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { productsDB } from "../../Datas";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./Products.css";

const UserList = () => {
  const [productsData, setProductsData] = useState(productsDB);
  const productDelete = (productID) => {
    setProductsData(productsData.filter((product) => product.id != productID));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link className="cHover" to={`/product/${params.row.id}`}>
            <div className="userListUser d-flex align-items-center">
              <img
                src={params.row.avatar}
                className="userListImg object-fit-cover me-2"
              />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: "120",
    },
    {
      field: "action",
      headerName: "Action",
      width: "150",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="text-danger cursor-pointer"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userListParent">
      <DataGrid
        rows={productsData}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { pageSize: 3, page: 0 },
          },
        }}
        sx={{
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
