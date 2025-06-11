import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FormSubmissionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="PAN" source="pan" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
