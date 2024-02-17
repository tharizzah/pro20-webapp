import React from "react";
import remission from "../images/icon-remission.svg";
import low from "../images/icon-low.svg";
import moderate from "../images/icon-moderate.svg";
import high from "../images/icon-high.svg";

const Instruments = () => {
  return (
    <div class="row-outer">
      <div class="row-multi h w-full">
        <a href="#" class="card-wrapper smar">
          <div class="card-instrument pro">
            <div>CDAI</div>
            <img src={low} class="icon-instrument" />
            <span class="text-green-700 text-xs">Low</span>
          </div>
        </a>
        <a href="#" class="card-wrapper smar">
          <div class="card-instrument pro">
            <div>CDAI Swollen Joints</div>
            <img src={moderate} class="icon-instrument" />
            <span class="text-yellow-800 text-xs">Moderate</span>
          </div>
        </a>
        <a href="#" class="card-wrapper smar">
          <div class="card-instrument pro">
            <div>CDAI Tender Joints</div>
            <img src={high} class="icon-instrument" />
            <span class="text-red-700 text-xs">High</span>
          </div>
        </a>
      </div>
      <div class="row-multi h w-full">
        <a href="#" class="card-wrapper smar">
          <div class="card-instrument pro">
            <div>DAS28CRP</div>
            <img src={low} class="icon-instrument" />
            <span class="text-green-700 text-xs">Low</span>
          </div>
        </a>
        <a href="#" class="card-wrapper smar" style={{ opacity: 0.3 }}>
          <div class="card-instrument pro">
            <div>DAS28ESR</div>
            <img src={remission} class="icon-instrument" />
            <span class="text-gray-700 text-xs">Remission</span>
          </div>
        </a>
        <a href="#" class="card-wrapper smar">
          <div class="card-instrument pro">
            <div>KOOS12 ADL</div>
            <img src={high} class="icon-instrument" />
            <span class="text-red-700 text-xs">High</span>
          </div>
        </a>
      </div>

      <div class="row-multi h w-full">
        <a href="#" class="card-wrapper smar">
          <div class="card-instrument pro">
            <div>CDAI</div>
            <img src={low} class="icon-instrument" />
            <span class="text-green-700 text-xs">Low</span>
          </div>
        </a>
        <a href="#" class="card-wrapper smar">
          <div class="card-instrument pro">
            <div>CDAI Swollen Joints</div>
            <img src={moderate} class="icon-instrument" />
            <span class="text-yellow-800 text-xs">Moderate</span>
          </div>
        </a>
        <a href="#" class="card-wrapper smar">
          <div class="card-instrument pro">
            <div>CDAI Tender Joints</div>
            <img src={high} class="icon-instrument" />
            <span class="text-red-700 text-xs">High</span>
          </div>
        </a>
      </div>
      <div class="row-multi h w-full">
        <a href="#" class="card-wrapper smar">
          <div class="card-instrument pro">
            <div>CDAI Tender Joints</div>
            <img src={high} class="icon-instrument" />
            <span class="text-red-700 text-xs">High</span>
          </div>
        </a>
        <a href="#" class="card-wrapper smar">
          <div class="card-instrument pro">
            <div>DAS28CRP</div>
            <img src={low} class="icon-instrument" />
            <span class="text-green-700 text-xs">Low</span>
          </div>
        </a>
        <a href="#" class="card-wrapper smar" style={{ opacity: 0.3 }}>
          <div class="card-instrument pro">
            <div>DAS28ESR</div>
            <img src={remission} class="icon-instrument" />
            <span class="text-gray-700 text-xs">Remission</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Instruments;
