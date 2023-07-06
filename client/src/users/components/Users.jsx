import { arrayOf, func } from "prop-types";
import userType from "../types/userType";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CachedIcon from "@mui/icons-material/Cached";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const Users = ({ users, onDelete, onChangeStatus, handleGetUser }) => {
const navigate = useNavigate()
  const columns = [
    { field: "idNumber", headerName: "מספר", width: 90 },
    { field: "firstName", headerName: "שם חברה", width: 130 },
    { field: "lastName", headerName: "שם", width: 130 },
    { field: "email", headerName: "אימייל", width: 130 },
    { field: "phone", headerName: "טלפון", width: 130 },

    {
      field: "isBusiness",
      headerName: "עסקי",
      type: "boolean",
      width: 90,
      editable: true,
      
    },
    {
      field: "isAdmin",
      headerName: "מנהל",
      type: "boolean",
      width: 90,
      editable: true,
    },
    {
      field: "Delete",
      headerName: "מחיקה",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={onDelete(params)}
          sx={{display:!params.row.isAdmin ?"block" : "none"}}
        />
      ],
    },
    {
      field: "change",
      headerName: "שינוי סטאטוס",
      type: "actions",
      width: 130,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<CachedIcon />}
          label="Change"
          onClick={onChangeStatus(params)}
        />,
      ],
    },
  ];
  const rows = Array.from(users, (user, i) => {
    return {
      id: user._id,
      idNumber: i + 1,
      lastName: user.name.first,
      firstName: user.name.last,
      email: user.email,
      phone: user.phone,
      isAdmin: user.isAdmin,
      isBusiness: user.isBusiness,
    };
  });

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={(params) => navigate(`${ROUTES.USER_PROFILE}/${params.id}`)}

        ></DataGrid>
      </div>
    </>
  );
};

Users.propTypes = {
  cards: arrayOf(userType),
  onDelete: func.isRequired,
  onChangeStatus: func.isRequired,
};

export default Users;
