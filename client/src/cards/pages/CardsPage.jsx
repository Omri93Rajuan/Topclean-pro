import { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const CardsPage = () => {
  const { user } = useUser();
  
  const { handleGetCards, value, handleDeleteCard } = useCards();
  const { error, isLoading,filteredCards} = value;

  useEffect(() => {
    handleGetCards();
  }, []);
  if (!user) return <Navigate replace to={ROUTES.LOGIN} />;

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />

      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default CardsPage;
