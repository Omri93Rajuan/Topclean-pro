import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import Req from "../components/Req";

const CrmPage = () => {
  const { user } = useUser();
  const { handleGetCards, handleDeleteCard,handleAdminUpdate, value } = useCards();
  const { error, isLoading, cards } = value;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isAdmin) return navigate(ROUTES.CARDS);
    handleGetCards();
  }, [handleGetCards, navigate, user]);

  const onDeleteCard = async (userId) => {
    await handleDeleteCard(userId);
    await handleGetCards();
  };

  //   const onUpdateUser = async (userId) => {
  //     await handleChangeBusinessStatus(userId,user);
  //     await handleGetUsers();
  //   };

  return (
    <Container>
      <PageHeader
        title="מערכת CRM  "
        subtitle="כאן תוכלו למצוא מערכת לניהול בקשות של חברת TOP שירותי ניקיון"
      />
      {isLoading && <Spinner />}
      {error && <Error errorMessage={error} />}
      {!cards && <Typography>אופס... נראה שאין נתונים להציג</Typography>}
      {cards && (
        <Req
          cards={cards}
          onDelete={(parmas) => (id) => {
            onDeleteCard(parmas.id);
          }}
          onChangeStatus={(parmas) => async (id) => {
             parmas.row.isDone = !parmas.row.isDone 
             await handleAdminUpdate(parmas.id,parmas.row)
            console.log(parmas);
            await handleGetCards();

            ;
          }}
        />
      )}
    </Container>
  );
};

export default CrmPage;
