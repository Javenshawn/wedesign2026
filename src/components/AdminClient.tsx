"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Clock, Download, UploadCloud } from "lucide-react";
import { projects } from "@/data/site";
import type { Project, ProjectStatus } from "@/lib/types";

export function AdminClient() {
  const [items, setItems] = useState<Project[]>(projects.slice(0, 6));
  const [selected, setSelected] = useState(items[0].id);

  const activeProject = useMemo(() => items.find((item) => item.id === selected) || items[0], [items, selected]);

  function updateStatus(status: ProjectStatus) {
    setItems((current) =>
      current.map((item) =>
        item.id === activeProject.id
          ? {
              ...item,
              status,
              progress: status === "completed" ? 100 : status === "review" ? Math.max(item.progress, 88) : item.progress
            }
          : item
      )
    );
  }

  return (
    <div className="admin-layout">
      <section className="dashboard-hero">
        <div>
          <span className="eyebrow">Admin Workspace</span>
          <h1>Manage logo orders</h1>
          <p>
            Local operations board for project status, delivery prep, and customer communication. This
            becomes your Supabase-backed admin area later.
          </p>
        </div>
        <div className="admin-stats">
          <span>
            <Clock size={18} /> 7 active
          </span>
          <span>
            <CheckCircle2 size={18} /> 3 delivered
          </span>
        </div>
      </section>

      <div className="admin-grid">
        <section className="workspace-card project-table-card">
          <h2>Project Queue</h2>
          <div className="project-table">
            {items.map((item) => (
              <button
                type="button"
                key={item.id}
                className={item.id === selected ? "active" : ""}
                onClick={() => setSelected(item.id)}
              >
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.client}</small>
                </span>
                <small>{item.status}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="workspace-card project-editor">
          <div className="card-header-row">
            <div>
              <h2>{activeProject.title}</h2>
              <p>
                {activeProject.id} - {activeProject.client}
              </p>
            </div>
            <span className="status-pill status-blue">{activeProject.progress}%</span>
          </div>

          <div className="admin-detail-grid">
            <span>
              <strong>Package</strong>
              {activeProject.category}
            </span>
            <span>
              <strong>Designer</strong>
              {activeProject.designer}
            </span>
            <span>
              <strong>ETA</strong>
              {activeProject.eta}
            </span>
            <span>
              <strong>Style</strong>
              {activeProject.style}
            </span>
          </div>

          <div className="status-actions">
            <button type="button" onClick={() => updateStatus("in progress")}>
              In Progress
            </button>
            <button type="button" onClick={() => updateStatus("review")}>
              Send Review
            </button>
            <button type="button" onClick={() => updateStatus("completed")}>
              Mark Complete
            </button>
          </div>

          <div className="delivery-box">
            <UploadCloud size={24} />
            <div>
              <h3>Deliverable upload</h3>
              <p>Supabase Storage will hold final logo packages here after account setup.</p>
            </div>
            <button className="button button-ghost" type="button">
              <Download size={15} />
              Prepare ZIP
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
