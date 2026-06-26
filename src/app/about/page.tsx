import { Award, Globe2, Puzzle, Users } from "lucide-react";
import { team } from "@/data/site";
import { MetricCard } from "@/components/MetricCard";
import { SectionHeading } from "@/components/SectionHeading";

const journey = [
  ["2019", "Founded", "WeDesign was born from a passion to democratize professional design for businesses worldwide."],
  ["2020", "Global Expansion", "Opened design studios in 3 countries, serving clients across 25+ nations."],
  ["2021", "1000+ Logos", "Celebrated delivering our 1000th logo design, marking a major milestone."],
  ["2022", "Award Recognition", "Won Best Design Agency award and featured in major design publications."],
  ["2023", "AI Integration", "Integrated AI tools to enhance our design process while maintaining human creativity."],
  ["2024", "5000+ Happy Clients", "Reached 5000+ satisfied clients with a 98% customer satisfaction rate."]
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section about-hero">
        <div className="container about-hero-grid">
          <div>
            <span className="eyebrow">Worldwide Design - Best Delivered</span>
            <h1>About WeDesign</h1>
            <p>
              We are a passionate team of designers, strategists, and creatives dedicated to helping
              businesses worldwide build memorable brand identities through exceptional logo design.
            </p>
          </div>
          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
              alt="WeDesign team collaborating"
            />
            <span>
              <strong>2019</strong>
              Founded
            </span>
          </div>
        </div>
        <div className="container metrics-row narrow">
          <MetricCard icon={Award} value="5000+" label="Logos Created" />
          <MetricCard icon={Users} value="50+" label="Team Members" />
          <MetricCard icon={Globe2} value="40+" label="Countries Served" />
          <MetricCard icon={Puzzle} value="98%" label="Satisfaction Rate" />
        </div>
      </section>

      <section className="section tinted">
        <div className="container mission-grid">
          <article>
            <span className="icon-tile">
              <Award size={24} />
            </span>
            <h2>Our Mission</h2>
            <p>
              To democratize professional logo design by making world-class creative services
              accessible to businesses of all sizes, anywhere in the world.
            </p>
          </article>
          <article>
            <span className="icon-tile">
              <Globe2 size={24} />
            </span>
            <h2>Our Vision</h2>
            <p>
              To become the world's most trusted logo design partner, known for exceptional creativity,
              lightning-fast delivery, and unmatched customer satisfaction.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Meet Our Team"
            body="Our diverse team of creative professionals brings together decades of experience from top design agencies and brands around the world."
          />
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <strong>{member.role}</strong>
                <p>{member.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHeading
            title="Our Journey"
            body="From a small design studio to a global creative agency, here's how we've grown and evolved to better serve our clients worldwide."
          />
          <div className="timeline-list">
            {journey.map(([year, title, body]) => (
              <article key={year}>
                <strong>{year}</strong>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
