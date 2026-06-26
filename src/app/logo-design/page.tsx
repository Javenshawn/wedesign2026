import Link from "next/link";
import { PackageCards } from "@/components/PackageCards";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SectionHeading } from "@/components/SectionHeading";

export default function LogoDesignPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container">
          <SectionHeading title="Choose Your Package" body="Professional logo design with unlimited revisions" />
          <PackageCards />
          <div className="trust-row">
            <span>5,000+ businesses</span>
            <span>4.9/5 rating</span>
            <span>2 hour response</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Our Logo Design Portfolio"
            body="Explore professional logo designs created for clients across different industries."
          />
          <PortfolioGrid />
        </div>
      </section>

      <section className="section cta-band">
        <div className="container centered-cta">
          <span className="eyebrow">Ready to Create Your Perfect Logo?</span>
          <p>
            Our experienced design team is ready to bring your brand vision to life. Choose from our
            flexible packages and get started on your logo design journey today.
          </p>
          <div className="button-row">
            <Link href="#top" className="button button-primary">
              Start Your Logo Design
            </Link>
            <Link href="/design-hall" className="button button-ghost">
              View Active Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
