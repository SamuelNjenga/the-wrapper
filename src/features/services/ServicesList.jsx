import React from "react";

import "./ServicesList.css";

const ServicesList = () => {
  return (
    <div>
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-secondary"></i>
                </div>
                <h3 className="h4 mb-2 service-maintext">On Time Delivery</h3>
                <p className="text-muted mb-0 service-minitext">
                  Meeting the deadline head on
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-secondary"></i>
                </div>
                <h3 className="h4 mb-2 service-maintext">Good Quality Job</h3>
                <p className="text-muted mb-0 service-minitext">
                  Reliable and efficient job
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-globe fs-1 text-secondary"></i>
                </div>
                <h3 className="h4 mb-2 service-maintext">Over Deliver</h3>
                <p className="text-muted mb-0 service-minitext">
                  Going a step more than enough
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-heart fs-1 text-secondary"></i>
                </div>
                <h3 className="h4 mb-2 service-maintext">The Passion</h3>
                <p className="text-muted mb-0 service-minitext">
                  I love what I do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesList;
