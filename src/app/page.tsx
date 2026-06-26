import Link from "next/link";
import { CheckCircle2, Clock3, TrendingUp } from "lucide-react";
import { DesignHallBoard } from "@/components/DesignHallBoard";
import { HomeHero } from "@/components/HomeHero";
import { MetricCard } from "@/components/MetricCard";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SectionHeading } from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <section className="section padded-top">
        <div className="container metrics-row">
          <MetricCard icon={TrendingUp} value="47" label="Orders Today" />
          <MetricCard icon={Clock3} value="134" label="Projects In Progress" />
          <MetricCard icon={CheckCircle2} value="2,847" label="Completed Designs" />
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHeading
            title="Live Design Hall"
            body="Watch our busy design studio in action. Projects are constantly being updated, reviewed, and delivered to satisfied clients worldwide."
          />
          <DesignHallBoard />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Our Logo Design Portfolio"
            body="Explore our collection of professional logo designs created for clients across various industries. Each design tells a unique story and builds a memorable brand identity."
          />
          <PortfolioGrid />
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">Ready to create your perfect logo?</span>
            <h2>Start with a package tonight, connect payments tomorrow.</h2>
          </div>
          <Link href="/logo-design" className="button button-primary">
            Start Your Logo Design
          </Link>
        </div>
      </section>
    </main>
  );
}
