import React from "react";

const Tables = () => {
  return (
    <section>
      <div className=" card table-responsive">
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
                          <span className="text-secondary fs-7">
                            United States
                          </span>
                        </td>
                        <td>
                          <h6 className="mb-1">Bootstrap</h6>
                          <span className="text-secondary fs-7">v5.3+</span>
                        </td>
                        <td>
                          <span className="badge bg-danger bsb-w-85">
                            Pending
                          </span>
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
                          <span className="text-secondary fs-7">
                            United Kingdom
                          </span>
                        </td>
                        <td>
                          <h6 className="mb-1">WordPress</h6>
                          <span className="text-secondary fs-7">v6.3+</span>
                        </td>
                        <td>
                          <span className="badge bg-success bsb-w-85">
                            Paid
                          </span>
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
                          <span className="badge bg-warning bsb-w-85">
                            Active
                          </span>
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
                          <span className="badge bg-primary bsb-w-85">
                            Closed
                          </span>
                        </td>
                        <td>$1230</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
    </section>
  );
};

export default Tables;
