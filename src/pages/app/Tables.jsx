import React from "react";
import { FaTimes } from "react-icons/fa";
const Tables = () => {
  return (
    <section>
      <div className=" card table-responsive">
        {/* table 1 */}
        <table className="table table-borderless bsb-table-xl text-nowrap align-middle m-0">
          <thead>
            <tr>
              <th>Campaign</th>
              <th>Client</th>
              <th>Project</th>
              <th>Status</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <span className="fs-6 bsb-w-35 bsb-h-35 text-bg-primary rounded-circle d-flex align-items-center justify-content-center me-2">
                    <i className="bi bi-twitter-x" />
                  </span>
                  <div>
                    <h6 className="m-0">Twitter</h6>
                    <span className="text-secondary fs-7">SMM</span>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-1">Oliver</h6>
                <span className="text-secondary fs-7">United States</span>
              </td>
              <td>
                <h6 className="mb-1">Bootstrap</h6>
                <span className="text-secondary fs-7">v5.3+</span>
              </td>
              <td>
                <span className="badge bg-danger bsb-w-85">Pending</span>
              </td>
              <td>$495</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <span className="fs-6 bsb-w-35 bsb-h-35 text-bg-success rounded-circle d-flex align-items-center justify-content-center me-2">
                    <i className="bi bi-facebook" />
                  </span>
                  <div>
                    <h6 className="m-0">Facebook</h6>
                    <span className="text-secondary fs-7">PPC</span>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-1">Emma</h6>
                <span className="text-secondary fs-7">United Kingdom</span>
              </td>
              <td>
                <h6 className="mb-1">WordPress</h6>
                <span className="text-secondary fs-7">v6.3+</span>
              </td>
              <td>
                <span className="badge bg-success bsb-w-85">Paid</span>
              </td>
              <td>$950</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <span className="fs-6 bsb-w-35 bsb-h-35 text-bg-danger rounded-circle d-flex align-items-center justify-content-center me-2">
                    <i className="bi bi-github" />
                  </span>
                  <div>
                    <h6 className="m-0">Github</h6>
                    <span className="text-secondary fs-7">PPC</span>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-1">Isabella</h6>
                <span className="text-secondary fs-7">Canada</span>
              </td>
              <td>
                <h6 className="mb-1">React</h6>
                <span className="text-secondary fs-7">v18+</span>
              </td>
              <td>
                <span className="badge bg-info bsb-w-85">Paused</span>
              </td>
              <td>$700</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <span className="fs-6 bsb-w-35 bsb-h-35 bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-2">
                    <i className="bi bi-youtube" />
                  </span>
                  <div>
                    <h6 className="m-0">YouTube</h6>
                    <span className="text-secondary fs-7">SMM</span>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-1">William</h6>
                <span className="text-secondary fs-7">UAE</span>
              </td>
              <td>
                <h6 className="mb-1">Vue</h6>
                <span className="text-secondary fs-7">v3+</span>
              </td>
              <td>
                <span className="badge bg-warning bsb-w-85">Active</span>
              </td>
              <td>$875</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <span className="fs-6 bsb-w-35 bsb-h-35 bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-2">
                    <i className="bi bi-google" />
                  </span>
                  <div>
                    <h6 className="m-0">Google</h6>
                    <span className="text-secondary fs-7">SEM</span>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="mb-1">Preston</h6>
                <span className="text-secondary fs-7">Australia</span>
              </td>
              <td>
                <h6 className="mb-1">Svelte</h6>
                <span className="text-secondary fs-7">v4+</span>
              </td>
              <td>
                <span className="badge bg-primary bsb-w-85">Closed</span>
              </td>
              <td>$1230</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* tables 2 */}
      <div className="card my-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* table 3 */}
      <div className="card my-3">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Status</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt
                    style={{ width: 45, height: 45 }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Software engineer</p>
                <p className="text-muted mb-0">IT department</p>
              </td>
              <td>
                <span className="badge badge-success rounded-pill d-inline">
                  Active
                </span>
              </td>
              <td>Senior</td>
              <td>
                <button
                  type="button"
                  className="btn btn-link btn-sm btn-rounded"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    className="rounded-circle"
                    alt
                    style={{ width: 45, height: 45 }}
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Alex Ray</p>
                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Consultant</p>
                <p className="text-muted mb-0">Finance</p>
              </td>
              <td>
                <span className="badge badge-primary rounded-pill d-inline">
                  Onboarding
                </span>
              </td>
              <td>Junior</td>
              <td>
                <button
                  type="button"
                  className="btn btn-link btn-rounded btn-sm fw-bold"
                  data-mdb-ripple-color="dark"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                    className="rounded-circle"
                    alt
                    style={{ width: 45, height: 45 }}
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Kate Hunington</p>
                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Designer</p>
                <p className="text-muted mb-0">UI/UX</p>
              </td>
              <td>
                <span className="badge badge-warning rounded-pill d-inline">
                  Awaiting
                </span>
              </td>
              <td>Senior</td>
              <td>
                <button
                  type="button"
                  className="btn btn-link btn-rounded btn-sm fw-bold"
                  data-mdb-ripple-color="dark"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* table 4 */}
      <div className="card my-3">
        <div class="table-responsive">
          <table class="table table-borderless mb-0">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <th scope="col">EMPLOYEES</th>
                <th scope="col">POSITION</th>
                <th scope="col">AGE</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">Close</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault1"
                      checked
                    />
                  </div>
                </th>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>61</td>
                <td>Edinburgh</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm px-3">
                  <FaTimes />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                    />
                  </div>
                </th>
                <td>Sonya Frost</td>
                <td>Software Engineer</td>
                <td>23</td>
                <td>Edinburgh</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm px-3">
                  <FaTimes />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault3"
                      checked
                    />
                  </div>
                </th>
                <td>Jena Gaines</td>
                <td>Office Manager</td>
                <td>30</td>
                <td>London</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm px-3">
                  <FaTimes />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault4"
                      checked
                    />
                  </div>
                </th>
                <td>Quinn Flynn</td>
                <td>Support Lead</td>
                <td>22</td>
                <td>Edinburgh</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm px-3">
                  <FaTimes />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault5"
                      checked
                    />
                  </div>
                </th>
                <td>Charde Marshall</td>
                <td>Regional Director</td>
                <td>36</td>
                <td>San Francisco</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm px-3">
                  <FaTimes />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault6"
                    />
                  </div>
                </th>
                <td>Haley Kennedy</td>
                <td>Senior Marketing Designer</td>
                <td>43</td>
                <td>London</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm px-3">
                  <FaTimes />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault7"
                      checked
                    />
                  </div>
                </th>
                <td>Tatyana Fitzpatrick</td>
                <td>Regional Director</td>
                <td>19</td>
                <td>Warsaw</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm px-3">
                    <FaTimes />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Tables;
