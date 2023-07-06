import { arrayOf, func } from "prop-types";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CachedIcon from "@mui/icons-material/Cached";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import cardType from "../models/types/cardType";

const CardsCrm = ({ cards, onDelete, onChangeStatus, handleGetUser }) => {
const navigate = useNavigate()
  const columns = [
    { field: "idNumber", headerName: "מספר", width: 90 },
    { field: "company", headerName: "שם חברה", width: 130 },
    { field: "name", headerName: "שם", width: 130 },
    { field: "email", headerName: "אימייל", width: 130 },
    { field: "phone", headerName: "טלפון", width: 130 },
    {
      field: "isDone",
      headerName: "בוצע",
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
  const rows = Array.from(cards, (card, i) => {
    return {
      id: card._id,
      idNumber: i + 1,
      name: card.title,
      company: card.company,
      email: card.email,
      phone: card.phone,
      isDone: card.isDone,
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

CardsCrm.propTypes = {
  cards: arrayOf(cardType),
  onDelete: func.isRequired,
  onChangeStatus: func.isRequired,
};

export default CardsCrm;
