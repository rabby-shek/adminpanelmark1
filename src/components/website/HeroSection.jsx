import React from "react";

const HeroSection = () => {
  return (
    <section className="container-fluid" id="home">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6" data-aos="fade-left">
            <img
              src="https://www.shutterstock.com/image-photo/admin-word-built-letter-cubes-600nw-1634303020.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              The responsive left-aligned hero with image is a popular design
              choice for creating visually impactful and attention-grabbing
              website headers. In this design, the hero section is positioned on
              the left side of the page, allowing the image to take center
              stage. The hero image can be a captivating photograph, an
              illustration, or a visually appealing graphic that represents the
              website's purpose or theme.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
