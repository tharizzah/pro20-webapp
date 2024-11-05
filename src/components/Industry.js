import React from "react";
import PieChart from "./PieChart";
import GoogleChart from "./PieChart_g";
import WebChart from "./PieChart_w";
import lotus from "../images/art-Lotus-woman.png";
import cellphone from "../images/art-cellphone-select.png";
import cellwoman from "../images/art-cellphone-woman.png";
import singerwoman from "../images/art-laptop-singer-woman.png";
import legalwoman from "../images/art-legal-woman.png";
import laptops from "../images/art-couple-on-laptops.png";

const Industry = () => {
  return (
    <section className="section">
      <div
        data-w-id="5c263f35-892f-b154-a996-7666ad830466"
        style={{ opacity: 0 }}
        className="w-layout-blockcontainer container w-container"
      >
        <div className="center col">
          <h1 className="heading center">
            Feature-Packed to Meet the Music Industry&#x27;s Needs
          </h1>
          <p>
            New technology moves fast, but copyright law is here to stay. VASTR
            is designed to facilitate digital music licensing contracts that
            align with legal requirements. To ensure comprehensive music asset
            management, our platform offers features that cater to real-world
            licensing needs, including royalty payments, copyright protection,
            and flexible digital agreements.
          </p>
          <div
            className="space-between stretch"
            style={{ width: "100%", marginBottom: "10%" }}
          >
            <PieChart />
            <div className="spacer10"></div>
            <GoogleChart />
            <div className="spacer10"></div>
            <WebChart />
          </div>
        </div>
        <div className="space-between stretch _10p">
          <div>
            <img
              className="image"
              src={lotus}
              alt=""
              style={{ opacity: 0 }}
              sizes="(max-width: 767px) 90vw, 450px"
              data-w-id="84ca5a17-0111-65c7-e6aa-0d0237abadb6"
              loading="lazy"
              //srcset="../images/art-Lotus-woman-p-500.png 500w, ../images/art-Lotus-woman-p-800.png 800w, ../images/art-Lotus-woman.png 960w"
            />
          </div>
          <div className="spacer"></div>
          <div className="div-grow">
            <h2>Instant Payments for Everyone</h2>
            <p>
              VASTR ensures that all royalties are paid instantly upon a stream.
              Artists, producers, and labels can avoid cash flow delays,
              receiving their share of royalties in real-time as soon as a
              customer engages with their content.
              <br />
              <br />
              Our proprietary system works with whatever business model you may
              have in place. Your clients maintain control of their per-stream
              rates while our infrastructure handles the revenue sharing. A
              streamlined transaction fee applies—your platform retains 10% of
              each transaction, VASTR receives 10% for providing the licensing
              infrastructure, and digital stores receive their specified split,
              which can vary between stores. The remaining amount goes to the
              artist.
            </p>
          </div>
        </div>
        <div className="space-between stretch _10p">
          <div className="div-grow">
            <h2>Enhanced Content Protection &amp; Exclusivity Management</h2>
            <p>
              Strengthen your platform's offering with VASTR's proprietary
              protection suite. Our infrastructure enables you to provide your
              clients with flexible content gating options—from pre-release
              campaigns to exclusive streaming rights—while maintaining ironclad
              copyright protection. Your clients can confidently distribute
              exclusive content through your platform, backed by our automated
              piracy prevention system and immediate violation response tools.
              Make your service even more appealing with enterprise-grade
              security that protects your clients’ high-value assets.
            </p>
          </div>
          <div className="spacer"></div>
          <div>
            <img
              src={cellphone}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, (max-width: 991px) 56vw, 450px"
              //srcset="../images/art-cellphone-select-p-500.png 500w, ../images/art-cellphone-select-p-800.png 800w, ../images/art-cellphone-select.png 1080w"
              alt=""
              className="image"
            />
          </div>
        </div>
        <div className="space-between stretch _10p">
          <div>
            <img
              src={cellwoman}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, 450px"
              //srcset="../images/art-cellphone-woman-p-500.png 500w, ../images/art-cellphone-woman-p-800.png 800w, ../images/art-cellphone-woman.png 1080w"
              alt=""
              className="image"
            />
          </div>
          <div className="spacer"></div>
          <div className="div-grow">
            <h2>Open Licensing System</h2>
            <p>
              Create licenses that work for your business model by choosing
              between exclusive or non-exclusive distribution. With VASTR, you
              can customize every aspect of your licenses—from payment terms to
              usage rights. Define specific benefits for license holders, set
              clear terms of use, and maintain complete control over how your
              client's music is distributed and monetized.
            </p>
          </div>
        </div>
        <div className="space-between stretch _10p">
          <div className="div-grow">
            <h2>Master Work’s Share and Publisher’s Share</h2>
            <p>
              VASTR lets you define shares for both Master Work and Publishing
              rights. This saves time and ensures that every stakeholder is
              compensated accurately.
            </p>
          </div>
          <div className="spacer"></div>
          <div>
            <img
              src={singerwoman}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, (max-width: 991px) 59vw, 450px"
              //srcset="../images/art-laptop-singer-woman-p-500.png 500w, ../images/art-laptop-singer-woman-p-800.png 800w, ../images/art-laptop-singer-woman.png 1080w"
              alt=""
              className="image"
            />
          </div>
        </div>
        <div className="space-between stretch _10p">
          <div>
            <img
              src={legalwoman}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, (max-width: 991px) 52vw, 450px"
              //srcset="../images/art-legal-woman-p-500.png 500w, ../images/art-legal-woman-p-800.png 800w, ../images/art-legal-woman.png 1080w"
              alt=""
              className="image"
            />
          </div>
          <div className="spacer"></div>
          <div className="div-grow">
            <h2>Pause Disbursements as Required by law</h2>
            <p>
              Our platform is compliant with legal requirements while
              maintaining full control over your clients’ music rights and
              royalties.
            </p>
          </div>
        </div>
        <div className="space-between stretch _10p">
          <div className="div-grow">
            <h2>User Managed Accounts</h2>
            <p>
              VASTR offers flexible payment management that works with your
              existing system. Whether you handle distributions directly or work
              through aggregators, our platform seamlessly integrates with your
              preferred method. Artists and rights holders can monitor their
              involvement in various works and track revenue streams, while
              payments can be managed either personally or through your chosen
              distribution service. This flexible approach ensures smooth
              operations whether you're hands-on or prefer to delegate payment
              management.
            </p>
          </div>
          <div className="spacer"></div>
          <div>
            <img
              src={laptops}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, 450px"
              //srcset="../images/art-couple-on-laptops-p-500.png 500w, ../images/art-couple-on-laptops-p-800.png 800w, ../images/art-couple-on-laptops.png 1080w"
              alt=""
              className="image"
            />
          </div>
        </div>
        <div className="space-between stretch _10p">
          <div>
            <img
              src={lotus}
              loading="lazy"
              sizes="(max-width: 767px) 90vw, 450px"
              //srcset="../images/art-Lotus-woman-p-500.png 500w, ../images/art-Lotus-woman-p-800.png 800w, ../images/art-Lotus-woman.png 960w"
              alt=""
              className="image"
            />
          </div>
          <div className="spacer"></div>
          <div className="div-grow">
            <h2>Support for Charitable Donations</h2>
            <p>
              Give back with VASTR by building in overrides for charitable
              donations. Whether your client wants to donate a portion of their
              royalties or set up special contributions for a cause, our
              platform makes it simple to use music to support the social causes
              you and your clients care about.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;