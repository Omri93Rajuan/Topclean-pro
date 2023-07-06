import { shape, string, number, arrayOf, oneOfType, bool } from "prop-types";
import addressType from "./addressType";
import imageType from "./imageType";

const cardType = shape({
  _id: string,
  company: string.isRequired,
  title: string.isRequired,
  role: string.isRequired,
  description: string.isRequired,
  phone: string.isRequired,
  likes: arrayOf(string).isRequired,
  email: string.isRequired,
  user_id: string.isRequired,
  createdAt: string.isRequired,
  isDone:bool.isRequired
});

export default cardType;
