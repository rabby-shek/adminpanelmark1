import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <section className="container-fluid bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="text-center mb-3">
                  <NavLink to="/">
                    {/* <img
                      src="./assets/img/bsb-logo.svg"
                      alt="BootstrapBrain Logo"
                      width={175}
                      height={57}
                    /> */}
                    Mark 1
                  </NavLink>
                </div>
                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                  Sign Up in to your account
                </h2>
                <form action="#!">
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          defaultValue
                          placeholder="Password"
                          required
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="confirm-password"
                          id="confirm-password"
                          defaultValue
                          placeholder="Confirm password"
                          required
                        />
                        <label
                          htmlFor="confirm-password"
                          className="form-label"
                        >
                          Confirm Password
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-3">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="m-0 text-secondary text-center">
                        Already have an account?
                        <NavLink
                          to="/auth/login"
                          className="link-primary text-decoration-none"
                        >
                          Login
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
