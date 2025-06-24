import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password_hash: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  department: Yup.string().required("Department is required"),
  role_id: Yup.number()
    .oneOf([1, 2, 3], "Invalid role")
    .required("Role is required"),
  is_active: Yup.boolean().required("Status is required"),
});
