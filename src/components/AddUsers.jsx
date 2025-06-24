import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "../schema/AddUsersSchema";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password_hash: "",
      first_name: "",
      last_name: "",
      role_id: 1,
      is_active: true,
      department: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log("Form submitted:", values);
      setTimeout(() => {
        resetForm();
        setSubmitting(false);
      }, 500);
    },
  });

  return (
    <div className="p-4">
      <h3 className="border-bottom pb-2 mb-4">Add Users</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="mb-3 col-12 col-md-4">
            <label className="form-label fw-semibold">
              Username <span className="text-danger"> *</span> :
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-danger">{formik.errors.username}</div>
            )}
          </div>
          <div className="mb-3 col-12 col-md-4">
            <label className="form-label fw-semibold">
              Email <span className="text-danger"> *</span> :
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-3 col-12 col-md-4">
            <label className="form-label fw-semibold">
              Password <span className="text-danger"> *</span> :
            </label>
            <input
              type="password"
              name="password_hash"
              className="form-control"
              placeholder="Enter password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password_hash}
            />
            {formik.touched.password_hash && formik.errors.password_hash && (
              <div className="text-danger">{formik.errors.password_hash}</div>
            )}
          </div>
          <div className="mb-3 col-12 col-md-4">
            <label className="form-label fw-semibold">
              First Name <span className="text-danger"> *</span> :
            </label>
            <input
              type="text"
              name="first_name"
              className="form-control"
              placeholder="Enter first name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <div className="text-danger">{formik.errors.first_name}</div>
            )}
          </div>

          <div className="mb-3 col-12 col-md-4">
            <label className="form-label fw-semibold">
              Last Name <span className="text-danger"> *</span> :
            </label>
            <input
              type="text"
              name="last_name"
              className="form-control"
              placeholder="Enter last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <div className="text-danger">{formik.errors.last_name}</div>
            )}
          </div>

          <div className="mb-3 col-12 col-md-4">
            <label className="form-label fw-semibold">
              Role <span className="text-danger"> *</span> :
            </label>
            <select
              name="role_id"
              className="form-select"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role_id}
            >
              <option value={1}>Admin</option>
              <option value={2}>Manager</option>
              <option value={3}>Viewer</option>
            </select>
            {formik.touched.role_id && formik.errors.role_id && (
              <div className="text-danger">{formik.errors.role_id}</div>
            )}
          </div>

          <div className="mb-3 col-12 col-md-4">
            <label className="form-label fw-semibold">
              Department <span className="text-danger"> *</span> :
            </label>
            <input
              type="text"
              name="department"
              className="form-control"
              placeholder="Enter department"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.department}
            />
            {formik.touched.department && formik.errors.department && (
              <div className="text-danger">{formik.errors.department}</div>
            )}
          </div>

          {/* <div className="mb-3 col-12 col-md-4">
            <label className="form-label fw-semibold">Active</label>
            <div className="form-check">
              <input
                type="checkbox"
                name="is_active"
                id="is_active"
                className="form-check-input"
                checked={formik.values.is_active}
                onChange={() =>
                  formik.setFieldValue("is_active", !formik.values.is_active)
                }
              />
              <label htmlFor="is_active" className="form-check-label ms-2">
                {formik.values.is_active ? "Active" : "Inactive"}
              </label>
            </div>
            {formik.touched.is_active && formik.errors.is_active && (
              <div className="text-danger">{formik.errors.is_active}</div>
            )}
          </div> */}
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate(-1)}
          >
            &lt; Back
          </button>

          <button
            type="submit"
            className="btn btn-success"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
