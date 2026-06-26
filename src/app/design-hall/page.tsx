import { DesignHallBoard } from "@/components/DesignHallBoard";
import { SectionHeading } from "@/components/SectionHeading";

export default function DesignHallPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Live Design Hall"
            body="Track your logo design projects in real-time. See progress updates, delivery timelines, and download your completed designs."
          />
          <DesignHallBoard detailed />
        </div>
      </section>
    </main>
  );
}
