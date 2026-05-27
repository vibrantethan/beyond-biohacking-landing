"use client";

import EventStrip from "@/components/EventStrip";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Credentials from "@/components/Credentials";
import BoothCTA from "@/components/BoothCTA";
import Footer from "@/components/Footer";

export default function Page() {
  const jump = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <EventStrip />
      <Nav onJump={jump} />
      <Hero onJump={jump} />
      <About />
      <Products />
      <section className="photo-strip" style={{ backgroundImage: "url('/assets/kit-flatlay.jpg')" }} />
      <HowItWorks />
      <Credentials />
      <BoothCTA onJump={jump} />
      <Footer />
    </>
  );
}
