import React, { useEffect } from "react";
import "./main.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Built from "./components/Built";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import Industry from "./components/Industry";
import Deamle from "./components/Deamle";
import Stream from "./components/Stream";
import FaqHero from "./components/FaqHero";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  });
  return (
    <div>
      <Nav />
      <section className="hero">
        <Hero />
      </section>
      <Features />
      <Built />
      <Industry />
      <section className="section smoke">
        <Deamle />
      </section>
      <section className="section">
        <Stream />
      </section>
      <FaqHero />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
