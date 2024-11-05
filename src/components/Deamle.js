import React from "react";
import atsymbol from "../images/art-lotus_atsymbol.png";
import deamle from "../images/iOS_TuneGevity-p-800.png";

const Licensing = () => {
  return (
    <div
      data-w-id="25d7b613-c891-3dec-69ac-b360188a5f48"
      style={{ opacity: 0 }}
      className="w-layout-blockcontainer container w-container"
    >
      <div className="center col">
        <h2>Meet Deamle: More Than Just Streaming</h2>
        <p>
          Available on iOS and Android, Deamle is our consumer streaming app
          that goes beyond traditional platforms. While offering familiar
          streaming features fans expect, it uniquely enables artists to create
          premium listening experiences. Set up exclusive content releases,
          pre-release previews, and special tracks—all with custom pricing and
          access controls. Fully compatible with digital music aggregators,
          Deamle lets you craft exactly how your fans experience and engage with
          your music. It's streaming reimagined, putting artists in control of
          their musical journey.
        </p>
        <img
          className="image"
          src={deamle}
          alt="Meet Deamle"
          style={{ opacity: 0 }}
          sizes="(max-width: 767px) 90vw, 450px"
          data-w-id="927a63f6-5fb4-ab4d-f00c-78808c88510a"
          loading="lazy"
        />
      </div>
      <div className="space-between stretch">
        <div>
          <div className="spacer"></div>
          <div className="space-between"></div>
        </div>
        <div className="spacer"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Licensing;
