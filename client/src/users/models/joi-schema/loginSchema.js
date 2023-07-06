import Joi from "joi";

const loginSchema = {
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: `דוא"ל אינו תקין` })
    .required(),

  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message:
        "הסיסמה חייבת לכלול 7 תווים, אות גדולה וקטנה באנגלית ואחד מהסימנים הבאים: !@#$%^&*-",
    })
    .required(),
};

export default loginSchema;
