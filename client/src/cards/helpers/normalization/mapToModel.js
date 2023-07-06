const mapCardToModel = (card) => {
  return {
    company: card.company,
    title: card.title,
    role: card.role,
    description: card.description,
    phone: card.phone,
    email: card.email,
   
  };
};

export default mapCardToModel;
