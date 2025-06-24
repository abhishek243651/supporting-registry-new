import logo from "../assets/images/agristacklogo.png";
const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={logo}
              alt="Logo"
              style={{
                maxWidth: "200px",
                transition: "width 0.3s",
                objectFit: "contain",
              }}
            />
          </div>
          <h3 className="card-title text-center text-success ">Login</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </form>
          <p
            className="mt-3 text-center text-muted"
            style={{ fontSize: "0.9rem" }}
          >
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
