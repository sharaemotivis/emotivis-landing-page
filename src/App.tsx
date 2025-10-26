// src/App.tsx
import React from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { SalesRep } from "./components/SalesRep";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { WhatIsEmotivis } from "./components/WhatIsEmotivis";
import { Integrations } from "./components/Integrations";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Benefits />
      <WhatIsEmotivis />
      <Integrations />
      <Testimonials />
      <Pricing />
      <SalesRep />
      <ContactUs />
      <Footer />
    </div>
  );
}
