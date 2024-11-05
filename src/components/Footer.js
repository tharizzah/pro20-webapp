import React from "react";

const Footer = () => {
  return (
    <section className="section footer">
      <div className="w-layout-blockcontainer container-grow w-container">
        <h3 className="heading-3">
          Calling all labels, publishers and advertisers:
        </h3>
        <div className="footer-text">info@dmlsolutions.awsapps.com</div>
        <a
          href="mailto:info@dmlsolutions.awsapps.com?subject=DML.solutions%20Web%20Inquiry"
          className="button ns w-inline-block"
        >
          <div>Contact Now</div>
        </a>
      </div>
      <div className="footerbottom">
        <div className="w-layout-blockcontainer container-grow w-container">
          <div className="space-between _100 line">
            <div className="footer-text">©2024 TuneGevity</div>
            <h3 className="heading-4">TuneGevity</h3>
            <a href="#" className="button ns w-inline-block">
              <div>Purchase Now</div>
            </a>
          </div>
          <div className="spacer20"></div>
          <div className="space-between _100">
            <div className="footer-text">FAQ Privacy Policy</div>
            <div className="footer-text">Social Media</div>
          </div>
        </div>
        <div className="spacer20"></div>
      </div>
    </section>
  );
};

export default Footer;
