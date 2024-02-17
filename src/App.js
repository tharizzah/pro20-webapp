import logo from "./illumination-pro_wht_logo.png";
import Instruments from "./components/Instruments";
//import "./App.css";
import BarChart from "./components/BarChart";
import "./output.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="h-full">
          <div class="blue-header">
            <div>
              <img src={logo} width="220" alt="Illumination PRO" class="logo" />
            </div>
            <a href="#" class="wht-text">
              View All Patients
            </a>
          </div>

          <div class="img-bottom-burst notp">
            <div class="qa-container">
              <div class="title-gr pt-2p">
                <div>&nbsp;John Elway Health Summary</div>
              </div>
            </div>

            <div class="flex-1" id="instruments">
              <div class="header-provider mb-2p">
                <span class="text-blue-100">
                  Latest Disease Activity Summary
                </span>
              </div>
              <Instruments />
              <div class="border-t pt-10px">
                <strong>Description:&nbsp;</strong>Asssessment of daily living
                function related to knee problems
              </div>
              <div class="header-provider">
                <span class="text-blue-100">Disease Activity Summary</span>
              </div>
              <div class="row-multi h w-full pl-2p">
                <div class="mt-mr2p">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
