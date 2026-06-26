"use client";

import { Activity, CheckCircle2, Clock, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/data/site";
import { MetricCard } from "@/components/MetricCard";
import { ProjectCard } from "@/components/ProjectCard";

type BoardMode = "all" | "client";

export function DesignHallBoard({ detailed = false }: { detailed?: boolean }) {
  const [mode, setMode] = useState<BoardMode>("all");

  const visibleProjects = useMemo(() => {
    if (mode === "client") {
      return projects.slice(0, detailed ? 2 : 4);
    }
    return detailed ? projects.slice(0, 6) : projects;
  }, [detailed, mode]);

  return (
    <section className={detailed ? "design-board detailed-board" : "design-board"}>
      <div className="segmented-controls" role="tablist" aria-label="Design hall view">
        <button
          className={mode === "all" ? "active" : ""}
          type="button"
          onClick={() => setMode("all")}
          role="tab"
          aria-selected={mode === "all"}
        >
          All Projects ({detailed ? 6 : 16})
        </button>
        <button
          className={mode === "client" ? "active" : ""}
          type="button"
          onClick={() => setMode("client")}
          role="tab"
          aria-selected={mode === "client"}
        >
          Client View ({detailed ? 2 : 4})
        </button>
      </div>

      {!detailed ? <p className="live-note">Live updates - Projects refreshing automatically</p> : null}

      <div className={detailed ? "project-grid large" : "project-grid"}>
        {visibleProjects.map((project) => (
          <ProjectCard project={project} detailed={detailed} key={project.id} />
        ))}
      </div>

      {detailed ? (
        <div className="wide-metrics">
          <MetricCard icon={Activity} value="3" label="Active Projects" />
          <MetricCard icon={CheckCircle2} value="1" label="Completed Today" />
          <MetricCard icon={Users} value="65%" label="Average Progress" />
          <MetricCard icon={Clock} value="24h" label="Average Delivery" />
        </div>
      ) : (
        <div className="board-actions">
          <a className="button button-primary" href="/logo-design">
            Start Project
          </a>
          <button className="button button-ghost" type="button">
            Submit Changes
          </button>
          <a href="/design-hall" className="text-link">
            View All Projects
          </a>
        </div>
      )}
    </section>
  );
}
