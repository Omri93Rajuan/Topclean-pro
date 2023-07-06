import React from "react";
import { func, object, string } from "prop-types";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

const CardForm = ({
  onSubmit,
  onReset,
  errors,
  onFormChange,
  onInputChange,
  data,
  title,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      errors={errors}
      onChange={onFormChange}
      styles={{ maxWidth: "800px" }}
      title={title}>
      <Input
        name="company"
        label="חברה"
        error={errors.title}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="title"
        label="שם"
        error={errors.subtitle}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
            <Input
        name="role"
        label="תפקיד"
        error={errors.subtitle}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="description"
        label="תיאור הבעיה"
        error={errors.description}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="phone"
        label="טלפון"
        type="phone"
        error={errors.phone}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="email"
        label="אימייל"
        type="email"
        error={errors.email}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
   
    </Form>
  );
};

CardForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  errors: object.isRequired,
  onFormChange: func.isRequired,
  onInputChange: func.isRequired,
  data: object.isRequired,
  title: string.isRequired,
};

export default React.memo(CardForm);
