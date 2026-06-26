"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, CircleDollarSign, FileText, Play, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { heroSlides } from "@/data/site";

const steps = [
  { icon: CircleDollarSign, title: "Choose Package", body: "Select your perfect design package" },
  { icon: FileText, title: "Submit Brief", body: "Share your brand vision with us" },
  { icon: ShieldCheck, title: "Secure Payment", body: "Complete payment safely" },
  { icon: Sparkles, title: "Design Delivery", body: "Get your logo within 24-72h" }
];

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  function move(direction: number) {
    setIndex((current) => (current + direction + heroSlides.length) % heroSlides.length);
  }

  return (
    <section className="hero-shell">
      <div className="hero-panel">
        <img className="hero-image" src={slide.image} alt={slide.label} />
        <div className="hero-overlay" />
        <button className="hero-nav left" type="button" aria-label="Previous slide" onClick={() => move(-1)}>
          <ChevronLeft size={18} />
        </button>
        <button className="hero-nav right" type="button" aria-label="Next slide" onClick={() => move(1)}>
          <ChevronRight size={18} />
        </button>
        <span className="auto-pill">Auto</span>

        <div className="hero-video">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
            alt="Designer sketching a logo on a tablet"
          />
          <button type="button" aria-label="Play overview">
            <Play size={24} fill="currentColor" />
          </button>
        </div>

        <div className="hero-content">
          <h1>How WeDesign Works</h1>
          <p>Professional logo in 4 simple steps</p>
          <div className="hero-steps">
            {steps.map((step, stepIndex) => {
              const Icon = step.icon;
              return (
                <div className="hero-step" key={step.title}>
                  <span className="step-icon">
                    <Icon size={17} />
                  </span>
                  <strong>{stepIndex + 1}</strong>
                  <div>
                    <h2>{step.title}</h2>
                    <p>{step.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hero-cta">
            <span>Join 5000+ satisfied customers who trust WeDesign.</span>
            <Link href="/logo-design">Start Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
