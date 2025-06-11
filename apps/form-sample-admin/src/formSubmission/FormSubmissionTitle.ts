import { FormSubmission as TFormSubmission } from "../api/formSubmission/FormSubmission";

export const FORMSUBMISSION_TITLE_FIELD = "name";

export const FormSubmissionTitle = (record: TFormSubmission): string => {
  return record.name?.toString() || String(record.id);
};
