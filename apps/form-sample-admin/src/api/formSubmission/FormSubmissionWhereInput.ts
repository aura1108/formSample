import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FormSubmissionWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  pan?: StringNullableFilter;
  phone?: StringNullableFilter;
};
