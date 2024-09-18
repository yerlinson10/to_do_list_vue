import * as yup from "yup";

export const schemaTask = yup.object({
  title: yup.string().min(2).max(50).required(),
  description: yup.string().min(2).max(255),
});
