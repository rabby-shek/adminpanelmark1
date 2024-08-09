import React from "react";
import RightArrowIcon from "../../assets/svg/RightArrowIcon";

const FeaturesSection = () => {
  const featuresCardItems = [
    {
      id: 1,
      title: "Market Research",
      description:
        "We can help you to understand your target market and identify new opportunities for growth. We offer a variety of market research services, interviews, and focus groups.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          fill="currentColor"
          className="bi bi-pie-chart"
          viewBox="0 0 16 16"
        >
          <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Web Design",
      description:
        "We can help you to create a visually appealing and user-friendly website. We take into account your brand identity and target audience when designing your website.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          fill="currentColor"
          className="bi bi-aspect-ratio"
          viewBox="0 0 16 16"
        >
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
          <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "SEO Services",
      description:
        "We can help you to improve your website's visibility in search engine results pages (SERPs). This can lead to more traffic to your website and more conversions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          fill="currentColor"
          className="bi bi-airplane-engines"
          viewBox="0 0 16 16"
        >
          <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Content Marketing",
      description:
        "We can help you to promote your business online through a variety of digital marketing channels, including SEO, PPC, social media marketing, and email marketing..",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          fill="currentColor"
          className="bi bi-alarm"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
          <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
        </svg>
      ),
    },
  ];
  return (
    <section className="py-5 py-xl-8" id="features">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center" data-aos="fade-down">
              Services
            </h2>
            <p className="text-secondary mb-5 text-center" data-aos="fade-down">
              We are dedicated to delivering exceptional services that drive
              success and transform your business. With a commitment to
              excellence, we take pride in offering a comprehensive range of
              services.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>
      <div className="container overflow-hidden">
        <div className="row gy-5 gx-md-4 gy-lg-0 gx-xxl-5 justify-content-center">
          {featuresCardItems.map((item) => {
            return (
              <div className="col-11 col-sm-6 col-lg-3" data-aos="flip-left">
                <div className="badge bg-primary p-3 mb-4">{item.icon}</div>
                <h4 className="mb-3">{item.title}</h4>
                <p className="mb-3 text-secondary">{item.description}</p>
                <a
                  href="#!"
                  className="fw-bold text-decoration-none link-primary"
                >
                  Learn More
                  <RightArrowIcon />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
